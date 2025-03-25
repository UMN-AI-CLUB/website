import { useLenis } from "lenis/react";
import { Container, Content, Title } from "./styles";
import { useEffect, useState } from "react";
import Mlogo from "@assets/images/University_of_Minnesota_Logo.svg";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import scrollAnimation from "@assets/lottie/scroll.lottie";

const Hero = () => {
  const [titleFixed, setTitleFixed] = useState(false);
  const [scale, setScale] = useState(1);
  const [mWidth, setMWidth] = useState(200);
  const [mOpacity, setMOpacity] = useState(1);
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    const handleScroll = () => {
      const scrollPosition = lenis.scroll;
      setScale(Math.max(1 - scrollPosition / 500, 0.4));
      setMOpacity(Math.max(1 - scrollPosition / 300, 0));
      setMWidth(Math.max(200 * (1 - scrollPosition / 300), 0));
      setScrollOpacity(Math.max(1 - scrollPosition / 15, 0));
      if (scrollPosition > 400) setTitleFixed(true);
      else setTitleFixed(false);
    };

    // listen for scroll events using lenis
    lenis.on("scroll", handleScroll);

    // cleanup on component unmount
    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, [lenis]);
  return (
    <Container>
      <Content
        style={{ position: titleFixed ? "fixed" : "sticky" }}
        animate={{ scale }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        <motion.img
          src={Mlogo}
          style={{ width: mWidth, opacity: mOpacity }}
          transition={{ type: "keyframes", ease: "linear", duration: 1 }}
        />
        <Title style={titleFixed ? { cursor: "pointer" } : {}}>
          THE AI CLUB
        </Title>
      </Content>
      <DotLottieReact
        src={scrollAnimation}
        speed={0.8}
        loop
        autoplay
        style={{
          opacity: scrollOpacity,
          height: 50,
          width: 50,
          position: "absolute",
          bottom: 250,
        }}
        height={50}
        width={50}
      />
    </Container>
  );
};

export default Hero;
