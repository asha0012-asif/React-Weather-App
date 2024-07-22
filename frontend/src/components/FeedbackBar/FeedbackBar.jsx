import { useEffect } from "react";
import { PropTypes } from "prop-types";

import "./FeedbackBar.css";

const FeedbackBar = ({ errorMessage, setErrorMessage }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setErrorMessage("");
        }, 3000);

        return () => clearTimeout(timer);
    }, [errorMessage]);

    return errorMessage ? (
        <div className="feedback-bar">
            <span>{errorMessage}</span>
        </div>
    ) : null;
};

FeedbackBar.propTypes = {
    errorMessage: PropTypes.string.isRequired,
    setErrorMessage: PropTypes.func.isRequired,
};

export default FeedbackBar;
