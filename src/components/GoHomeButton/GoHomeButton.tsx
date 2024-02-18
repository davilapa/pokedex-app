import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const GoHomeButton = () => {
  return (
    <Link to="/">
      <Button variant="solid" backgroundColor="#F1BD35" color="#0C162F">
        Go Home
      </Button>
    </Link>
  );
};
