"use client";

import React from "react";
import * as S from "./Typography.styles";
import { TypographySize, TypographyVariant } from "./Typography.types";

type Props =
  | {
      variant: Extract<TypographyVariant, 'Heading'>;
      size: TypographySize;
      bold?: boolean;
      children: React.ReactNode;
    }
  | {
      variant: Extract<TypographyVariant, 'Body'>;
      size: Extract<TypographySize, 'md' | 'lg'>;
      bold?: boolean;
      children: React.ReactNode;
    };

export const Typography = ({ variant = "Body", size, bold, children }: Props) => {
  // @ts-ignore: Types are correct, but TS doesn't like it
  const element = variant === "Heading" ? S.Heading(size) : S.Body(size, bold);
  return React.createElement(element, {}, children);
};
