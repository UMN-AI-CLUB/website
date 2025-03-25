import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  perspective: 1000;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondarySoft};
  border-radius: 10px;
  padding: 1.8rem;
  gap: 0.6rem;
  cursor: default;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Slight box shadow */
  transition: box-shadow 0.3s ease; /* Smooth shadow on hover */

  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); /* Slightly stronger shadow on hover */
  }
`;

export const Title = styled.h3`
  display: flex;
  gap: 1rem;
  font-weight: 500;
  font-size: 1.7rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  max-width: 20rem;
  font-weight: 300;
  letter-spacing: 0.07rem;
  line-height: 1.5rem;
`;
