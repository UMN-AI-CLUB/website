import { useTheme } from "styled-components";
import { Container, Description, Title } from "./styles";
import { useState, useEffect, ElementType } from "react";

interface CardProps {
  title: string;
  description: string;
  Icon?: ElementType;
}

const Card: React.FC<CardProps> = ({ title, description, Icon }) => {
  const theme = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    const rect = (e?.currentTarget as HTMLDivElement)?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      const cardElement = document.querySelector(
        `[data-card-id="${title}"]`
      ) as HTMLElement;
      if (cardElement) {
        const rect = cardElement.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, []);

  const rotationX = Math.min(Math.max(-(mousePosition.y / 10), -10), 10);
  const rotationY = Math.min(Math.max(mousePosition.x / 10, -10), 10);

  return (
    <Container
      data-card-id={title}
      onMouseMove={handleMouseMove as any}
      whileHover={{ scale: 1.05 }}
      animate={{ rotateX: rotationX, rotateY: rotationY }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 0.5,
      }}
    >
      <Title>
        {Icon && <Icon size={26} color={theme.colors.secondary} />}
        {title}
      </Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default Card;
