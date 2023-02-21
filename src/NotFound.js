import { Link } from "react-router-dom";
import error from "./error.gif"

const NotFound = () => {
    return (
        <div className="notFoundPage">
            <h2>Page Not Found</h2>
            <Link to={"/"}>Go Back to the homepage</Link>
            <img src={error}/>

        </div>
      );
}
 
export default NotFound;