// @flow
import * as React from "react";
import {
  Box,
  defineStyleConfig,
  extendTheme,
  Flex,
  Icon,
  Image,
  omitThemingProps,
  Spacer,
  Stack,
  Switch,
  Text,
} from "@chakra-ui/react";
import HomeSlider from "./HomeSlider";
import { ComponentStyleConfig } from "@chakra-ui/react";
import { switchTheme } from "./themes/Switch";
import Navbar from "../../reusable/Navbar";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
const SwitchConfig = defineStyleConfig({});
type Props = {};
export const Home = (props: Props) => {
  const [isMeal, setIsMeal] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(false);
  const onChangeSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.currentTarget.checked);
  };
  React.useEffect(() => {
    setIsMeal(isChecked);
  }, [isChecked]);
  return (
    <Box w="100%" p={4} color="white">
      <Navbar></Navbar>
      <Box mt={"10px"}>
        <HomeSlider></HomeSlider>
      </Box>
      <Box
        margin={{ base: "50px auto", md: "50px 0" }}
        position={"relative"}
        width="fit-content"
      >
        <Stack align="center" direction="row" position={"relative"}>
          {isMeal && (
            <Box
              cursor={"pointer"}
              left={"25px"}
              top="5px"
              zIndex="1"
              position={"absolute"}
              onClick={() => {
                setIsChecked(false);
              }}
            >
              <Text fontSize={"x-large"}>Restaurant</Text>
              <ArrowLeftIcon></ArrowLeftIcon>
            </Box>
          )}
          {!isMeal && (
            <Box
              cursor={"pointer"}
              right={"35px"}
              onClick={() => {
                setIsChecked(true);
              }}
              top="5px"
              zIndex="1"
              position={"absolute"}
            >
              <Text fontSize={"x-large"}>Meals</Text>
              <ArrowRightIcon></ArrowRightIcon>
            </Box>
          )}
          <Switch
            isChecked={isChecked}
            onChange={onChangeSwitch}
            size="lg"
            styleConfig={switchTheme}
          >
            {" "}
          </Switch>
        </Stack>
      </Box>
    </Box>
  );
};
