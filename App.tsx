import { useState } from "react";

interface Estudiante {
  nombre: string;
  matricula: string;
  materia: string;
  calificacion: string;
}

function App() {
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([]);
  const [form, setForm] = useState<Estudiante>({ nombre: "", matricula: "", materia: "", calificacion: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const agregarEstudiante = () => {
    if (!form.nombre || !form.matricula || !form.materia || !form.calificacion) return;
    setEstudiantes([...estudiantes, form]);
    setForm({ nombre: "", matricula: "", materia: "", calificacion: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Control de Estudiantes</h1>
      <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} />
      <input name="matricula" placeholder="Matrícula" value={form.matricula} onChange={handleChange} />
      <input name="materia" placeholder="Materia" value={form.materia} onChange={handleChange} />
      <input name="calificacion" placeholder="Calificación" value={form.calificacion} onChange={handleChange} />
      <button onClick={agregarEstudiante}>Agregar</button>

      <table style={{ marginTop: "20px", width: "100%", borderCollapse: "collapse", border: "1px solid black" }}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Matrícula</th>
            <th>Materia</th>
            <th>Calificación</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes.map((est, index) => (
            <tr key={index}>
              <td>{est.nombre}</td>
              <td>{est.matricula}</td>
              <td>{est.materia}</td>
              <td>{est.calificacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

