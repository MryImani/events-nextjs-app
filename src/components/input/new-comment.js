import { useRef, useState } from 'react';


function NewComment(props) {
  const [isInvalid, setIsInvalid] = useState(false);

  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const commentInputRef = useRef();

  function sendCommentHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredComment = commentInputRef.current.value;

    if (
      !enteredEmail ||
      enteredEmail.trim() === '' ||
      !enteredEmail.includes('@') ||
      !enteredName ||
      enteredName.trim() === '' ||
      !enteredComment ||
      enteredComment.trim() === ''
    ) {
      setIsInvalid(true);
      return;
    }
    else{
setIsInvalid(false);
    }
    

    props.onAddComment({
      email: enteredEmail,
      name: enteredName,
      text: enteredComment,
      
    });
  }

  return (
    <form
      className="form my-8 mx-auto w-full rounded-md bg-gray-900 shadow p-4"
      onSubmit={sendCommentHandler}
    >
      <div className="flex gap-4 flex-wrap justify-between">
        <div className="mb-2 flex flex-col w-full md:w-72">
          <label
            className="block font-bold mb-2 text-white text-left"
            htmlFor="email"
          >
            Your email
          </label>
          <input
            className="text-inherit p-1 rounded border-2 w-full "
            type="email"
            id="email"
            ref={emailInputRef}
          />
        </div>
        <div className="mb-2 flex flex-col w-full md:w-80">
          <label
            className="block font-bold mb-2 text-white text-left"
            htmlFor="name"
          >
            Your name
          </label>
          <input
            className="text-inherit p-1 rounded border-2 w-full "
            type="text"
            id="name"
            ref={nameInputRef}
          />
        </div>
      </div>
      <div className="mb-2 flex flex-col ">
        <label
          className="block font-bold mb-2 text-white text-left"
          htmlFor="comment"
        >
          Your comment
        </label>
        <textarea
          className="text-inherit p-1 rounded border-2 w-full "
          id="comment"
          rows="5"
          ref={commentInputRef}
        ></textarea>
      </div>
      {isInvalid && <p className=' text-red-400'>Please enter a valid email address and comment!</p>}
      <button className=" bg-white rounded p-3 text-gray-900 font-bold">Submit</button>
    </form>
  );
}

export default NewComment;



