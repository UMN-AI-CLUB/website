import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  padding: min(15rem, 10vw);
  gap: 1rem;
`;

export const Title = styled.h2`
  font-size: min(3rem, 10vw);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.contrast};
  text-align: center;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 1rem;

  @media (max-width: 867px) {
    flex-direction: column;
  }
`;
