import Header from "../Header/Header";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


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
        storeReview(review)
        history.push('/success')
    }

    return (
        <>
            <Header />
            <h2>Review your feedback...</h2>
            <form onSubmit = {submitReview}>
                <ul>
                    <li>Feelings: {review.feeling}</li>
                    <li>Understanding: {review.understanding}</li>
                    <li>Support: {review.support}</li>
                    <li>Comments: {review.comments}</li>
                </ul>
                <button type = "submit">Submit!</button>
            </form>
        </>
    )
}

export default Review;


