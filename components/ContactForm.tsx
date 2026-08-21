"use client";

import { FormEvent } from "react";

export default function ContactForm() {
  const submitInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const inquiry = String(data.get("inquiry") || "General Inquiry");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`${inquiry}: ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nInquiry: ${inquiry}\n\n${message}`);
    window.location.href = `mailto:salwa@salwaqadir.com?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form" onSubmit={submitInquiry}>
      <div className="form-row">
        <label>
          <span>Name</span>
          <input autoComplete="name" name="name" required type="text" />
        </label>
        <label>
          <span>Email</span>
          <input autoComplete="email" name="email" required type="email" />
        </label>
      </div>
      <label>
        <span>What can I help with?</span>
        <select defaultValue="" name="inquiry" required>
          <option disabled value="">Choose one</option>
          <option>Women’s Strength Coaching: One-to-One or Small Group</option>
          <option>Fitness Business Mentorship</option>
          <option>Workshops + Speaking</option>
          <option>Brand + Media Partnerships</option>
          <option>General Inquiry</option>
        </select>
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" placeholder="Tell me a little about what you’re looking for." required />
      </label>
      <button className="button button-primary" type="submit">Send inquiry</button>
      <p className="form-status">Or email <a href="mailto:salwa@salwaqadir.com">salwa@salwaqadir.com</a> directly.</p>
    </form>
  );
}
