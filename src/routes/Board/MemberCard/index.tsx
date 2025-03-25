import { ComponentProps, useEffect, useState } from "react";
import {
  Container,
  Name,
  Picture,
  PictureContainer,
  PictureSkeleton,
  Role,
} from "./styles";

interface MemberCardProps extends ComponentProps<typeof Container> {
  picture: string;
  name: string;
  role: string;
}

const MemberCard: React.FC<MemberCardProps> = ({
  picture,
  name,
  role,
  ...props
}) => {
  const [src, setSrc] = useState("");

  useEffect(() => {
    const img = new Image();
    img.src = picture;
    if (img.complete) {
      setSrc(picture);
    } else {
      img.onload = () => setSrc(picture);
    }
  }, [picture]);

  return (
    <Container {...props}>
      {
        <PictureContainer>
          <Picture
            src={picture}
            loading="lazy"
            onLoad={() => {
              setSrc(picture);
            }}
            // onError={(e) => {
            //   console.warn(e);
            // }}
            style={src ? {} : { display: "none" }}
          />
          <PictureSkeleton />
        </PictureContainer>
      }
      <Name>{name}</Name>
      <Role>{role}</Role>
    </Container>
  );
};

export default MemberCard;
