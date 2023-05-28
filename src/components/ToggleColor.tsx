import { Box, useColorMode, Button } from '@chakra-ui/react';
import React from 'react'

const ToggleColor: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? 'Dark' : 'Light'} Mode
      </Button>
      {/* Rest of your component */}
    </Box>
  );
}

export default ToggleColor