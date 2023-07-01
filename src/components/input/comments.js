import { useContext, useEffect, useState } from 'react';
import './comments.module.css'
import CommentList from './comment-list';
import NewComment from './new-comment';
import NotificationContext from '@/store/notification-context';


function Comments(props) {
  const { eventId } = props;
  const notificationCtx = useContext(NotificationContext);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (showComments) {
      fetch('/api/comments/' + eventId)
        .then((response) => response.json())
        .then((data) => {
          notificationCtx.showNotification({
            title : 'Success',
            message: 'Successfully show comments',
            status: 'success'
          })
          setComments(data.comments);
        })
        .catch(error => {
           notificationCtx.showNotification({
             title: "Error",
             message: error.message || "Somthing went wrong!",
             status: "error",
           });
        })
    }
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    fetch("/api/comments/" + eventId, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        notificationCtx.showNotification({
          title: "Success",
          message: "Successfully add comments",
          status: "success",
        });
      })
      .catch((error) => {
        notificationCtx.showNotification({
          title: "Error",
          message: error.message || "Somthing went wrong!",
          status: "error",
        });
      });
  }

  return (
    <section className="comments my-12 mx-auto w-11/12 max-w-2xl text-center">
      <button
        className=" rounded-md py-2 px-4 bg-transparent text-slate-700 border-2 border-slate-700 cursor-pointer"
        onClick={toggleCommentsHandler}
      >
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList items={comments} />}
    </section>
  );
}

export default Comments;

