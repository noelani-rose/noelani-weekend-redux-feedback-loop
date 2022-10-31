import Header from "../Header/Header";
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Feeling () {
    const dispatch = useDispatch();
    const history = useHistory();

    const [feeling, setFeeling] = useState(0)

    // const makeRequired = () => {
    //     if (feeling < 1 || feeling > 5) {
    //         alert('Please submit a number between 1 and 5')
    //     }

    // }

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
            <div className="inputContainer">
            <div className="inputContent">
            <h2 className = "prompt">On a scale from 1 to 5,<br></br>how are you feeling today?</h2>
            <p></p>
            <form onSubmit={submitFeeling}>
                <div clas = "form__group field">
                    <input 
                    className = "form__field"
                    type = "number"
                    min = "1"
                    max = "5"
                    required
                    onChange = {handleFeelingChange} 
                    value = {feeling} />
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

export default Feeling;

