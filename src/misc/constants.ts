export const Paths = {
  Index: "/",
  Parts: "/parts",
} as const;

export type Paths = (typeof Paths)[keyof typeof Paths];

/** ページを示す型。 */
// export type Pages = "Index" | "Parts";

export const Pages = {
  Index: "index",
  Parts: "parts",
} as const;
export type Pages = (typeof Pages)[keyof typeof Pages];
