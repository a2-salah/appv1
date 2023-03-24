import React, { useState } from "react";

function ContactForm() {
  return (
    <div className="max-w-md p-6 mx-auto my-20 mt-40 bg-white rounded-lg shadow-md ">
      <h1 className="mb-6 text-3xl font-bold">Contact Us</h1>
      <form
        className="space-y-6"
        method="POST"
        action="https://www.formbackend.com/f/664decaabbf1c319"
      >
        <div className="flex flex-col space-y-2">
          <label className="font-semibold text-gray-700">Name</label>
          <input
            className="px-3 py-2 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            name="name"
            placeholder="John Doe"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-semibold text-gray-700">Email</label>
          <input
            className="px-3 py-2 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            name="email"
            placeholder="johndoe@example.com"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-semibold text-gray-700">
            Programs &amp; Services
          </label>
          <select
            className="px-3 py-2 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="programs_services"
          >
            <option value="Settlement Services">Settlement Services</option>
            <option value="Employment Services">Employment Services</option>
            <option value="Housing Services">Housing Services</option>
            <option value="Outreach">Outreach</option>
            <option value="Other Inquiries">Other Inquiries</option>
          </select>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-semibold text-gray-700">Message</label>
          <textarea
            className="px-3 py-2 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="message"
            placeholder="Enter your message here"
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
