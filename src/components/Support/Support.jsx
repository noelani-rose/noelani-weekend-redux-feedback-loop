import Header from "../Header/Header";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Support () {
    const dispatch = useDispatch();
    const history = useHistory();

    const [support, setSupport] = useState(0)

    const handleSupportChange = (evt) => {
        setSupport(evt.target.value)
    }

    const submitSupport = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'SET_SUPPORT',
            payload: support
        })
        history.push('/comments')
    }


    return (
        <>
            <Header />
            <h2 className = "prompt">How well are you being supported?</h2>
            <form onSubmit = {submitSupport}>
                <div clas = "form__group field">
                    <input 
                    className = "form__field"
                    type = "number"
                    min = "1"
                    max = "5"
                    required
                    onChange = {handleSupportChange}
                    value = {support} />
                    <button className = "nextBtn" type = "submit">
                        Next
                    </button>
                </div>
            </form>
        </>
    )
}

export default Support; 