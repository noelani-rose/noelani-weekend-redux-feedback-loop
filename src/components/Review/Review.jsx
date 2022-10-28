import Header from "../Header/Header";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Review () {
    const dispatch = useDispatch();
    const history = useHistory();

    const [review, setReview] = useState({feeling: 0, understanding: 0, support: 0, comments: ''})

    // grab the stuff from the redux store
    const feedback = useSelector(store => store.feedback);
    console.log('feeback is...', feedback)



    // AXIOS POST TO DATABASE
    // SEND TO CONFIRMATION PAGE
    // THEN BACK TO HOME 
    // const handleReviewChange = (evt) => {
    //     setReview(evt.target.value)
    // }

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
            <h2>Review your feedback...</h2>
            <form onSubmit = {submitReview}>
                <ul>
                    <li>
                        Feeling
                    </li>
                    <li>
                        Understanding
                    </li>
                    <li>
                        Support
                    </li>
                    <li>
                        Comments
                    </li>
                </ul>
                <button type = "submit">Submit!</button>
            </form>
        </>
    )
}

export default Review;