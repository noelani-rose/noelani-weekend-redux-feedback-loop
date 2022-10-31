import Header from "../Header/Header";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from "sweetalert2";

// import storeReview function from app.jsx
function Review ({storeReview}) {
    const history = useHistory();

    // create four selectors to grab respective states from redux store
    const feeling = useSelector(store => store.feeling)
    const understanding = useSelector(store => store.understand)
    const support = useSelector(store => store.support)
    const comments = useSelector(store => store.comments)

    // take those values from redux store and combine into an object
    const review = {
        feeling: feeling, 
        understanding: understanding,
        support: support, 
        comments: comments
    }

    console.log('review is', review)

    // on submission, call storeReview function with review object
    const submitReview = (evt) => {
        evt.preventDefault();
        storeReview(review);
        Swal.fire({
            position: 'center', 
            icon: 'success', 
            title: 'Your feedback has been saved!',
            showConfirmButton: false,
            timer: 1500
        })
        .then(() => {
            history.push('/success')
        })
    }

    return (
        <>
            <Header />
            <h2 className = "prompt reviewFeedback">Review your feedback...</h2>
            <form className = "reviewForm" onSubmit = {submitReview}>
                <div className = "review">
                    <p>Feelings: {review.feeling}</p>
                    <p>Understanding: {review.understanding}</p>
                    <p>Support: {review.support}</p>
                    <p>Comments: {review.comments}</p>
                </div>
                <button className = "submitBtn" type = "submit">Submit</button>
            </form>
        </>
    )
}

export default Review;


