import React, {useState} from 'react';
import './CostForm.css'

const CostForm = () => {

    // const [title, setTitle] = useState('');
    // const [amount, setAmount] = useState('');
    // const [date, setDate] = useState('');

    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    })

    const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(prevState => (
            {...prevState, title: event.target.value}
        ));
    }

    const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(prevState => (
            {...prevState, amount: event.target.value}
        ));
    };

    const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(prevState => (
            {...prevState, date: event.target.value}
        ));
    };

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const costData = {
            title: userInput.title,
            amount: userInput.amount,
            date: new Date(userInput.date)
        }
        setUserInput({
            title: '',
            amount: '',
            date: ''
        })
        console.log(costData);
    };


    return (
        <form onSubmit={submitHandler}>
            <div className='new-cost__controls'>
                <div className='new-cost__control'>
                    <label>Title</label>
                    <input type="text" value={userInput.title} onChange={titleChangeHandler}/>
                </div>
                <div className='new-cost__control'>
                    <label>Amount</label>
                    <input type="number" value={userInput.amount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
                <div className='new-cost__control'>
                    <label>Date</label>
                    <input type="date" value={userInput.date} min='2024-01-01' max='2025-01-01' onChange={dateChangeHandler}/>
                </div>
                <div className='new-cost__actions'>
                    <button type='submit'>Add cost</button>
                </div>
            </div>
        </form>
    );
};

export default CostForm;
