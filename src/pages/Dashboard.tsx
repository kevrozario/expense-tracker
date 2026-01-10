import { AppShell } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { HeaderNavbar } from '../components/HeaderNavbar';
import { DashboardCarousel } from '../components/DashboardCarousel';

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
        <DashboardCarousel />
      </AppShell.Main>
    </AppShell>
  );
}
