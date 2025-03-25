import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.footer`
  box-sizing: border-box;
  width: 100%;
  place-content: center;
  place-items: center;
  padding: 2rem;
`;

export const CopyrightText = styled.p`
  color: ${({ theme }) => theme.colors.contrast};
  opacity: 0.5;
`;

export const SocialsContainer = styled.span`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  gap: 1rem;
`;

export const SocialLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.secondary};
`;
