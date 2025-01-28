"use client"

import Button from "./Button";
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      }
    } catch (error) {
      alert('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-8 lg:mt-10 items-center w-full">
      <label htmlFor="name" className="w-full">
        <span className="block font-poppins mb-2 text-base font-semibold">
          First Name
        </span>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-dun rounded-lg p-3 lg:p-4"
        />
      </label>
      <label htmlFor="email" className="w-full">
        <span className="block font-poppins mb-2 text-base font-semibold">
          Email
        </span>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-dun rounded-lg p-4"
        />
      </label>
      <label htmlFor="message" className="w-full">
        <span className="block font-poppins mb-2 text-base font-semibold">
          Message
        </span>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-dun rounded-lg p-4 resize-none"
        />
      </label>
      <button type="submit" className="inline-block relative border border-foreground py-4 px-6 font-poppins text-base font-light before:absolute before:content-[''] before:bg-foreground before:left-0 before:top-0 before:w-0 before:h-full before:-z-10 before:transition-all before:duration-300 hover:before:w-full hover:text-background transition-colors duration-300">Submit</button>
    </form>
  );
}
