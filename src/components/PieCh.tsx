import {PieChart} from '@mantine/charts';
import {useEffect, useState} from 'react';

export function PieCh() {
    const [data, setData]=useState([]);

    useEffect(()=> {
        async function getData() {
            const res = await fetch('/categories');
            const chart = await res.json();
            setData(chart.map((ch: { categories: string; total: number; })=>({name: ch.categories, value: ch.total})));
        }
        getData();
    },[]);

    return (
        <PieChart data={data} size={300} withTooltip tooltipDataSource="segment" mx="auto" />
    );
}