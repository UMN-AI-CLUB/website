import { FaDiscord, FaInstagram } from "react-icons/fa";
import {
  Container,
  CopyrightText,
  SocialLink,
  SocialsContainer,
} from "./styles";

const socials = [
  { name: "Discord", url: "https://discord.gg/kE5kHKaJZd", Icon: FaDiscord },
  {
    name: "Instagram",
    url: "https://www.instagram.com/theaiclub_umn",
    Icon: FaInstagram,
  },
];

const Footer = () => {
  return (
    <Container>
      <CopyrightText>
        &copy;{new Date().getFullYear()} The AI Club
      </CopyrightText>
      <SocialsContainer>
        {socials.map(({ name, url, Icon }) => (
          <SocialLink
            key={name}
            style={{ opacity: 0.5 }}
            whileHover={{ opacity: 1 }}
            href={url}
          >
            <Icon size={26} />
          </SocialLink>
        ))}
      </SocialsContainer>
    </Container>
  );
};

export default Footer;
