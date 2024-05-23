<script lang="ts" setup>
import { Field } from "../lib/field";
import FieldWrapper, { GroupSlots } from "./base/FieldWrapper.vue";
import { nextTick, ref } from "vue";
import { vHighlight } from "@/directives/highlight";

defineOptions({
  inheritAttrs: false,
});

defineSlots<GroupSlots>();

type OptionItem = {
  value: any;
  label: string;
  custom?: any;
};

type Props = {
  field: Field;
  noLabel?: boolean;
  fill?: boolean;
};
const props = defineProps<Props>();

const { field, noLabel = false, fill = false } = props;

const query = ref<string>(field?.value ?? "");

const cache: { [name: string]: OptionItem[] } = {};

type Emits = {
  (
    eventName: "search",
    newQuery: string,
    callback: (result: OptionItem[]) => void
  ): void;
  (eventName: "select", item: OptionItem): void;
  (eventName: "empty", value: string): void;
  (eventName: "blur"): void;
};
const emit = defineEmits<Emits>();

const list: any = ref(null);

const menuRef = ref(null);

const queryInput: any = ref(null);

const loading: any = ref(false);

const call: any = ref(0);

const search = (value: string, event: any) => {
  const newQuery = `${value}`;
  if (!["Enter", "ArrowDown", "ArrowUp"].includes(event?.key)) {
    loading.value = true;
    const nextJob = () => {
      loading.value = false;
      selectionIndex.value = 0;
      if (!list.value.length) {
        emit("empty", value);
      }
      call.value++;
    };
    if (cache.hasOwnProperty(newQuery)) {
      list.value = cache[newQuery];
      nextTick(() => {
        nextJob();
      });
    } else {
      emit("search", newQuery, (result: OptionItem[]) => {
        list.value = result;
        cache[newQuery] = result;
        nextTick(() => {
          nextJob();
        });
      });
    }
  }
};

const select = (item: any) => {
  if (fill) {
    query.value = item.label;
  }
  field?.update(item.value);
  emit("select", item);
  close();
  nextTick(() => {
    queryInput.value.blur();
  });
};

const close = () => {
  list.value = null;
};

const hide = () => {
  setTimeout(close, 150);
  loading.value = false;
  emit("blur");
};

const selectionIndex = ref(0);

const selectPrev = (e) => {
  if (
    Array.isArray(list.value) &&
    list.value.length > 0 &&
    selectionIndex.value > 0
  ) {
    selectionIndex.value--;
  }
};

const selectNext = (e) => {
  if (
    Array.isArray(list.value) &&
    list.value.length > 0 &&
    selectionIndex.value < list.value.length - 1
  ) {
    selectionIndex.value++;
  }
};

defineExpose({ search, close });
</script>
<template>
  <FieldWrapper :field="field" :no-label="noLabel" v-auto-scroll="menuRef">
    <template v-for="(_, slot) in $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="{ ...scope }" />
    </template>
    <template #="{ id }">
      <div class="input-wrapper">
        <input
          class="form-control"
          v-bind="$attrs"
          v-model="query"
          autocomplete="off"
          @focus="search(query, $event)"
          @blur="hide"
          list="autocompleteOff"
          @keyup.up.prevent="selectPrev"
          @keyup.down.prevent="selectNext"
          @keyup.enter.prevent="select(list[selectionIndex])"
          ref="queryInput"
          v-debounce:300ms="search"
        />
        <div class="loader">
          <div
            v-if="loading"
            class="spinner-grow spinner-grow-sm text-primary"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
      <template v-if="Array.isArray(list)">
        <div v-if="list.length > 0" class="options" ref="menuRef">
          <template
            v-for="(item, i) in list"
            :key="`${query}-${item.value}-${call}`"
          >
            <div
              :class="{ item: true, selected: selectionIndex === i }"
              @click="select(item)"
            >
              <div v-highlight="{ query, text: `${item.label}` }">
                {{ item.label }}
              </div>
            </div>
          </template>
        </div>
        <div v-else class="options">
          <div class="item msg text-muted">
            No data found for <strong class="text-danger">{{ query }}</strong>
          </div>
        </div>
      </template>
    </template>
  </FieldWrapper>
</template>
<style scoped lang="scss">
@import "@scss/config/config";
@import "@scss/mixins/local";
@import "@scss/mixins/font-size";

.input-wrapper {
  position: relative;

  input {
    position: relative;
    z-index: 1;
    border: 1px solid $gray-2;
  }

  .loader {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;

    @include en() {
      right: 10px;
    }

    @include ar() {
      left: 10px;
    }
  }
}

.options {
  position: absolute;
  white-space: nowrap;
  min-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  background: $white;
  border-radius: 0.25rem;
  overflow: hidden;
  max-height: 420px;
  content-visibility: auto;
  contain-intrinsic-size: 420px;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 10px 0;
  transform: translateY(10px);
  z-index: 99;

  .item {
    border-bottom: 1px solid $gray-2;
    min-height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 25px;
    cursor: pointer;
    user-select: none;
    gap: 2px;
    flex: auto;
    white-space: normal;
    @include font-size(0.8);
    line-height: 14px;

    &.msg {
      cursor: auto;
    }

    &:last-child {
      border: none;
    }

    &:hover {
      background: $gray-1;
    }

    &.selected {
      background: lighten($black, 25%);
      color: $white;
    }
  }
}
</style>
