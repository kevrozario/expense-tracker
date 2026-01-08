import {PieChart} from '@mantine/charts';
import {useEffect, useState} from 'react';

export function PieCh() {
    const [data, setData]=useState([]);
    const colors = ["indigo", "yellow", "teal", "grape", "red", "orange", "blue", "cyan", "lime"];
    useEffect(()=> {
        async function getData() {
            const res = await fetch('/categories');
            const chart = await res.json();
            setData(chart.map((n: any, i: number) => ({
                name: n.name,
                value: Number(n.value),
                color: colors[i],
            })));        
        }
        getData();
    },[]);

    return (
        <PieChart data={data} size={300} withTooltip tooltipDataSource="segment" mx="auto" />
    );
}