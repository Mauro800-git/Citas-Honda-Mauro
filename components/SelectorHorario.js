// Componente visual con recuadros de horario
import { useEffect, useState } from 'react';

const horariosLaborales = {
  lunes: ['08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00',
          '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00',
          '16:30', '17:00', '17:30'],
  sabado: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00'],
};

function SelectorHorario({ fecha, onSelectHora }) {
  const [horarios, setHorarios] = useState([]);

  useEffect(() => {
    const dia = new Date(fecha).getDay();
    const diaSemana = ['domingo','lunes','martes','miércoles','jueves','viernes','sabado'][dia];
    const hoy = new Date();
    const ahora = hoy.toTimeString().slice(0, 5);
    const esHoy = fecha === hoy.toISOString().split('T')[0];

    const hs =
      dia === 6
        ? horariosLaborales.sabado
        : dia === 0
        ? []
        : horariosLaborales.lunes;

    const simuladasOcupadas = ['09:00', '14:00']; // simulación

    const result = hs.map((hora) => {
      const ocupada = simuladasOcupadas.includes(hora);
      const pasada = esHoy && hora < ahora;
      return {
        hora,
        disponible: !ocupada && !pasada,
      };
    });

    setHorarios(result);
  }, [fecha]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))', gap: 10, marginTop: 20 }}>
      {horarios.map(({ hora, disponible }) => (
        <button
          key={hora}
          style={{
            backgroundColor: disponible ? 'green' : 'red',
            color: 'white',
            padding: '10px 0',
            border: 'none',
            borderRadius: 8,
            cursor: disponible ? 'pointer' : 'not-allowed',
          }}
          disabled={!disponible}
          onClick={() => disponible && onSelectHora(hora)}
        >
          {hora}
        </button>
      ))}
    </div>
  );
}

export default SelectorHorario;
