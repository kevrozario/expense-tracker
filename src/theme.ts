import { createTheme } from '@mantine/core';

export const theme = createTheme({
  /** Put your mantine theme override here */
  fontFamily: 'Open Sans',
  defaultRadius: 'md',

  components: {
    AppShell: {
      styles: {
        header: {
          backgroundColor: "var(--mantine-color-dark-7)",
          color: "var(--mantine-color-dark-1)",
        },
        main: {
          backgroundColor: "var(--mantine-color-dark-7)",
          color: "var(--mantine-color-dark-1)",
        }
      }
    },

    Button: {
      styles: {
        root: {
          color: "var(--mantine-color-dark-7)",
          backgroundColor: "var(--mantine-color-dark-1)",
        }
      }
    }
  },
});



