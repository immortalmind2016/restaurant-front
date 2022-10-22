import {
  HamburgerIcon,
  EditIcon,
  ExternalLinkIcon,
  AddIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Center,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {} from "react-icons";
import { ReactComponent as Icon } from "./menu-icon.svg";
const Navbar = () => {
  return (
    <Flex>
      <Flex
        p="4"
        border={"1px solid orange"}
        height="10px"
        borderRadius={"lg"}
        marginTop="10px"
      >
        <Center>
          {" "}
          <Text fontWeight={"bold"} color="orange">
            English
          </Text>
        </Center>
      </Flex>
      <Spacer />
      <Box
        p="4"
        maxH={"100px"}
        bgImage="/images/logo.png"
        w={"100px"}
        h={"100px"}
        marginTop="-30px"
        bgSize="auto"
        bgPosition={"center"}
      ></Box>
      <Spacer />
      <Box p="4">
        <Menu>
          <MenuButton aria-label="Options">
            <Icon />
          </MenuButton>
          <Center>
            <MenuList>
              <Center>
                <MenuItem color="orange">
                  {" "}
                  <Center>Home </Center>
                </MenuItem>
              </Center>
              <Divider />
              <MenuItem color="orange">About Us</MenuItem>
              <Divider />
              <MenuItem color="orange">Connect Us</MenuItem>
            </MenuList>
          </Center>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
