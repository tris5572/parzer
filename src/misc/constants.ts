// export const Paths = {
//   Index: "/",
//   Parts: "/parts",
// } as const;

// export type Paths = (typeof Paths)[keyof typeof Paths];

export const Pages = {
  Index: "/",
  Parts: "/parts",
} as const;
export type Pages = (typeof Pages)[keyof typeof Pages];
