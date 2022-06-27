/* eslint-disable @typescript-eslint/no-explicit-any */
import 'styled-components';
import type { Palette } from './GlobalStyle';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: Palette;
  }
}

declare module '*.svg' {
  const content: any;
  export default content;
}
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
