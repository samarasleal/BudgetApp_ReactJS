import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    var [name, setName] = useState('');
    const { dispatch  } = useContext(AppContext);
    const submitEvent = () => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: name,
        });
    }
    return (
        <div className='alert alert-primary' style={{backgroundColor:'#b9d2b4'}}>
            <select style={{backgroundColor:'#b9d2b4'}} onChange={(event) => setName(event.target.value)} onClick={submitEvent}>
                <option value="$" defaultValue>Currency $ Dollar</option>
                <option value="£" name="Pounds">£ Pounds</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;