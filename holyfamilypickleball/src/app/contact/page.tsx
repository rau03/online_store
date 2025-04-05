"use client";

import Navigation from "@/components/Navigation";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you for your message! We will get back to you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="neo-brutalism-title text-black">Contact Us</h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl font-bold text-black">
            Have questions about our pickleball sessions? We'd love to hear from
            you.
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          <form
            onSubmit={handleSubmit}
            className="neo-brutalism-card space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-bold text-black"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="neo-brutalism-input"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-black"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="neo-brutalism-input"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-bold text-black"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="neo-brutalism-input"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="neo-brutalism-button bg-accent w-full"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          <div className="neo-brutalism-card bg-secondary text-white">
            <h3 className="neo-brutalism-subtitle">Additional Information</h3>
            <div className="mt-4 space-y-4">
              <div>
                <dt className="text-sm font-bold">Location</dt>
                <dd className="mt-1 text-sm">Holy Family Church Gymnasium</dd>
              </div>
              <div>
                <dt className="text-sm font-bold">Email</dt>
                <dd className="mt-1 text-sm">pickleball@holyfamily.org</dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
