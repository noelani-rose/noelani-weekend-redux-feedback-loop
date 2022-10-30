import Header from "../Header/Header";
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Feeling () {
    const dispatch = useDispatch();
    const history = useHistory();

    const [feeling, setFeeling] = useState(0)

    const handleFeelingChange = (evt) => {
        setFeeling(evt.target.value)

    }

    const submitFeeling = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'SET_FEELING', 
            payload: feeling
        }) 
        history.push('/understand')
    }


    return(
        <>
            <Header />
            <h2>How are you feeling today?</h2>
            <form onSubmit={submitFeeling}>
                <input 
                type = "number"
                onChange = {handleFeelingChange} 
                value = {feeling}
                >
                </input>
                <button type = "submit">Next</button>
            </form>
        </>
    )
}

export default Feeling;

