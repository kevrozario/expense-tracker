import {Table} from "@mantine/core"
import {useEffect, useState} from "react"

//data for each transaction
type Transaction = {
  id: string;
  tDate: string;
  pDate: string;
  desc: string;
  amount: number;
  category: string;
  acc: string;
};

export function TransactionTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

    //have it run only once
    useEffect(()=> {

        async function getTransactions() {
            const res = await fetch("/transactions");
            const data = await res.json();

            setTransactions(data);
        }
        getTransactions();

    }, []);

    return (
        <Table>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Transaction Date</Table.Th>
                    <Table.Th>Posted Date</Table.Th>
                    <Table.Th>Description</Table.Th>
                    <Table.Th>Amount</Table.Th>
                    <Table.Th>Category</Table.Th>
                    <Table.Th>Account</Table.Th>
                </Table.Tr>
            </Table.Thead>


            <Table.Tbody>
                {transactions.map((row)=> (
                    <Table.Tr key = {row.id}>
                        <Table.Td>{row.tDate}</Table.Td>
                        <Table.Td>{row.pDate}</Table.Td>
                        <Table.Td>{row.desc}</Table.Td>
                        <Table.Td>{row.amount}</Table.Td>
                        <Table.Td>{row.category}</Table.Td>
                        <Table.Td>{row.acc}</Table.Td>    
                    </Table.Tr>                
                ))}
            </Table.Tbody>
        </Table>
    );
}