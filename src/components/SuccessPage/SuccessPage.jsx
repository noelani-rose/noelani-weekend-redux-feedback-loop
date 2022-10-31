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
            <div className = 'success'>Your feedback has been submitted and saved!</div>
            <button className = "homeBtn" onClick = {handleSubmit}>Back to Homepage</button> 
        </>
    )
}

export default SuccessPage;