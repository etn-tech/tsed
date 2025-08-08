import {AsyncFormatDefinition, FormatDefinition} from "ajv";

import {formats} from "../fn/formats.js";

export type FormatsOptions = Omit<FormatDefinition<any>, "validate" | "compare"> | Omit<AsyncFormatDefinition<any>, "validate" | "compare">;

/**
 * Create a new custom formats validator
 * @param name
 * @param options
 * @decorator
 * @ajv
 */
export function Formats(name: string, options: FormatsOptions = {}): ClassDecorator {
  return (target) => {
    formats(target, name, options);
  };
}
