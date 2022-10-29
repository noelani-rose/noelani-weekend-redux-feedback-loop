import {useHistory} from 'react-router-dom'

function SuccessPage () {
    const history = useHistory();

    const handleSubmit = () => {
        history.push('/')
    };


    return (
        <>       
            <p>Success! Your feedback was submitted!</p>
            <button onClick = {handleSubmit}>Back to Homepage</button> 
        </>
    )
}

export default SuccessPage;