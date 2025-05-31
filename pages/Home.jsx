import React from 'react';
import { Link } from 'react-router-dom';

const dummyWeddings = [
  {
    id: 1,
    couple: 'Amit & Priya',
    events: [{ name: 'Wedding', date: 'Jan 15, 2026' }],
    location: 'Delhi'
  },
  {
    id: 2,
    couple: 'Ravi & Neha',
    events: [{ name: 'Sangeet', date: 'Feb 16, 2026' }],
    location: 'Mumbai'
  }
];

export default function Home() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Wedding Invite Calendar</h1>
        <Link to="/upload" className="bg-blue-500 text-white px-4 py-2 rounded">+ Upload Wedding Invite</Link>
      </div>

      {dummyWeddings.map((wedding) => (
        <div key={wedding.id} className="border rounded p-4 mb-4 shadow">
          <h2 className="text-xl font-semibold">💍 {wedding.couple}</h2>
          <p>📅 {wedding.events[0].name}: {wedding.events[0].date}</p>
          <p>📍 {wedding.location}</p>
          <Link to={`/wedding/${wedding.id}`} className="mt-2 inline-block bg-gray-200 px-3 py-1 rounded">View Full Details</Link>
        </div>
      ))}
    </div>
  );
}
