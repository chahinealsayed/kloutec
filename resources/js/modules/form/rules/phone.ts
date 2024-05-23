import { Rule } from "../lib/rule";
import { isValidPhoneNumber } from "libphonenumber-js";

export class PhoneRule extends Rule {
  get defaultMessage(): string {
    return "Invalid {attribute}";
  }
  validate(): Promise<boolean> {
    return new Promise((resolve) => {
      resolve(isValidPhoneNumber(this.field.value));
    });
  }
}
