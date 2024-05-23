<script setup lang="ts">
import Dropdown from '@/modules/bootstrap/components/Dropdown.vue';
import { Field } from '../lib/field';
import FieldWrapper from './base/FieldWrapper.vue';
import { GroupSlots } from './base/FieldWrapper.vue';
import parsePhoneNumber, { getCountries, getCountryCallingCode, CountryCode } from 'libphonenumber-js'
import { computed, ref } from 'vue';
import { language } from '@/lib/metadata';
import DropdownItem from '@/modules/bootstrap/components/DropdownItem.vue';
import DropdownDivider from '@/modules/bootstrap/components/DropdownDivider.vue';
import { PhoneRule } from '../rules/phone';

defineOptions({
    inheritAttrs: false,
});

defineSlots<Omit<GroupSlots, "buttonBefore">>();

type Props = {
    field: Field;
    noLabel?: boolean;
    placeholder?: string;
    allowedCountries?: Array<CountryCode>;
    ignoredCountries?: Array<CountryCode>;
    preferredCountries?: Array<CountryCode>;
};
const props = defineProps<Props>();

const { field, noLabel = false, placeholder = props.field.label, allowedCountries = [], ignoredCountries = [], preferredCountries = [] } = props;

field.parent.validationRules.push(PhoneRule.assign(field));

const phoneNumber = ref<any>(parsePhoneNumber(field.value))
const keyword = ref<string>('')

const code = computed(() => phoneNumber.value?.country ?? "XX")
const countryCallingCode = computed(() => phoneNumber.value?.countryCallingCode ?? null)
const nationalNumber = computed(() => phoneNumber.value?.nationalNumber ?? null)
const number = computed(() => phoneNumber.value?.number ?? null)

field.events.afterUpdate.listen(() => {
    phoneNumber.value = parsePhoneNumber(field.value);
})

const formatNational = () => phoneNumber.value.formatNational()
const formatInternational = () => phoneNumber.value.formatInternational()

const countries = computed(() => {
    const getCountryNames = new Intl.DisplayNames([language()], { type: 'region' });
    const list = getCountries().filter((code: CountryCode) => {
        return !['IL'].includes(code) &&
            (!allowedCountries.length || allowedCountries.includes(code)) &&
            (!ignoredCountries.length || !ignoredCountries.includes(code)) &&
            (!keyword.value || getCountryNames.of(code)?.toLowerCase?.()?.includes?.(keyword.value))
    }).map((code: CountryCode) => {
        return {
            code,
            name: getCountryNames.of(code),
            callingCode: getCountryCallingCode(code),
        }
    })
    if (preferredCountries.length > 0) {
        const preferred: Array<any> = [];
        list.forEach((value, index) => {
            if (preferredCountries.includes(value.code)) {
                const i = preferredCountries.findIndex((code) => code === value.code);
                if (i >= 0) {
                    preferred[i] = { ...value }
                    list.splice(index, 1)
                }
            }
        })
        return [...preferred, ...(list.length > 0 && preferred.length > 0 ? ['--'] : []), ...list].filter(value => value)
    }
    return list;
})

const changeCountry = (country: any) => {
    field.touch();
    field.update(`+${country.callingCode}${field.value.replace(`+${countryCallingCode.value}`, '')}`)
}

const focus = (e: any) => {
    const searchInput = e.target.parentElement.querySelector('.search-input')
    searchInput?.focus?.()
}

const clear = (e: any) => {
    const searchInput = e.target.parentElement.querySelector('.search-input')
    searchInput?.blur?.()
    keyword.value = ""
}

const update = (e) => {
    if (e.target.value.startsWith('+')) {
        field.update(e.target.value);
    } else {
        field.update(`+${countryCallingCode.value}${e.target.value}`);
    }
};

const touch = (e) => {
    field.touch(e);
};

const blur = (e) => {
    field.blur(e);
};

defineExpose({ code: () => code.value, countryCallingCode: () => countryCallingCode.value, nationalNumber: () => nationalNumber.value, number: () => number.value, formatNational, formatInternational })
</script>
<template>
    <FieldWrapper :field="field" :no-label="noLabel">
        <template v-for="(_, slot) in $slots" v-slot:[slot]="scope">
            <slot :name="slot" v-bind="{ ...scope }" />
        </template>
        <template #buttonBefore>
            <Dropdown div @opened="focus" @closed="clear">
                <template #button>
                    <span :class="{ fi: true, [`fi-${code?.toLowerCase?.()}`]: true }"></span> {{
                        countryCallingCode ? `+${countryCallingCode}` : "--" }}
                </template>
                <input type="search" v-model="keyword" class="form-control border-0 rounded-0 search-input mb-2"
                    placeholder="Search...">
                <template v-for="(country, index) in countries" :key="country?.code ?? index">
                    <template v-if="country === '--'">
                        <DropdownDivider />
                    </template>
                    <template v-else>
                        <DropdownItem @click="changeCountry(country)"
                            :class="{ 'country-item': true, active: country.code?.toLowerCase?.() === code?.toLowerCase?.() }">
                            <div class="d-flex gap-3">
                                <span :class="{ fi: true, [`fi-${country.code?.toLowerCase?.()}`]: true }"></span>
                                <span class="country">{{ country.name }}</span>
                                <span class="calling-code">{{ `(+${country.callingCode})`.padStart(6, "&nbsp;") }}</span>
                            </div>
                        </DropdownItem>
                    </template>

                </template>
            </Dropdown>
        </template>
        <template #="{ id }">
            <input :id="id" class="form-control" :class="{ 'is-invalid': field.hasErrors }"
                :value="field.value.replace(`+${countryCallingCode}`, '')" v-bind="$attrs" @input="update" @focus="touch"
                @blur="blur" autocomplete="off" spellcheck="false" :placeholder="placeholder" />
        </template>
    </FieldWrapper>
</template>
<style scoped lang="scss">
@import "@scss/bootstrap";

.country-item {
    .calling-code {
        position: relative;
        margin-left: auto;

        @include ar {
            margin-left: none;
            margin-right: auto;
        }
    }
}
</style>
