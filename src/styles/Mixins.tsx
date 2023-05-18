"use client";

import { css } from "styled-components";

export const container = css`
  --container: 1240px;
  box-sizing: border-box;
  width: 100%;
  padding-left: max(calc(50% - var(--container) / 2), 2rem);
  padding-right: max(calc(50% - var(--container) / 2), 2rem);
`;
