import React, { useState } from 'react';

export default function Upload() {
  const [couple, setCouple] = useState('');
  const [events, setEvents] = useState([{ name: '', date: '', time: '', location: '' }]);
  const [image, setImage] = useState(null);

  const handleEventChange = (index, field, value) => {
    const newEvents = [...events];
    newEvents[index][field] = value;
    setEvents(newEvents);
  };

  const addEvent = () => {
    setEvents([...events, { name: '', date: '', time: '', location: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ couple, events, image });
    alert('Form submitted! (in development mode)');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Upload Wedding Invite</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Couple's Names:</label>
          <input type="text" value={couple} onChange={(e) => setCouple(e.target.value)} className="w-full p-2 border rounded" />
        </div>

        {events.map((event, index) => (
          <div key={index} className="border p-4 rounded bg-gray-50">
            <label className="block font-semibold mb-1">Event {index + 1}</label>
            <input type="text" placeholder="Event Name" value={event.name} onChange={(e) => handleEventChange(index, 'name', e.target.value)} className="w-full p-2 mb-2 border rounded" />
            <input type="date" value={event.date} onChange={(e) => handleEventChange(index, 'date', e.target.value)} className="w-full p-2 mb-2 border rounded" />
            <input type="time" value={event.time} onChange={(e) => handleEventChange(index, 'time', e.target.value)} className="w-full p-2 mb-2 border rounded" />
            <input type="text" placeholder="Location" value={event.location} onChange={(e) => handleEventChange(index, 'location', e.target.value)} className="w-full p-2 border rounded" />
          </div>
        ))}

        <button type="button" onClick={addEvent} className="bg-green-500 text-white px-4 py-2 rounded">+ Add Another Event</button>

        <div>
          <label className="block font-semibold mt-4">Upload Invite Image:</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} className="w-full" />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded mt-4">Submit Invite</button>
      </form>
    </div>
  );
}
