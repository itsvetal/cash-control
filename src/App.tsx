import React from 'react';
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

function App() {

    const costs = [
        {
            date: new Date(2024, 2,12),
            description: 'Refrigerator',
            amount: 999.99
        },
        {
            date: new Date(2023, 5,10),
            description: 'MacBook',
            amount: 1300
        },
        {
            date: new Date(2024, 2,12),
            description: 'Jeans',
            amount: 49.99
        }
    ]

    return (
        <div>
            <NewCost />
            <Costs data={costs}/>
        </div>
    );
}

export default App;
