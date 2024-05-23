import { useThemeStore } from "@/modules/theme";
import { Caret } from "./caret";
import { computed } from "vue";
import { storeToRefs } from "pinia";
export function debounce(fn: any, wait: number) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    if (typeof fn === "function") {
      fn();
    }
  }, wait);
}

export function placeCaretAtEnd(el: any) {
  el.focus();
  const body: any = document.body;
  if (
    typeof window.getSelection != "undefined" &&
    typeof document.createRange != "undefined"
  ) {
    var range = document.createRange();
    range.selectNodeContents(el);
    range.collapse(false);
    var sel: any = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  } else if (typeof body.createTextRange != "undefined") {
    var textRange = body.createTextRange();
    textRange.moveToElementText(el);
    textRange.collapse(false);
    textRange.select();
  }
}

export function pagination(
  page: number,
  perPage: number,
  total: number,
  display: number = 5
) {
  const pages = Math.ceil(total / perPage);
  const out: any = [];
  for (let p = 1; p <= pages; p++) {
    if (pages <= display) {
      out.push(p);
    } else {
      let prefix = Math.floor(display / 2);
      let suffix = Math.floor(display / 2);
      if (display % 2 === 0) {
        prefix--;
      }
      if (page <= prefix) {
        suffix += prefix - page + 1;
        prefix = page;
      } else if (pages < page + suffix) {
        const diff = page + suffix - pages;
        suffix -= diff;
        prefix += diff;
      }
      if (p === page || (p >= page - prefix && p <= page + suffix)) {
        out.push(p);
      }
    }
  }
  return out;
}

export function isPromise(obj: any): boolean {
  return !!obj && typeof obj.then === "function";
}

export function caretPosition(field: any) {
  if (field) {
    return new Caret(field).getPos();
  }
  return 0;
}

export function setCaretPosition(field: any, pos: number) {
  if (field) {
    new Caret(field).setPos(pos);
  }
}
