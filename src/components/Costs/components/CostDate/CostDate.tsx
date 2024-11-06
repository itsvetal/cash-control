import React from 'react';
import {day, month, year} from "./utils/getFromDate";
import './CostDate.css'

interface CostDateProps {
    date: Date
}

const CostDate = ({date}: CostDateProps) => {
    return (
        <div className='cost-date'>
            <div className='cost-date__month'>{month(date)}</div>
            <div className='cost-date__year'>{year(date)}</div>
            <div className='cost-date__day'>{day(date)}</div>
        </div>
    );
}

export default CostDate;
