import { Center, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Center bg={"orange"} w={"100%"} px='10px'>
      <div>
        <Center>
          <Text fontSize={"2xl"}>Dio Bank</Text>
        </Center>
        <p>Començando com confiança</p>
      </div>
    </Center>
  );
};
