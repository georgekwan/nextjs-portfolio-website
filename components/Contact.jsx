import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-toastify';

import ContactImg from '@/public/assets/contact.webp';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
  // States for contact form fields
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState('Send');

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors['fullname'] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors['email'] = true;
      isValid = false;
    }
    if (phone.length <= 0) {
      tempErrors['phone'] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors['subject'] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors['message'] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log('errors', errors);
    return isValid;
  };

  //   Handling form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText('Sending');
      const res = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          email: email,
          phone: phone,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        toast.error('Error! Please Try Again😭');
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText('Send');

        // Reset form fields
        setFullname('');
        setEmail('');
        setPhone('');
        setMessage('');
        setSubject('');
        return;
      }
      toast.success('Message Sent🎉');
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText('Send');
      // Reset form fields
      setFullname('');
      setEmail('');
      setPhone('');
      setMessage('');
      setSubject('');
    }
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#D6001C]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* About Me */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">George Kwan</h2>
                <p>Software Developer</p>
                <p>
                  I am available for freelance, contract, or full-time
                  positions. Let&apos;s connect and discuss your software
                  development needs. I&apos;m passionate about delivering
                  exceptional solutions that meet the needs of my clients.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex item-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/george-kwan/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      id="linkedin"
                      className="rounded-full shadow-md shadow-gray-400 bg-[#eceef3] p-6 cursor-pointer hover:drop-shadow-lg hover:scale-110 hover:text-[#D6001C] ease-in duration-300"
                    >
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://georgekwan.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      id="github"
                      className="rounded-full shadow-md shadow-gray-400 bg-[#eceef3] p-6 cursor-pointer hover:drop-shadow-lg hover:scale-110 hover:text-[#D6001C] ease-in duration-300"
                    >
                      <FaGithub />
                    </div>
                  </a>
                  <a
                    href="mailto:gwmkwan@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      id="email"
                      className="rounded-full shadow-md shadow-gray-400 bg-[#eceef3] p-6 cursor-pointer hover:drop-shadow-lg hover:scale-110 hover:text-[#D6001C] ease-in duration-300"
                    >
                      <AiOutlineMail />
                    </div>
                  </a>
                  <Link href="/resume">
                    <div
                      id="resume"
                      className="rounded-full shadow-md shadow-gray-400 bg-[#eceef3] p-6 cursor-pointer hover:drop-shadow-lg hover:scale-110 hover:text-[#D6001C] ease-in duration-300"
                    >
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Contact */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label
                      htmlFor="fullname"
                      className="uppercase text-sm py-2"
                    >
                      Full Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      value={fullname}
                      onChange={(e) => {
                        setFullname(e.target.value);
                      }}
                      name="fullname"
                    />
                    {errors?.fullname && (
                      <p className="text-red-500">Full name cannot be empty.</p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                    {errors?.phone && (
                      <p className="text-red-500">
                        Phone number cannot be empty.
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="email" className="uppercase text-sm py-2">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  {errors?.email && (
                    <p className="text-red-500">Email cannot be empty.</p>
                  )}
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="subject" className="uppercase text-sm py-2">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                  />
                  {errors?.subject && (
                    <p className="text-red-500">Subject cannot be empty.</p>
                  )}
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="message" className="uppercase text-sm py-2">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  ></textarea>
                  {errors?.message && (
                    <p className="text-red-500">
                      Message body cannot be empty.
                    </p>
                  )}
                </div>

                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>

                <div className="text-left">
                  {showSuccessMessage && (
                    <p className="text-green-500 font-semibold text-sm my-2">
                      Thank you! Your Message has been delivered.
                    </p>
                  )}
                  {showFailureMessage && (
                    <p className="text-red-500">
                      Oops! Something went wrong, please try again.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full drop-shadow-md shadow-gray-400 bg-[#eceef3] p-4 cursor-pointer hover:drop-shadow-xl hover:scale-110  ease-in duration-300">
              <HiOutlineChevronDoubleUp
                className="text-[#1f2937] hover:text-[#D6001C]"
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
