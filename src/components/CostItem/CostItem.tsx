import React from 'react';
import './CostItem.css'
import {CostItemProps} from "../../common/interfaces/CostItem. d";
import {day, month, year} from "./utils/getFromDate";

function CostItem(props: CostItemProps) {
    const {date, description , amount} = props.item;

    return (
        <div className="cost-item">
            <div>
                <div>{month(date)}</div>
                <div>{year(date)}</div>
                <div>{day(date)}</div>
            </div>
            <div className="cost-item__description">
                <h2>{ description }</h2>
                <div className="cost-item__price ">${ amount }</div>
            </div>
        </div>
    );
}

export default CostItem;
