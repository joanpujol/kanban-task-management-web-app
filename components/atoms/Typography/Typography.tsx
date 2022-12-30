"use client";

import React from "react";
import * as S from "./Typography.styles";

type Props =
  | {
      variant: "Heading";
      size: "s" | "m" | "l" | "xl";
      children: React.ReactNode;
    }
  | {
      variant: "Body";
      size: "m" | "l";
      children: React.ReactNode;
    };

export const Typography = ({ variant = "Body", size, children }: Props) => {
  // @ts-ignore: Types are correct, but TS doesn't like it
  const element = variant === "Heading" ? S.Heading(size) : S.Body(size);
  return React.createElement(element, {}, children);
};
