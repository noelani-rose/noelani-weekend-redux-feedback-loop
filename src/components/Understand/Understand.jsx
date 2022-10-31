import Header from "../Header/Header";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Understand () {
    const dispatch = useDispatch();
    const history = useHistory();
    
    // creating local state of understanding initially set to 0
    const [understanding, setUnderstanding] = useState(0)
    
    
    const handleUnderstandChange = (evt) => {
        setUnderstanding(evt.target.value)
    }
    
    // called when form is submitted and sends over value of understanding
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
        <div className="inputContainer">
            <div className="inputContent">
                <h2 className = "prompt">On a scale from 1 to 5,<br></br>
                how well are you understanding the content?</h2>
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
                        <button href = "something" className = "nextBtn" type = "submit">
                        Next
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
        )
    }
    
    export default Understand;