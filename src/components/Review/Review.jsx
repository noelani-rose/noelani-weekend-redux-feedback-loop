import Header from "../Header/Header";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from "sweetalert2";

function Review ({storeReview}) {
    const history = useHistory();

    const feeling = useSelector(store => store.feeling)
    const understanding = useSelector(store => store.understand)
    const support = useSelector(store => store.support)
    const comments = useSelector(store => store.comments)


    const review = {
        feeling: feeling, 
        understanding: understanding,
        support: support, 
        comments: comments
    }

    console.log('review is', review)


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


