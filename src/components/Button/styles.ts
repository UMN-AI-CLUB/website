import { ComponentProps } from "react";
import styled from "styled-components";
import Button from ".";

interface ContainerProps {
  $variant: ComponentProps<typeof Button>["$variant"];
}

export const Container = styled.button<ContainerProps>`
  cursor: pointer;
  border-radius: 0.3rem;
  border: none;
  padding: 0.5rem 1rem;
  height: 2.25rem;
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 100ms linear;

  background-color: ${({ theme, $variant }) =>
    $variant === "alt" ? theme.colors.contrast : "transparent"};
  color: ${({ theme, $variant }) =>
    $variant === "alt" ? theme.colors.primary : theme.colors.contrast};

  &:hover {
    background-color: ${({ theme, $variant }) =>
      $variant === "alt" ? theme.colors.contrastSoft : theme.colors.contrast};
    color: ${({ theme, $variant }) =>
      $variant === "alt" ? theme.colors.primary : theme.colors.primary};
  }
`;
