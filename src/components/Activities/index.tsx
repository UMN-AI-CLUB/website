import Card from "@components/Card";
import { CardsContainer, Container, Title } from "./styles";
import { FaLaptopCode, FaTools } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";

const cards = [
  {
    title: "Workshops",
    description:
      "Hands-on sessions to build your skills in AI and machine learning.",
    Icon: FaTools,
  },
  {
    title: "Projects",
    description: "Collaborate to solve real-world problems with AI.",
    Icon: FaLaptopCode,
  },
  {
    title: "Networking",
    description: "Connect with peers, professors, and industry leaders in AI.",
    Icon: FaHandshakeSimple,
  },
];

const Activities = () => {
  return (
    <Container>
      <Title>What We Offer</Title>
      <CardsContainer>
        {cards.map((card) => (
          <Card {...card} key={card.title} />
        ))}
      </CardsContainer>
    </Container>
  );
};

export default Activities;
