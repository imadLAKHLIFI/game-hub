import {
  FaWindows,
  FaApple,
  FaLinux,
  FaAndroid,
  FaXbox,
  FaPlaystation,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../Hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType, icons } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: Props) => {
  const iconMap: {[key:string]: IconType} = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    linux: FaLinux,
    mac: FaApple,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };
  return (
    <HStack marginY={'10px'}> 
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color={'gray.500'}/>
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
