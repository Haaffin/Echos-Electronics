import { useNavigate, useRouteError } from "react-router-dom";
import './styles/error.css'

export default function Error() {
    const error = useRouteError();
    console.error(error);

    const navigate = useNavigate()
    
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <button onClick={() => navigate(-1)}>Go back</button>
            <p> 
                <i>{error.status}</i> <br/>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}