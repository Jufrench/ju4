import { createTheme, MantineColorsTuple } from "@mantine/core";

const myColor: MantineColorsTuple = [
  "#e0fffa",
  "#cbfff4",
  "#9affe8",
  "#64ffdb",
  "#3cffd0",
  "#23ffc9",
  "#09ffc5",
  "#00e3ae",
  "#00ca99",
  "#00af83"
];

export const theme = createTheme({
  colors: {
    myColor,
  }
});
