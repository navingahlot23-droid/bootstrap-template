import SectionTitle from "../Global/SectionTitle";
import { Link } from "react-router-dom";
function PageNotFound() {
    return (
        <>
            <div className="text-center my-5 ">
                <SectionTitle heading='404' subText='Page Not Found' />
                <Link to="/bootstrap-template/" className="btn btn-primary">Go to Homepage</Link>
            </div>
        </>
    )
}

export default PageNotFound;