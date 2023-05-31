import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure
} from '@chakra-ui/react'
import { SettingsIcon } from '@chakra-ui/icons'
import { ToggleColor }from '../components'

const PreferencesFlyout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

return (
  <>
    <Button colorScheme='blue' onClick={onOpen}>
     <SettingsIcon/>
    </Button>
    
    <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth='1px'>Preferences</DrawerHeader>
        <DrawerBody>
        <ToggleColor onClose={onClose}/>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </>
)
}

export default PreferencesFlyout
