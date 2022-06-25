import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
  colors: {
    color1: {
      50: "#170F2A",
      100: "#2A1C4F",
      200: "#555",
      500: "#FF9347",
      250: "#0E1212",
    },
  },
  fonts: {
    body: `"JetBrains Mono", monospace`,
  },
  styles: {
    global: {
      body: {
        backgroundColor: "#170F2A",
      },
    },
  },
});
