import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const Pulse = keyframes`
  0% {
    opacity: 0.05;
  }
  25% {
    opacity: 0.14;
  }
  75% {
    opacity: 0.05;
  }
  100% {
    opacity: 0.05;
  }
`;

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const MoveInUp = keyframes`
  from {
    transform: translateY(1rem);
  }
  to {
    transform: translateY(0);
  }
`;

export const Container = styled(motion.div)`
  perspective: 1000;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondarySoft};
  border-radius: 10px;
  padding: 2rem;
  cursor: default;
  place-content: center;
  place-items: center;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Slight box shadow */
  transition: all 0.2s ease; /* Smooth shadow on hover */

  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); /* Slightly stronger shadow on hover */
    scale: 1.05;
  }

  animation:
    ${FadeIn} 300ms backwards ease-out,
    ${MoveInUp} 300ms backwards ease-out;
`;

export const PictureContainer = styled.div`
  display: flex;
  position: relative;

  height: 14rem;
  width: 14rem;
  margin-bottom: 1rem;
`;

export const Picture = styled.img`
  aspect-ratio: 1;
  height: 14rem;
  width: 14rem;
  border-radius: 50%;

  animation: ${FadeIn} 500ms;

  z-index: 10;
`;

export const PictureSkeleton = styled.div`
  position: absolute;
  top: 0;

  aspect-ratio: 1;
  height: 14rem;
  width: 14rem;
  border-radius: 50%;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.colors.contrastSoft};
  opacity: 0.05;
  animation: ${Pulse} 1.5s infinite forwards ease-in-out;
`;

export const Name = styled.h3`
  display: flex;
  gap: 1rem;
  font-weight: 600;
  font-size: 1.7rem;
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const Role = styled.h4`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.07rem;
  line-height: 1.5rem;
  text-align: center;
`;
