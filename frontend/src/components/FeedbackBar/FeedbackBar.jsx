import { useEffect } from "react";

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

export default FeedbackBar;
