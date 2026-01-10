import {Table, Select} from "@mantine/core";
import {useEffect, useState} from "react";

type Transaction = {
  id: string;
  tDate: string;
  pDate: string;
  description: string;
  amount: number;
  category: string;
  account: string;
};

export function TransactionByCategory() {
    const [category, setCategory] = useState([]);
    const [choice, setChoice] = useState<string | null>(null);
    const [data, setData] = useState([]);

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

    //get category values
    useEffect(()=>{
        fetch("/transactions/categories").then(res=>res.json()).then(setCategory);
    },[]);

    //load by category
    useEffect(()=>{

        if (!choice) {
            return;
        }


            
        let url=`/transactions/${(choice)}`;
        

        fetch(url).then(res=>res.json()).then(setData);


    },[choice]);

    let display = transactions;

    if (choice) {
        display = data;
    }

    return (
        <>
        <Select
        placeholder="Select a category"
        data={category}
        value={choice}
        onChange={setChoice}
        mb='md'
         />
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
                {display.map((row)=> (
                    <Table.Tr key = {row.id}>
                        <Table.Td>{row.tDate}</Table.Td>
                        <Table.Td>{row.pDate}</Table.Td>
                        <Table.Td>{row.description}</Table.Td>
                        <Table.Td>{row.amount}</Table.Td>
                        <Table.Td>{row.category}</Table.Td>
                        <Table.Td>{row.account}</Table.Td>    
                    </Table.Tr>                
                ))}
            </Table.Tbody>
        </Table>
        </>
    );
}