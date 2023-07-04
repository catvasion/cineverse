import { Heading, Image, Box } from "@chakra-ui/react";
import { PreferencesFlyout, ToggleLogo } from "../components";
import React from "react";

const Header: React.FC = () => {
  return (
    <Heading as="h1" mb={4} justifyContent="space-evenly" display="flex">
      <Box
        m={{ base: 2, md: 9 }}
        mt={4}
        display="flex"
        justifyContent="space-evenly"
      >
        <Box>
          <ToggleLogo src="getLogoSrc()" />
        </Box>
        <Box ml={6} display="flex">
          <PreferencesFlyout />
        </Box>
      </Box>
    </Heading>
  );
};

export default Header;
