import { useRef } from 'react';


function NewsletterRegistration() {
  const emailInputRef = useRef();

  function registrationHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;

    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <section className="newsletter my-12 mx-auto w-11/12 max-w-xs">
      <h2 className="text-lg font-bold mb-4 text-center">
        Sign up to stay updated!
      </h2>
      <form onSubmit={registrationHandler}>
        <div className="flex">
          <input
            className="flex-1 text-inherit p-1 rounded rounded-tr-none rounded-br-none border-2 border-slate-400"
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
          />
          <button className=" bg-gray-900  text-white border-2 border-gray-900 rounded-md rounded-tl-none rounded-bl-none cursor-pointer px-2">
            Register
          </button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;

