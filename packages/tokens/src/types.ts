export type DtcgTokenType =
  | "color"
  | "dimension"
  | "fontFamily"
  | "fontWeight"
  | "duration"
  | "number"
  | "cubicBezier"
  | "shadow"
  | "typography";

export interface DtcgToken<TValue = string> {
  $value: TValue;
  $type?: DtcgTokenType;
  $description?: string;
  $deprecated?: boolean | string;
  $extensions?: Record<string, unknown>;
}

export type DtcgGroup = {
  [key: string]: DtcgToken | DtcgGroup;
};
