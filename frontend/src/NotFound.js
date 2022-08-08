import { Link } from "react-router-dom";

function NotFound(){
    return(
        <div className="notFound">
            <p>Sorry, Page not Found</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default NotFound;