import React, { useState } from 'react';
//import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const ContactForm = () => {
  const [state, setState] = useState({
    first_name: '',
    last_name: '',
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
          first_name: '',
          last_name: '',
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
    <div className="container">
      <h1>Contact Us</h1>
      {result && (
        <p className={`${result.success ? 'success' : 'error'}`}>
          {result.message}
        </p>
      )}
      <div className="max-w-screen-lg mx-auto p-5">
        <form onSubmit={sendEmail} className="md:col-span-8 p-10">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">First Name</label>
              <input 
                id="grid-first-name" 
                name="first_name" 
                type="text" 
                value={state.first_name} 
                onChange={onInputChange} 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                placeholder="First Name" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">Last Name</label>
              <input 
                id="grid-last-name" 
                name="last_name" 
                type="text" 
                value={state.last_name} 
                onChange={onInputChange} 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                placeholder="Last Name" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">Email Address</label>
              <input 
                id="grid-email" 
                name="email" 
                type="email" 
                value={state.email} 
                onChange={onInputChange} 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                placeholder="Email" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-subject">Subject</label>
              <input 
                id="grid-subject" 
                name="subject" 
                type="text" 
                value={state.subject} 
                onChange={onInputChange} 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                placeholder="Subject" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">Message</label>
              <textarea 
                id="grid-message" 
                name="message" 
                value={state.message} 
                onChange={onInputChange}
                rows={5} 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                placeholder="Message" />
            </div>
          </div>
          <div className="flex justify-between w-full px-3">
            <div className="md:flex md:items-center">
              <button 
                type="submit" 
                className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded">
                  Send
              </button>
            </div>
          </div>
        </form> 
      </div>
    </div>
  );
};

export default ContactForm;