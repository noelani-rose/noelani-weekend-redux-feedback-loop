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
            <h2>How well are you being supported?</h2>
            <form onSubmit = {submitSupport}>
                <input 
                type = "number"
                min = "1"
                max = "5"
                onChange = {handleSupportChange}
                value = {support}
                >
                </input>
                <button type = "submit">
                    Next
                </button>
            </form>
        </>
    )
}

export default Support; 