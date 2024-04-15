import React, { useState } from 'react';
//import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const ContactForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [result, setResult] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...state }),
    })
    axios
      .post("http://localhost:3000/send", { ...state })
      .then((response) => {
        setResult(response.data);
        setState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        setResult({
          success: false,
          message: 'Something went wrong. Try again later'
        });
      });
  }

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value
    });
  }

  return (
    <div>
      <h1>Contact Us</h1>
      {result && (
        <p className={`${result.success ? 'success' : 'error'}`}>
          {result.message}
        </p>
      )}
      <div className="">
        <form onSubmit={sendEmail} className="w-full max-w-sm">
          <div className="">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Full Name</label>
            <input name="name" type="text" value={state.name} onChange={onInputChange} className="block w-full p-2 border border-gray-300 rounded" placeholder="Name" />
          </div>
          <div className="">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Email</label>
            <input name="email" type="email" value={state.email} onChange={onInputChange} className="block w-full p-2 border border-gray-300 rounded" placeholder="Email" />
          </div>
          <div className="">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Subject</label>
            <input name="subject" type="text" value={state.subject} onChange={onInputChange} className="block w-full p-2 border border-gray-300 rounded" placeholder="Subject" />
          </div>
          <div className="">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Message</label>
            <textarea name="message" value={state.message} onChange={onInputChange} className="block w-full p-2 border border-gray-300 rounded" placeholder="Message" />
          </div>
          <div className="">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Send</button>
          </div>
        </form>   
      </div>     
    </div>
  );
};

export default ContactForm;