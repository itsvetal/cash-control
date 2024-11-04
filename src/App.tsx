import React from 'react';
import CostItem from "./components/CostItem/CostItem";

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
      <h1>Begin to learn React</h1>
        {costs.map((element, idx) => (
            <CostItem
                key={idx}
                item={element}
            />
        ))}
    </div>
  );
}

export default App;
