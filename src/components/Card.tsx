import { Box, Center, Input } from "@chakra-ui/react";
import { ButtonFrom } from "./Button";

interface ICard {
  id: number;
  paragraph: string;
  details: string;
  onClick: () => void;
}

export const Card = ({ id, paragraph, details, onClick }: ICard) => {
  return (
    <div>
      <Box minHeight={"90vh"} backgroundColor="#9413dc" padding="25px">
        <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            <ButtonFrom onClick={onClick}></ButtonFrom>
          </Center>
        </Box>
      </Box>
      {/* <h1>Card {id}</h1>
      <p>{paragraph}</p>
      <p>{details}</p> */}
    </div>
  );
};
