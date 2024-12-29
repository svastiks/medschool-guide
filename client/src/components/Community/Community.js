import react from "react";
import PostQuestions from "../PostQuestion/PostQuestion";
import FetchQuestions from "../FetchQuestions/FetchQuestions";

const Community = () => {
    return(
        <div>
            <h2>Hey, feel free to drop any questions here!</h2>
            <PostQuestions />
            <FetchQuestions />
        </div>
    )
};

export default Community;