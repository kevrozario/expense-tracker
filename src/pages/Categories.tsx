import { AppShell } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { HeaderNavbar } from '../components/HeaderNavbar';
import { PieCh } from '../components/PieCh';
import {PieChart} from '@mantine/charts';


export function Categories() {
  const theme = useMantineTheme();
  return (
    <AppShell
      padding="md"
    >
        <AppShell.Header >
                <HeaderNavbar />
        </AppShell.Header>

      <AppShell.Main>
        <PieCh />
      </AppShell.Main>
    </AppShell>
  );
}
