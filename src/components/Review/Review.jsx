import Header from "../Header/Header";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Review () {
    const dispatch = useDispatch();
    const history = useHistory();

    // const [review, setReview] = useState({feeling: 0, understanding: 0, support: 0, comments: ''})

    const feeling = useSelector(store => store.feeling)
    const understanding = useSelector(store => store.understand)
    const support = useSelector(store => store.support)
    const comments = useSelector(store => store.comments)

    // grab the feedback stuff from the redux store
    // const feedback = useSelector(store => store.feedback);
    // console.log('feeback is...', feedback)


    const createReview = [{
        feeling: feeling, 
        understanding: understanding,
        support: support, 
        comments: comments
    }]





    console.log('the review is', createReview)

    // OPTION ONE
        // - grab all four reducers



    // AXIOS POST TO DATABASE
    // SEND TO CONFIRMATION PAGE
    // THEN BACK TO HOME 

    // WHEN SUBMIT IS HANDLED, EMPTY REVIEW ARRAY 


    const submitReview = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'SET_REVIEW',
            payload: createReview
        })
        createReview
        history.push('/success')
    }


    return (
        <>
            <Header />
            <h2>Review your feedback...</h2>
            <form onSubmit = {submitReview}>
                <ul>
                    {createReview.map((reviewItem) => (
                         <li>Feeling is: {reviewItem.feeling}
                        <li>Understanding is: {reviewItem.understanding}</li>
                        <li>Support is: {reviewItem.support}</li>
                        <li>Comments are: {reviewItem.comments}</li>  
                        </li>
                    ))}
                </ul>
                <button type = "submit">Submit!</button>
            </form>
        </>
    )
}

export default Review;