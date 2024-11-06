import React, {useState} from 'react';
import './CostItem.css'
import CostDate from "../CostDate/CostDate";
import Card from "../../../../UI/Card/Card";
import {CostItemProps} from "../../../../common/interfaces/CostItem. d";

const CostItem = ({item}: CostItemProps) => {

    const [description, setDescription] = useState(item.description);
    const changeDescriptionHandler = () => {
        setDescription('New text');
    }

    return (
        <Card className='cost-item'>
            <CostDate date={item.date}/>
            <div className="cost-item__description">
                <h2>{description}</h2>
                <div className="cost-item__price ">${item.amount}</div>
            </div>
            <button onClick={changeDescriptionHandler}>Change description</button>
        </Card>
    );
}

export default CostItem;
