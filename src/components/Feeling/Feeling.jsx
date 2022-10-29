import Header from "../Header/Header";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Feeling () {
    const dispatch = useDispatch();
    const history = useHistory();

    const [feedback, setFeedback] = useState({feeling: 0, understanding: 0, support: 0, comments: ''})
    const [feeling, setFeeling] = useState(0)

    // WHAT DO I DO WITH STOREDFEELING??
    // const storedFeeling = useSelector(store => store.feeling)
    // console.log('stored feeling', storedFeeling)


    const handleFeelingChange = (evt) => {
        // setFeedback({...feedback, feeling: evt.target.value})
        setFeeling(evt.target.value)

    }

    const submitFeeling = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'SET_FEELING', 
            // payload: feedback
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
                // value = {feedback.feeling}
                value = {feeling}
                >
                </input>
                <button type = "submit">Next</button>
            </form>
        </>
    )
}

export default Feeling;

// TODO: Make min input 1, max input 5