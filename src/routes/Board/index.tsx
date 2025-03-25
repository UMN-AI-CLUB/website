import MemberCard from "./MemberCard";
import Adit from "@assets/images/board/adit.webp";
import Ahshaam from "@assets/images/board/ahshaam.webp";
import Ayman from "@assets/images/board/ayman.webp";
import Chongwei from "@assets/images/board/chongwei.webp";
import Hazel from "@assets/images/board/hazel.webp";
import Joel from "@assets/images/board/joel.webp";
import Karthik from "@assets/images/board/karthik.webp";
import Keerthana from "@assets/images/board/keerthana.webp";
import Lily from "@assets/images/board/lily.webp";
import Maanas from "@assets/images/board/maanas.webp";
import Mark from "@assets/images/board/mark.webp";
import Preston from "@assets/images/board/preston.webp";
import Rachita from "@assets/images/board/rachita.webp";
import Ryan from "@assets/images/board/ryan.webp";
import Saad from "@assets/images/board/saad.webp";
import Victor from "@assets/images/board/victor.webp";
import Vishwa from "@assets/images/board/vishwa.webp";
import Yash from "@assets/images/board/yash.webp";

import { Container, MemberCardsContainer, Title } from "./styles";

const board = [
  { picture: Rachita, name: "Rachita", role: "President" },
  { picture: Mark, name: "Mark", role: "Vice-President" },
  { picture: Victor, name: "Victor", role: "Tech Lead" },
  { picture: Yash, name: "Yash", role: "Outreach Coordinator" },
  { picture: Preston, name: "Preston", role: "Secretary" },
  { picture: Joel, name: "Joel", role: "Secretary" },
  { picture: Maanas, name: "Maanas", role: "Tech Lead" },
  { picture: Ayman, name: "Ayman", role: "Treasurer" },
  { picture: Ryan, name: "Ryan", role: "Project Lead" },
  { picture: Lily, name: "Lily", role: "Co-Marketing" },
  { picture: Adit, name: "Adit", role: "Project Lead" },
  { picture: Vishwa, name: "Vishwa", role: "Secretary" },
  { picture: Ahshaam, name: "Ahshaam", role: "Treasurer" },
  { picture: Chongwei, name: "Chongwei", role: "Project Lead" },
  { picture: Hazel, name: "Hazel", role: "Co-Marketing" },
  { picture: Karthik, name: "Karthik", role: "Co-Outreach" },
  { picture: Keerthana, name: "Keerthana", role: "Co-Outreach" },
  { picture: Saad, name: "Saad", role: "Co-Treasurer" },
];

const Board = () => {
  return (
    <Container>
      <Title>Meet The Board</Title>
      <MemberCardsContainer>
        {board.map((member, i) => (
          <MemberCard
            {...member}
            key={member.picture}
            style={{
              animationDelay: `${i * 150}ms`,
              animationDuration: `300ms`,
            }}
          />
        ))}
      </MemberCardsContainer>
    </Container>
  );
};

export default Board;
