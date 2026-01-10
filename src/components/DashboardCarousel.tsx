import '@mantine/carousel/styles.css';
import { Carousel } from '@mantine/carousel';
import {Card, Text, Title, Center} from '@mantine/core'
import {useEffect, useState} from 'react';



type CardData = {
    title: string
    value: any
    subtitle: any
};

export function DashboardCarousel() {
    

    const [cards, setCards] = useState<CardData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        async function load() {
            setLoading(true);
            const [topCategory, bottomCategory, biggestPurchase, smallestPurchase, totalAmount, transCount, averageAmonut] = await Promise.all(
                [
                    fetch("/carousel/top-category").then(res=>res.json()),
                    fetch("/carousel/bottom-category").then(res=>res.json()),
                    fetch("/carousel/biggest-purchase").then(res=>res.json()),
                    fetch("/carousel/smallest-purchase").then(res=>res.json()),
                    fetch("/carousel/total-amount").then(res=>res.json()),
                    fetch("/carousel/transaction-count").then(res=>res.json()),
                    fetch("/carousel/average-amount").then(res=>res.json()),
                ]
            );

            setCards([
                {title: "Top Category", value: topCategory.category, subtitle: `$${topCategory.value}`},
                {title: "Bottom Category", value: bottomCategory.category, subtitle: `$${bottomCategory.value}`},
                {title: "Biggest Purchase", value: `$${biggestPurchase.amount}`, subtitle: biggestPurchase.description},
                {title: "Smallest Purchase", value: `$${smallestPurchase.amount}`, subtitle: smallestPurchase.description},
                {title: "Total Spent", value: `$${totalAmount.total}`, subtitle: null},
                {title: "Number of Transactions", value: `${transCount.count}`, subtitle: "Total"},
                {title: "Average Amount", value: `$${averageAmonut.average}`, subtitle: "Per Transaction"},
                

            ]);
            setLoading(false);
        }

        load();

    }, []);

    return (
        <Carousel
      withIndicators
      height={200}
      slideSize="25%"
      slideGap="xs"
      emblaOptions={{ loop: true, align: 'start', slidesToScroll: 3 }}
        >
       {cards.map((card)=> (
        
        <Carousel.Slide key={card.title}>
            <CarouselCard{...card} />
        </Carousel.Slide>
       ))}
        </Carousel>
    );
}


function CarouselCard({title, value, subtitle}: CardData) {
    return (
        <Card shadow ="md" radius="md" withBorder maw={400}   style={{
            backgroundColor: 'var(--mantine-color-dark-1)',
            color: 'var(--mantine-color-dark-7)',}}
            >             
            <Text size='md' c="dimmed">{title}</Text>
            <Title order={1} mt='sm'>{value}</Title>
            <Text size='sm' mt='sm'>{subtitle}</Text>
        </Card>
    );
}

