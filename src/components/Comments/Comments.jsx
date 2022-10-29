import Header from "../Header/Header";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Comments () {
    const dispatch = useDispatch();
    const history = useHistory();

    const [comments, setComments] = useState('')



    // I want to take the last four inputs all stored
    // in individual reducers 
    // store them into an object and dispatch them to 
    // feedback reducer
    // useSelect feedback reducer to review page to display
    // then axios post them to server 







    const handleCommentsChange = (evt) => {
        setComments(evt.target.value)
    }

    const submitComments = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'SET_COMMENTS',
            payload: comments
        })
        history.push('/review')
    }


    return (
        <>
            <Header />
            <h2>Here are some comments</h2>
            <form onSubmit = {submitComments}>
                <input 
                type = "text"
                placeholder = "Comments..."
                onChange = {handleCommentsChange}
                value = {comments}
                >
                </input>
                <button type = "submit">Next</button>
            </form>
        </>
    )
}

export default Comments;