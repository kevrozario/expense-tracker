import { AppShell, Container, Paper, ScrollArea, Center} from '@mantine/core';
import { HeaderNavbar } from '../components/HeaderNavbar';
import { TransactionTable } from '../components/TransactionTable';

import { useMantineTheme } from '@mantine/core';

export function TransactionsPage() {
  const theme = useMantineTheme();
  return (
    <AppShell
      padding="md"
    >
        <AppShell.Header >
                <HeaderNavbar />
        </AppShell.Header>

      <AppShell.Main>
        <Center h="100%">
        <Container size="xl" mt="xl">
          <Paper shadow = "sm" radius = "md" withBorder p="md">
            <ScrollArea h={750}>
            <TransactionTable />
          </ScrollArea>
          </Paper>
        </Container>
        </Center>
      </AppShell.Main>
    </AppShell>
  );
}
