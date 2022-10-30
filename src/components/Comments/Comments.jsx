import Header from "../Header/Header";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Comments () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [comments, setComments] = useState('')


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
            <h2 className = "prompt">Are there any comments you want to leave?</h2>
            <form onSubmit = {submitComments}>
            <div clas = "form__group field">
                    <input 
                    className = "form__field"
                    type = "input"
                    placeholder = "Comments..."
                    onChange = {handleCommentsChange}
                    value = {comments} />
                    <button type = "submit">
                        Next
                    </button>
                </div>
            </form>
        </>
    )
}

export default Comments;