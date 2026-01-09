import {useEffect, useState} from 'react';
import {Card, Text, Stack, Group, Divider} from "@mantine/core";


type Category = {
    name: string;
    value: number;
}

export function LeastExpPurchases() {
const [data, setData] = useState<Category[]>([]);

useEffect(()=> {
    async function getData() {
        const res=await fetch ('stats/least-expensive');
        const finalData = await res.json();

        setData(finalData);
    }
    getData();
},[]);

    return(
        <Card shadow ="md" radius="md" withBorder maw={400}>
            <Text>
                10 Least Expensive Transactions
            </Text>
            <Divider mb="sm" />

            <Stack gap="xs">
                {data.map((item, i)=> (
                    <Group key={item.name} justify='space-between'>
                        <Text>
                            {i + 1}. {item.name} | {item.value}
                        </Text>
                    </Group>
                ))}
            </Stack>

        </Card>

    );
}