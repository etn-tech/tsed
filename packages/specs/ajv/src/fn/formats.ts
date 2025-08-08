import {injectable, type TokenProvider} from "@tsed/di";

import type {FormatsOptions} from "../..";

/**
 * Create a new custom formats validator
 * @param token
 * @param name
 * @param options
 * @ajv
 */
export function formats(token: TokenProvider, name: string, options: FormatsOptions = {}) {
  return injectable(token, {type: "ajv:formats"}).set("ajv:formats", {
    name,
    options
  });
}
