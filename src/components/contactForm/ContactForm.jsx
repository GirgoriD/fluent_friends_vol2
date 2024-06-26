import React from 'react';
import "./contactForm.scss";
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast styles

function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const form = useRef();

  const onSubmit = (data) => {
    emailjs.sendForm('service_uxhft8q', 'template_s43kamg', form.current, 'T9fpV7CMEE9plpemb')
      .then((result) => {
        console.log("Message sent successfully:", result.text);
        toast.success('Message sent successfully'); // Show success toast
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        toast.error('Error sending message. Please try again later.'); // Show error toast
      });
    reset();
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder='example@gmail.com'
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label>Phone Number</label>
          <input
            type="tel"
            placeholder='1234567890'
            {...register('tel', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Invalid phone number. Please enter 10 digits without spaces or special characters.',
              },
            })}
          />
          {errors.tel && <span>{errors.tel.message}</span>}
        </div>

        <div>
          <label>Message</label>
          <textarea
            placeholder='Hello My name is John ...'
            {...register('message', {
              required: 'Message is required',
            })}
          />
          {errors.message && <span>{errors.message.message}</span>}
        </div>

        <button type='submit'>Send</button>
      </form>
    </>
  );
}

export default ContactForm;
