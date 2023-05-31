import { Box, useColorMode, Button } from '@chakra-ui/react';
import React from 'react';

const ToggleColor: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleToggleColorMode = () => {
    toggleColorMode();
    onClose(); // Call the onClose callback function to close the drawer
  };

  return (
    <Box>
      <Button onClick={handleToggleColorMode}>
        {colorMode === 'light' ? 'Dark' : 'Light'} Mode
      </Button>
      {/* Rest of your component */}
    </Box>
  );
};

export default ToggleColor;
