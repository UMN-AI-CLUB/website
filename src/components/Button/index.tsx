import { Container } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $variant?: "default" | "alt";
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ $variant, children, ...props }) => {
  return (
    <Container $variant={$variant} {...props}>
      {children}
    </Container>
  );
};

export default Button;
