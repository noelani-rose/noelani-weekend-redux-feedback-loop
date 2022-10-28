import Header from "../Header/Header";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Feeling () {
    const dispatch = useDispatch();
    const history = useHistory();

    // const [feeling, setFeeling] = useState(0)

    const storedFeeling = useSelector(store => store.feeling)
    console.log('stored feeling', storedFeeling)


    const handleFeelingChange = (evt) => {
        setFeeling(evt.target.value)
    }

    const submitFeeling = (evt) => {
        evt.preventDefault();

        dispatch({
            type: 'SET_FEELING', 
            payload: storedFeeling
        }) 
    }




    return(
        <>
            <Header />
            <h2>How are you feeling today?</h2>
            <form onSubmit={submitFeeling}>
            <input 
            type = "number"
            onChange = {(evt) => {evt.target.value}}
            // onChange = {(evt) => {setFeeling(evt.target.value)}}
            value = {storedFeeling}></input>
            <button type = "submit">Next</button>
            </form>
        </>
    )
}

export default Feeling;

// TODO: Make min input 1, max input 5