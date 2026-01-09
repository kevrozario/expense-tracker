import { AppShell } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { HeaderNavbar } from '../components/HeaderNavbar';
import { PieCh } from '../components/PieCh';
import { MostSpentCard } from '../components/MostSpentCard';
import { LeastSpentCard } from '../components/LeastSpentCard';


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
        <MostSpentCard />
        <LeastSpentCard />
      </AppShell.Main>
    </AppShell>
  );
}
