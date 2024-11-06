interface Cost {
    date: Date;
    description: string;
    amount: number
}

export interface CostsProps {
    data: Cost[];
}
