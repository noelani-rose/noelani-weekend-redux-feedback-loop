import Header from "../Header/Header";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Understand () {
    const dispatch = useDispatch();
    const history = useHistory();

    const [understanding, setUnderstanding] = useState(0)

    // const storedUnderstand = useSelector(store => store.understand)
    // console.log('store understanding is', storedUnderstand)

    const handleUnderstandChange = (evt) => {
        setUnderstanding(evt.target.value)
    }

    const submitUnderstand = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'SET_UNDERSTAND',
            payload: understanding
        })
        history.push('/support')
    }


    return (
        <>
            <Header />
            <h2>Do you understand?!</h2>
            <form onSubmit = {submitUnderstand}>
                <input 
                type = "number"
                onChange = {handleUnderstandChange}
                value = {understanding}
                >
                </input>
                <button type = "submit">Next</button>
            </form>
        </>
    )
}

export default Understand;