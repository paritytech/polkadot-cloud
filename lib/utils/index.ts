/* Returns ` t` if truthy, or an empty string otherwise. */
export const valEmpty = (t: boolean | string | undefined, v: string) =>
  t ? ` ${v}` : "";

/* Returns ` v` if `t` is truthy, or ` w` otherwise. */
export const valOr = (t: boolean | string | undefined, v: string, w: string) =>
  t ? ` ${v}` : ` ${w}`;
