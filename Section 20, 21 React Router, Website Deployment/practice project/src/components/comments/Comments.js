import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";

const Comments = () => {
  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);
  const params = useParams();
  const [isAddingComment, setIsAddingComment] = useState(false);

  useEffect(() => sendRequest(params.quoteId), [params.quoteId, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addCommentHandler = useCallback(
    () => sendRequest(params.quoteId),
    [params.quoteId, sendRequest]
  );

  let comments;

  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  } else if (
    status === "completed" &&
    loadedComments &&
    loadedComments.length > 0
  ) {
    comments = <CommentsList comments={loadedComments} />;
  } else if (
    status === "completed" &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p className="centered">No comments were added yet!</p>;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={params.quoteId}
          onAddedComment={addCommentHandler}
        />
      )}
      {comments}
    </section>
  );
};

export default Comments;
