import {useHistory} from 'react-router-dom';
import Header from '../Header/Header';

function SuccessPage () {
    const history = useHistory();

    const handleSubmit = () => {
        history.push('/')
    };

    return (
        <>       
            <Header />
            <p>Success! Your feedback was submitted!</p>
            <button onClick = {handleSubmit}>Back to Homepage</button> 
        </>
    )
}

export default SuccessPage;