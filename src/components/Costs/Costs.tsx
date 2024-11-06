import React from 'react';
import CostItem from "./components/CostItem/CostItem";
import './Costs.css'
import Card from "../../UI/Card/Card";
import {CostsProps} from "../../common/interfaces/CostsProps";

const Costs = ({data}: CostsProps) => {

    return (
        <div>
            <h1>Begin to learn React</h1>
            <Card className='costs'>
                {data.map((element, idx) => (
                    <CostItem
                        key={idx}
                        item={element}
                    />
                ))}
            </Card>
        </div>
    );
}

export default Costs;
