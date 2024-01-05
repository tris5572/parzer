import "styled-components";
import { THEME } from "@/misc/theme";

type Theme = typeof THEME;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
