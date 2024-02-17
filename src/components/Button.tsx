import { Button } from "@chakra-ui/react";

interface ButtonProps {
  onClick: () => void;
}

export const ButtonFrom = ({ onClick }: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      colorScheme="teal"
      size="sm"
      width="100%"
      marginTop="5px"
    >
      Button
    </Button>
  );
};
