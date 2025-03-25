import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  place-items: center;
  place-content: center;
  padding: 5rem;
  gap: 4rem;
`;

export const Title = styled.h1`
  font-size: min(4rem, 18vw);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`;

export const MemberCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem; /* Adjust the space between the columns */

  @media (max-width: 1382px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1058px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 724px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
