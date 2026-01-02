import { UploadCSV } from '../components/UploadCSV';
import { AppShell, Center, Title } from "@mantine/core"
import { useMantineTheme } from '@mantine/core';


export function UploadPage() {
  const theme = useMantineTheme();
  return (
      <AppShell
      header={{height: 60}}
      >
        <AppShell.Header>
            <Center>
                <Title order={1}>Expense Tracker</Title>
            </Center>
        </AppShell.Header>

        <AppShell.Main >
          <Center> 
            <UploadCSV />
          </Center>
        </AppShell.Main>

      </AppShell>
  );
}
