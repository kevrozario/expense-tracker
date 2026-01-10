import { AppShell, Container, Title , Stack, Paper, ScrollArea, Grid, Center} from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { HeaderNavbar } from '../components/HeaderNavbar';
import { DashboardCarousel } from '../components/DashboardCarousel';
import { DonutCh } from '../components/DonutCh';
import { TransactionByCategory } from '../components/TransactionByCategory';

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
        <Container size="100%" py="xl" px='xl' >
          <Stack>
            <Container size='xl'>
            <DashboardCarousel />
            </Container>
            <Grid>
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Stack align="center">
                  <Title order={3}>Expenses Breakdown</Title>
                  <DonutCh />
                </Stack>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 8 }}>
                <Paper shadow="sm" radius="sm" withBorder p="sm">
                  <ScrollArea h={500}>
                    <Title order={4}>Transaction by Category</Title>
                    <TransactionByCategory />
                  </ScrollArea>
                </Paper>
              </Grid.Col>
            </Grid>
          </Stack>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
