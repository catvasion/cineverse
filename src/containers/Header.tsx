import { Heading } from "@chakra-ui/react";
import { ToggleColor }from '../components'
import React from "react";

const Header: React.FC = () => {
  return (
    <Heading as="h1" mb={4}>
      MoviesRUs
      <ToggleColor />
    </Heading>
  );
};

export default Header;