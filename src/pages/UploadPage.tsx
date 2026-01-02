import { UploadCSV } from '../components/UploadCSV';
import { AppShell, Center, Title } from "@mantine/core"
import { useMantineTheme } from '@mantine/core';

export function UploadPage() {
  const theme = useMantineTheme();
  return (
      <AppShell
      header={{height: 60}}
      >
        <AppShell.Header style={{
          background: theme.colors.dark[7],
          color: theme.colors.dark[1]
        }}>
            <Center>
                <Title order={1}>Expense Tracker</Title>
            </Center>
        </AppShell.Header>

        <AppShell.Main style={{
          backgroundColor: theme.colors.dark[7],
          color: theme.colors.dark[1]
        }}>
          <Center> 
            <UploadCSV />
          </Center>
        </AppShell.Main>

      </AppShell>
  );
}
