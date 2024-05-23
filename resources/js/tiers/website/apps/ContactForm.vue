<script setup lang="ts">
import Button from "@/modules/bootstrap/components/Button.vue";
import StringInput from "@/modules/form/components/StringInput.vue";
import TextInput from "@/modules/form/components/TextInput.vue";
import { createModel } from "@/modules/form/hooks/model";
import { Field } from "@/modules/form/lib/field";
import { Model } from "@/modules/form/lib/model";
import { RequiredRule } from "@/modules/form/rules/required";
import { StringRule } from "@/modules/form/rules/string";
import { mdiAccount, mdiFormTextboxPassword, mdiSend } from "@mdi/js";
import { onMounted, onUnmounted, ref } from "vue";
import Icon from "@/components/Icon.vue";
import { api } from "@/lib/api";
import { metadata, translate } from "@/lib/metadata";
import { isDark } from "@/modules/theme";
import RecaptchaInput from "@/modules/form/components/RecaptchaInput.vue";

import App from "vue";
import { successToast } from "@/modules/bootstrap/lib/toast";
type Props = {
    redirectUrl?: string;
};
const { redirectUrl = "" } = defineProps<Props>();

class ContactForm extends Model {
    get name(): Field {
        return this.field("name", translate("Your name*"), this.initData?.name ?? "");
    }
    get email(): Field {
        return this.field("email", translate("Your e-mail*"), this.initData?.email ?? "");
    }
    get phone(): Field {
        return this.field("phone", translate("Your phone number*"), this.initData?.phone ?? "");
    }
    get CompanyName(): Field {
        return this.field("CompanyName", translate("Your company name*"), this.initData?.CompanyName ?? "");
    }
    get message(): Field {
        return this.field(
            "message",
            translate("your message*"),
            this.initData?.message ?? ""
        );
    }

    get recaptcha(): Field {
        return this.field(
            "recaptcha",
            translate("ReCaptcha"),
            this.initData?.recaptcha ?? ""
        );
    }

    get rules(): any[] {
        return [
            [[this.name, this.phone, this.email, this.message], StringRule],
            [[this.name, this.email, this.message, this.CompanyName, this.phone], RequiredRule],
        ];
    }
}
// const button = ref<any>(null);

const [model, newModel, destroyModel] = createModel(ContactForm);

const send = () => {
    model.value?.validate()?.then((valid: boolean) => {
        if (valid) {
            //   button.value?.start?.();
            api()
                .post("/test", model.value?.data ?? {})
                .then(({ data }: any) => {
                    successToast('Form Sent');
                    console.log(model.value?.data);
                })
                .catch((err) => {
                    model.value?.addRemoteErrors?.(err);
                })
                .finally(() => {
                    //   button.value?.stop?.();
                });
        }
    });
};

onMounted(() => {
    newModel();
});

onUnmounted(() => {
    destroyModel();
});
</script>
<template>
    <form v-if="model" @submit.prevent="send" class="contact-form-vue">
        <div class="row">
            <div class="col-md-6">
                <StringInput :field="model.name" :class="'name'" no-label> </StringInput>
                <StringInput :field="model.CompanyName" :class="'company'" no-label> </StringInput>
                <StringInput :field="model.phone" :class="'number'" no-label> </StringInput>
                <StringInput :field="model.email" :class="'mail'" no-label> </StringInput>
                <TextInput :placeholder="'Your message*'" :field="model.message" :class="'message'" no-label
                    aria-placeholder="Message*"></TextInput>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="submit-captcha pt-4">
                    <div>
                        <Button type="submit" color="" class="submit btn-gradient-2" ref="button">
                            {{ translate("Submit Now") }}
                        </Button>
                    </div>
                    <div class="recaptcha">
                        <RecaptchaInput :field="model.recaptcha"></RecaptchaInput>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>
<style lang="scss">
.contact-form-vue {
    padding-top: 4rem;

    .form-control {
        border: 0;
        padding: 0;
    }

    .field-wrapper-message,
    .field-wrapper-email,
    .field-wrapper-CompanyName,
    .field-wrapper-name,
    .field-wrapper-phone {
        .input-group {
            padding-bottom: 2rem;

            textarea {
                border-bottom: solid 1px #C0C5CB;
                border-radius: 0;
                background: transparent;
                height: 100px;

                &::placeholder {
                    color: #2c3e50;
                    font-weight: 300;
                }

                &:focus {
                    outline: none;
                    box-shadow: 0px 0px;
                }
            }

            input {
                border-bottom: solid 1px #C0C5CB;
                border-radius: 0;
                padding-bottom: 5px;
                background: transparent;

                &::placeholder {
                    color: #2c3e50;
                    font-weight: 300;
                }

                &:focus {
                    outline: none;
                    box-shadow: 0px 0px;
                }
            }
        }
    }

    .field-wrapper-CompanyName,
    .field-wrapper-phone {
        .input-group {
            width: 50%;

            @media (max-width: 767px) {
                width: 100%;
            }
        }
    }

    .submit {
        // background: #5cd180;
        padding: 8px 45px !important;
        font-weight: 600 !important;
        color: white;
    }

    .btn-gradient-2 {
        background: linear-gradient(#5cd180, #5cd180) padding-box,
            linear-gradient(to right, #4fff89, #e7ffeb) border-box !important;
        border-radius: 50em !important;
        border: 4px solid transparent !important;
        transition: color 1s;

        &:hover {
            animation: fillBackground 3s !important;
            background: linear-gradient(#2c3e50, #2c3e50) padding-box,
                linear-gradient(to right, #4fff89, #e7ffeb) border-box !important;
            color: #5cd180 !important;
        }
    }
}

.submit-captcha {
    display: flex;
    justify-content: space-between;

    @media (max-width:767px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-flow: column-reverse;
    }
}
</style>