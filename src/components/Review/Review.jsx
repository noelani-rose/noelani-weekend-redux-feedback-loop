import Header from "../Header/Header";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Review () {
    const dispatch = useDispatch();
    const history = useHistory();

    const [review, setReview] = useState(0)

    // const storedUnderstand = useSelector(store => store.understand)
    // console.log('store understanding is', storedUnderstand)

    const handleReviewChange = (evt) => {
        setReview(evt.target.value)
    }

    const submitReview = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'SET_REVIEW',
            payload: review
        })
        history.push('/')
    }


    return (
        <>
            <Header />
            <h2>Review.....</h2>
            <form onSubmit = {submitReview}>
                <input 
                type = "number"
                onChange = {handleReviewChange}
                value = {review}
                >
                </input>
                <button type = "submit">Next</button>
            </form>
        </>
    )
}

export default Review;