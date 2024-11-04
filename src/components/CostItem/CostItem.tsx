import React from 'react';
import './CostItem.css'
import {CostItemProps} from "../../common/interfaces/CostItem. d";
import CostDate from "./components/CostDate/CostDate";

function CostItem(props: CostItemProps) {
    const {date, description , amount} = props.item;

    return (
        <div className="cost-item">
            <CostDate date={date}/>
            <div className="cost-item__description">
                <h2>{ description }</h2>
                <div className="cost-item__price ">${ amount }</div>
            </div>
        </div>
    );
}

export default CostItem;
