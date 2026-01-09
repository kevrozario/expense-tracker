import {useEffect, useState} from 'react';
import {Card, Text, Stack, Group, Divider} from "@mantine/core";


type Category = {
    name: string;
    value: number;
}

export function MostSpentCard() {
const [data, setData] = useState<Category[]>([]);

useEffect(()=> {
    async function getData() {
        const res=await fetch ('stats/most-spent');
        const finalData = await res.json();

        setData(finalData);
    }
    getData();
},[]);

    return(
        <Card shadow ="md" radius="md" withBorder maw={400}>
            <Text>
                Top 5 Spending Categories
            </Text>
            <Divider mb="sm" />

            <Stack gap="xs">
                {data.map((item, i)=> (
                    <Group key={item.name} justify='space-between'>
                        <Text>
                            {i + 1}. {item.name}
                        </Text>
                    </Group>
                ))}
            </Stack>

        </Card>

    );
}