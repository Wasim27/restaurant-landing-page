import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="bg-dark flex flex-col items-center p-20">
      <h1 className="py-4 text-2xl font-bold md:text-2xl text-gray-light lg:text-3xl">
        Book your table
      </h1>
      <form className="flex flex-col gap-2 w-60">
        <input className="p-2" type="text" placeholder="Full name" />
        <input className="p-2" type="email" placeholder="Email" />
        <textarea
          className="w-60 h-20 p-2"
          placeholder="Write here... Number of guests etc"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <input
          className="book-btn mt-4 inline-block py-3"
          type="submit"
          value="Book"
        />
      </form>
    </div>
  );
};

export default Contact;
