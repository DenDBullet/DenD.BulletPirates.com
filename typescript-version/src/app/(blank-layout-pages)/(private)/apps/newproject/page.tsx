"use client";

import { useState } from "react";
import HorizontalMenu from "@/components/HorizontalMenu"; 
import MyForm from "@/components/MyForm";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Booking confirmed for ${formData.name} on ${formData.date} at ${formData.time} for ${formData.guests} guests.`);
  };

  return (
    <div>
      {/* Directly use the component without Suspense */}
      <HorizontalMenu />

      <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Book a Table</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} Guest{i > 0 ? "s" : ""}
              </option>
            ))}
          </select>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            Confirm Booking
          </button>
        </form>
      </div>

            {/* Directly use the component without Suspense */}
            <MyForm />
    </div>
  );
}
