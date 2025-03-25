import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  place-items: center;
  place-content: center;
  padding: 6.25rem min(16rem, 10vw);
  gap: 1.5rem;
`;

export const Title = styled.h1`
  font-size: min(5rem, 20vw);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.contrast};
  font-size: min(1.2rem, 6vw);
  font-weight: 400;
  text-align: center;
  line-height: min(1.9rem, 9vw);
  letter-spacing: 0.02rem;
  max-width: 40rem;
`;
