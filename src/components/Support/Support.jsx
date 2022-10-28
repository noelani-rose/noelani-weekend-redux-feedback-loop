import Header from "../Header/Header";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Support () {
    const dispatch = useDispatch();
    const history = useHistory();

    const [support, setSupport] = useState(0)

    // const storedUnderstand = useSelector(store => store.understand)
    // console.log('store understanding is', storedUnderstand)

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
            <h2>Do you feel supported?!</h2>
            <form onSubmit = {submitSupport}>
                <input 
                type = "number"
                onChange = {handleSupportChange}
                value = {support}
                >
                </input>
                <button type = "submit">Next</button>
            </form>
        </>
    )
}

export default Support; 