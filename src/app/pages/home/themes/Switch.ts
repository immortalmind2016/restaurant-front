import { switchAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";
import { calc, cssVar, mode } from "@chakra-ui/theme-tools";
import { background } from "@chakra-ui/react";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const $width = cssVar("switch-track-width");
const $height = cssVar("switch-track-height");
const $widthImage = cssVar("switch-track-width-image");
const $heightImage = cssVar("switch-track-height-image");
const $diff = cssVar("switch-track-diff");
const diffValue = calc.subtract($width, $height);
const $translateX = cssVar("switch-thumb-x");

const baseStyleTrack = defineStyle((props) => {
  const { colorScheme: c } = props;

  return {
    borderRadius: "full",
    p: "0.5",
    width: [$width.reference],
    height: [$height.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    bg: mode("gray.300", "whiteAlpha.400")(props),
    _focusVisible: {
      boxShadow: "outline",
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
    },
    _checked: {
      bg: mode(`${c}.500`, `${c}.200`)(props),
    },
  };
});

const baseStyleThumb = defineStyle({
  backgroundImage: "/images/fast-food-burger-svgrepo-com.svg",

  transitionProperty: "transform",
  transitionDuration: "normal",
  bgSize: "cover",
  borderRadius: "inherit",
  width: [$heightImage.reference],
  height: [$heightImage.reference],

  marginTop: "-10px",
  _checked: {
    transform: `translateX(${$translateX.reference})`,
    // backgroundImage: "",
  },
});

const baseStyle = definePartsStyle((props) => ({
  container: {
    [$diff.variable]: diffValue,
    [$translateX.variable]: $diff.reference,
    _rtl: {
      [$translateX.variable]: calc($diff).negate().toString(),
    },
  },
  track: baseStyleTrack(props),
  thumb: baseStyleThumb,
}));

const sizes = {
  sm: definePartsStyle({
    container: {
      [$width.variable]: "1.375rem",
      [$height.variable]: "sizes.3",
    },
  }),
  md: definePartsStyle({
    container: {
      [$width.variable]: "1.875rem",
      [$height.variable]: "sizes.4",
    },
  }),
  lg: definePartsStyle({
    container: {
      [$width.variable]: "15rem",
      [$height.variable]: "5rem",
      [$widthImage.variable]: "6rem",
      [$heightImage.variable]: "6rem",
    },
  }),
};

export const switchTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,

  defaultProps: {
    size: "md",
    colorScheme: "blue",
  },
});
