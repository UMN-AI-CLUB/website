import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../Button";
import {
  CloseSidebarButton,
  Container,
  InnerContainer,
  Nav,
  Title,
} from "./styles";
import ReactDOM from "react-dom";
import { useMediaQuery } from "react-responsive";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

interface HeaderProps {
  hideTitle?: boolean;
}

interface NavComponentProps {
  open: boolean;
  onClose: () => void;
}

const NavComponent: React.FC<NavComponentProps> = ({ open, onClose }) => {
  const navigate = useNavigate();

  const isMobile = useMediaQuery({ query: "(max-width: 780px)" });

  const navContent = (
    <Nav style={open || !isMobile ? {} : { display: "none" }}>
      {isMobile && (
        <CloseSidebarButton onClick={onClose}>
          <RxCross1 />
        </CloseSidebarButton>
      )}
      <InnerContainer>
        <Button
          onClick={() => {
            navigate("/");
            onClose();
          }}
        >
          About
        </Button>
        <Button
          onClick={() => {
            window
              .open(
                "https://gopherlink.umn.edu/events?group_ids=36310&event_type=undefined",
                "_blank"
              )
              ?.focus();
            onClose();
          }}
        >
          Events
        </Button>
        <Button
          onClick={() => {
            navigate("/board");
            onClose();
          }}
        >
          Board
        </Button>
      </InnerContainer>
      <InnerContainer>
        <Button
          onClick={() => {
            window
              .open("https://gopherlink.umn.edu/4652/club_signup", "_blank")
              ?.focus();
            onClose();
          }}
        >
          Join&nbsp;Us
        </Button>
        <Button
          $variant="alt"
          onClick={() => {
            window.open("mailto:aiclub@umn.edu");
            onClose();
          }}
        >
          Contact
        </Button>
      </InnerContainer>
    </Nav>
  );

  // render component inside a portal for mobile, otherwise render normally
  return isMobile
    ? ReactDOM.createPortal(navContent, document.getElementById("root")!)
    : navContent;
};

const Header: React.FC<HeaderProps> = ({ hideTitle }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Container>
      {(hideTitle !== undefined ? hideTitle : location.pathname !== "/") && (
        <Title onClick={() => navigate("/")}>THE AI CLUB</Title>
      )}
      <Button
        id="menu"
        // $variant="alt"
        onClick={() => setSidebarOpen((prev) => !prev)}
      >
        <RxHamburgerMenu />
      </Button>
      <NavComponent
        open={sidebarOpen}
        onClose={() => setSidebarOpen((prev) => !prev)}
      />
    </Container>
  );
};

export default Header;
