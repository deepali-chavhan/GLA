import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from "@chakra-ui/react";
import background from "../../../assets/images/home-bg.png";
import palooza_logo from "../../../assets/logo/Logo-Large.png";
import CustomHeading from "../typography/Heading";
import { useTranslation } from "react-i18next";

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = () => {
  const { t } = useTranslation();

  return (
    <Box backgroundImage={`url(${background})`} p="4" roundedBottom={"16px"}>
      <VStack align="flex-start" spacing={3}>
        {/* Logo Section */}
        <Box
          backgroundImage={`url(${palooza_logo})`}
          backgroundRepeat="no-repeat"
          backgroundSize="contain"
          marginTop="20px"
          width="40%"
          height="50px"
        />
        {/* Greeting Text */}
        <VStack align="flex-start" spacing={1}>
          <CustomHeading
            lineHeight="21px"
            fontFamily="Inter"
            variant="h2"
            fontSize="12px"
            fontWeight="400"
            title={t("HOME_HELLO")}
            color="white"
          />
          <CustomHeading
            lineHeight="21px"
            fontFamily="Inter"
            variant="h2"
            fontSize="20px"
            fontWeight="600"
            title={localStorage.getItem("name")}
            color="white"
          />
        </VStack>
        {/* Search Input */}
        <InputGroup mb="4" height="28px">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="textSecondary" />}
          />
          <Input
            placeholder="Search..."
            bg="white"
            borderColor="backgroundGrey"
          />
        </InputGroup>
      </VStack>
    </Box>
  );
};

export default Header;
