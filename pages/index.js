
import { useState } from 'react';

export default function Home() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [model, setModel] = useState('');
  const [km, setKm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Cita reservada para ${name} el ${date} a las ${time}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 bg-gray-50">
      <h1 className="text-3xl font-bold text-hondaRed text-center">Moto Repuestos Mauro</h1>
      <p className="text-hondaBlue text-center mb-4">Servicio autorizado Honda - Reserva tu cita</p>

      <div className="flex flex-wrap gap-4 justify-center mb-6">
        <img src="/honda1.jpg" alt="Moto Honda 1" className="w-40 h-24 object-cover rounded-xl shadow" />
        <img src="/honda2.jpg" alt="Moto Honda 2" className="w-40 h-24 object-cover rounded-xl shadow" />
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium">Fecha</label>
          <input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full border rounded p-2"/>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Hora</label>
          <input type="time" step="1800" value={time} onChange={e => setTime(e.target.value)} className="w-full border rounded p-2"/>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Nombre completo</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full border rounded p-2" placeholder="Tu nombre"/>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Teléfono</label>
          <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} className="w-full border rounded p-2" placeholder="8xxxxxxx"/>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Modelo de la moto</label>
          <input type="text" value={model} onChange={e => setModel(e.target.value)} className="w-full border rounded p-2" placeholder="XR150L"/>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Kilometraje actual</label>
          <input type="number" value={km} onChange={e => setKm(e.target.value)} className="w-full border rounded p-2" placeholder="1500"/>
        </div>

        <button type="submit" disabled={!date || !time || !name || !phone} className="w-full bg-hondaRed text-white py-2 rounded-md hover:bg-red-800 disabled:opacity-50">Reservar Cita</button>
      </form>
    </div>
  );
}
