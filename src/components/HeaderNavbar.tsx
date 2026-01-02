import { AppShell, Group, Button, Title } from "@mantine/core";
import {Link} from "react-router-dom"

export function HeaderNavbar() {
  return (
    <AppShell header={{ height: 75 }}>
      <AppShell.Header px= "md" >
        <Group h="100%" justify="space-between" align="center">
          <Title>Expense Tracker</Title>
          <Group>
            <Button size="md" component={Link} to="/dashboard">Overview</Button>
            <Button size="md" component={Link} to="/transactions">Transactions</Button>
            <Button size="md" component={Link} to="/categories">Categories</Button>
            <Button size="md" component={Link} to="/">Upload Statements</Button>
          </Group>
        </Group>
      </AppShell.Header>
    </AppShell>
  );
}
