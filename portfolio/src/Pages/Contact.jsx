import React from 'react'
import { useState } from 'react'
import emailJs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { icon } from '@fortawesome/fontawesome-svg-core';


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailJs.sendForm(
      'service_obh6c0j',
      'template_urbpqpy',
      e.target,
      'jO6JgIFqeOo72zooI'
    ).then((res) => {
      toast.success('Message sent successfully', {icon: '✅'});
    }).catch((err) => {
      console.log(err);
      toast.error('Failed to send message, please try again', {icon: '❌'});
    });

  }

  return (
    <>
    <h2 className="text-4xl mb-6 text-center text-white m-5">Contact Me</h2>
<hr className='mb-8 border-gray-500 ' />
{/* Social Icons */}
<div className="flex justify-center space-x-6 md:space-x-9 items-center mt-4 md:mt-0">
  <a href="https://github.com/Anshika13d" target="_blank" rel="noopener noreferrer" className="hover:text-teal-900">
    <FontAwesomeIcon icon={faGithub} className="text-white text-3xl hover:text-gray-500" />
  </a>
  <a href="https://www.linkedin.com/in/anshika-das-304661246" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
    <FontAwesomeIcon icon={faLinkedin} className="text-white text-3xl hover:text-gray-500" />
  </a>
  <a href="https://twitter.com/anshikad_13" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
    <FontAwesomeIcon icon={faTwitter} className="text-white text-3xl hover:text-gray-500" />
  </a>
  <a href="https://www.instagram.com/_anshikha._/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
    <FontAwesomeIcon icon={faInstagram} className="text-white text-3xl hover:text-gray-500" />
  </a>
</div>

{/* Contact Form */}
<div className="max-w-lg mx-auto p-6 m-8 bg-slate-800 rounded-lg text-white w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
  <form onSubmit={sendEmail}>
    <div className="mb-4">
      <label className="block mb-2" htmlFor="name">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='e.g. John Doe'
        id="name"
        name="user_name"
        required
        className="w-full px-3 py-2 bg-gray-700 rounded-md border-none"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2" htmlFor="email">Email</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder='e.g. johnDoe@gmail.com'
        id="email"
        name="user_email"
        required
        className="w-full px-3 py-2 bg-gray-700 rounded-md border-none"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2" htmlFor="message">Message</label>
      <textarea
        id="message"
        value={message}
        placeholder='Type your message here...'
        onChange={(e) => setMessage(e.target.value)}
        name="message"
        rows="4"
        required
        className="w-full px-3 py-2 bg-gray-700 rounded-md border-none"
      ></textarea>
    </div>
    <button type="submit" className="p-4 rounded-full w-full bg-slate-900">
      Send Message
    </button>
  </form>
</div>
    </>
  )
}

export default Contact