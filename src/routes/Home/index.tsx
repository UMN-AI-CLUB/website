import Hero from "@components/Hero";
import Welcome from "@components/Welcome";
import Activities from "@components/Activities";

import { Main } from "./styles";

const Home = () => {
  return (
    <>
      <Main>
        <Hero />
        <Welcome />
        <Activities />
      </Main>
    </>
  );
};

export default Home;
