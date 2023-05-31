import { Heading } from "@chakra-ui/react";
import { PreferencesFlyout }from '../components'
import React from "react";

const Header: React.FC = () => {
  return (
    <Heading as="h1" mb={4} justifyContent='space-between' display='flex'>
      MoviesRUs
      <PreferencesFlyout />
    </Heading>
  );
};

export default Header;