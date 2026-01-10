import {useEffect, useState} from 'react';
import {Card, Text, Stack, Group, Divider} from "@mantine/core";


type Category = {
    name: string;
    value: number;
}

export function LeastSpentCard() {
const [data, setData] = useState<Category[]>([]);

useEffect(()=> {
    async function getData() {
        const res=await fetch ('stats/least-spent');
        const finalData = await res.json();

        setData(finalData);
    }
    getData();
},[]);

    return(
            <Card shadow ="md" radius="md" withBorder maw={400}   style={{
                backgroundColor: 'var(--mantine-color-dark-1)',
                color: 'var(--mantine-color-dark-7)',}}
                >            
            <Text>
                Bottom 5 Spending Categories
            </Text>
            <Divider mb="sm" />

            <Stack gap="xs">
                {data.map((item, i)=> (
                    <Group key={item.name} justify='space-between'>
                        <Text>
                            {i + 1}. {item.name} | ${item.value}
                        </Text>
                    </Group>
                ))}
            </Stack>

        </Card>

    );
}