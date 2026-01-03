import { AppShell} from '@mantine/core';
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
        <TransactionTable />
      </AppShell.Main>
    </AppShell>
  );
}
