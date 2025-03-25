import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const SlideInRight = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const Container = styled.header`
  /* z-index: 10; */
  display: flex;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  width: 100%;
  gap: min(3rem, 2vw);
  backdrop-filter: blur(10px);
  z-index: 99;
  min-height: 4.25rem;
  /* -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
  -webkit-mask-composite: destination-in;
  mask-composite: intersect; */

  #menu {
    display: none;
    margin: auto 0;
    margin-left: 0.5rem;
  }

  @media (max-width: 780px) {
    #menu {
      display: initial;
    }
  }
`;

export const Title = styled.h1`
  cursor: pointer;
  transform-origin: top;
  padding: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 1rem;
  font-family: "Neutraface";
  font-weight: bold;
  font-size: 2.4rem;
  white-space: nowrap;
  margin: auto;
  text-align: center;
`;

export const CloseSidebarButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.contrastSoft};
  align-self: flex-start;
  font-size: 20px;
  font-family: "Nasalization";
`;

export const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  gap: inherit;

  @media (max-width: 780px) {
    background-color: ${({ theme }) => theme.colors.secondarySoft};
    z-index: 101;
    flex-direction: column;
    position: fixed;
    width: 50vw;
    height: 100vh;
    justify-content: initial;

    animation: ${SlideInRight} 200ms ease;

    gap: 1rem;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  gap: inherit;

  @media (max-width: 780px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
