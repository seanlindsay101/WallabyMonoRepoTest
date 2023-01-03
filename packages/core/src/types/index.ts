/** @overview Custom UUID type */

import { randomUUID } from 'node:crypto'

const UUIDv4Regex = /^[\da-f]{8}-[\da-f]{4}-4[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/i

/** Functions for handling UUID values */
export const UUID = {
  /** @returns a new, random UUIDv4 value */
  generate: () => randomUUID(),

  isValid: (id: string): boolean => UUIDv4Regex.test(id),

}
