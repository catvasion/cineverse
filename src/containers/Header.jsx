import { Heading } from "@chakra-ui/react";
import { ToggleColor }from '../components'

const Header = () => {
  return (
    <Heading as="h1" mb={4}>
      MovieLand
      <ToggleColor />
    </Heading>
  );
};

export default Header;