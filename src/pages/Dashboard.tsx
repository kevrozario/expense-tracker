import { AppShell, Container, Grid } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { HeaderNavbar } from '../components/HeaderNavbar';
import { DashboardCarousel } from '../components/DashboardCarousel';
import { DonutCh } from '../components/DonutCh';

export function Dashboard() {
  const theme = useMantineTheme();
  return (
    <AppShell
      padding="md"
    >
        <AppShell.Header >
                <HeaderNavbar />
        </AppShell.Header>

      <AppShell.Main>
        <Container size="xl" py="xl">
        <DashboardCarousel />
        </Container>
        <DonutCh />
      </AppShell.Main>
    </AppShell>
  );
}
