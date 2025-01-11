import { useRef, useState } from "react";
import classes from "./CommentForm.module.css";

function CommentForm(props) {
    const commentInputRef = useRef();

    const [errorMessage, setErrorMessage] = useState("");

    function handlerSubmit(event) {
        event.preventDefault();

        const enteredComment = commentInputRef.current.value;

        if (enteredComment.trim() === "") {
            setErrorMessage("Comment field must be filled.");
            return;
        }

        props.onAddComment(enteredComment);
        commentInputRef.current.value = "";
        setErrorMessage("");
    }

    return ( 
        <div className={classes.form_wrap}>
            <form className={classes.form} onSubmit={handlerSubmit}>
                <div className={classes.control}>
                    <textarea required id="experience" rows="2" placeholder="Leave a Comment.." ref={commentInputRef}/>
                </div>
                {errorMessage && (<p className={classes.error_message}>{errorMessage}</p>)}
                <div className={classes.actions}>
                    <button type="submit">Comment</button>
                </div>
            </form>   
        </div> 
    );
}

export default CommentForm;