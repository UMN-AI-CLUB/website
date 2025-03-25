import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 85vh;
  place-items: center;
  place-content: center;
  position: relative;
  z-index: 100;
`;

export const Content = styled(motion.div)`
  display: flex;
  flex-direction: row;
  place-content: center;
  place-items: center;
  transform-origin: top;
  position: sticky;
  top: 1rem;
  max-width: 90vw;

  @media (max-width: 780px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Title = styled(motion.h1)`
  transform-origin: top;
  padding: 0;
  position: sticky;
  top: 1rem;
  font-family: "Neutraface";
  font-weight: bold;
  font-size: 6rem;
  text-align: center;
  white-space: nowrap;

  @media (max-width: 780px) {
    font-size: 15vw;
  }
`;
