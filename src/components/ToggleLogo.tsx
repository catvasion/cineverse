import { useColorMode, Image } from "@chakra-ui/react";
import { logo_dark, logo_light } from '../assets'
import React, {FC} from "react";


interface ToggleLogoProps {
    src: string
}

const ToggleLogo: FC<ToggleLogoProps> = () => {
    const { colorMode } = useColorMode()


const lightLogoSrc = logo_dark
const darkLogoSrc = logo_light

const getLogoSrc = (): string => {
    if (colorMode === 'light') {
        return lightLogoSrc
    } else {
        return darkLogoSrc
    }
}

return (
    <Image
        src={getLogoSrc()}
        alt='CineVerse logo'
    />
)
}

export default ToggleLogo