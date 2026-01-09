import { AppShell, Grid, Stack, Title} from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { HeaderNavbar } from '../components/HeaderNavbar';
import { PieCh } from '../components/PieCh';
import { MostSpentCard } from '../components/MostSpentCard';
import { LeastSpentCard } from '../components/LeastSpentCard';
import { MostExpPurchases } from '@/components/MostExpPurchases';
import { LeastExpPurchases } from '@/components/LeastExpPurchases';


export function Categories() {
  const theme = useMantineTheme();
  return (
    <AppShell
      padding="xl"
      mt="xl"
    >
        <AppShell.Header >
                <HeaderNavbar />
        </AppShell.Header>

      <AppShell.Main>
          <Grid align='center' grow gutter="md" mt="xl">
              <Grid.Col span={{ base: 12, md: 3 }}>
              <Stack align='center' gap='lg'>
                <Title order={1}>Spending by Category</Title>
                <PieCh />
              </Stack> 
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 2 }}>
                <Stack gap="md">
                <MostSpentCard />
                <LeastSpentCard />
                </Stack>
            </Grid.Col>
              <Grid.Col span={{ base: 12, md: 2 }}>
                <MostExpPurchases />
              </Grid.Col>
                 <Grid.Col span={{ base: 12, md: 2 }}>
                <LeastExpPurchases />
              </Grid.Col>
          </Grid>
      </AppShell.Main>
    </AppShell>
  );
}
