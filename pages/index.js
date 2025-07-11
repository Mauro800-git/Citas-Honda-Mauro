// Página original restaurada con recuadro visual de horarios
import { useState } from 'react';
import SelectorHorario from '../components/SelectorHorario';

export default function Home() {
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  return (
    <div style={{ padding: 20 }}>
      <h1>Moto Repuestos Mauro</h1>
      <label>
        Seleccione una fecha:
        <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
      </label>

      {fecha && (
        <SelectorHorario fecha={fecha} onSelectHora={(horaElegida) => setHora(horaElegida)} />
      )}

      {hora && <p>Cita seleccionada: {fecha} a las {hora}</p>}
    </div>
  );
}
