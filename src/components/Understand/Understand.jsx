import Header from "../Header/Header";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Understand () {
    const dispatch = useDispatch();
    const history = useHistory();

    const [understanding, setUnderstanding] = useState(0)


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
            <h2 className = "prompt">How well are you understanding the content?</h2>
            <form onSubmit = {submitUnderstand}>
            <div clas = "form__group field">
                    <input 
                    className = "form__field"
                    id = ""
                    type = "number"
                    min = "1"
                    max = "5"
                    onChange = {handleUnderstandChange}
                    value = {understanding} />
                    <button type = "submit">
                        Next
                    </button>
                </div>
            </form>
        </>
    )
}

export default Understand;