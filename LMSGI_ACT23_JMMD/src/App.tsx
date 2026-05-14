import {z} from "zod";
import React, {useState } from "react";
import './App.css'

function App() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [curso, setCurso] = useState("");

const StudentsSchema = z.object({
  nombre: z.string().min(3, "El nombre es demasiado corto para ser registrado"),
  email: z.string().email("Formato incorrecto"),
  curso: z.enum(["1 DAM", "2 DAM"])
})

type Student = z.infer<typeof StudentsSchema>;

const Confirmar = (e) => {
  e.preventDefault();

  const datos = {
    nombre,
    email,
    curso
  }

  const resultado= StudentsSchema.safeParse(datos);

  if (!resultado.success) {
    alert(resultado.error.issues[0].message);
  } else {
    alert("Registro exitoso:\n" + JSON.stringify(resultado.data, null, 2));
  }

}

return(
  <>
    <div className="container">
        <h1>Registro</h1>
          <form onSubmit={Confirmar} >
            <fieldset className="flex flex-col gap-5">
              <div>
                <label className="mr-4">Nombre:</label>
                <input className="border-2 border-black rounded mx-auto pl-1" type="text" placeholder="Introduce tu nombre" value={nombre} onChange={(e) => {
                  setNombre(e.target.value)
                }}/>
              </div>
              <div>
                <label className="mr-4">Email:</label>
                <input className="border-2 border-black rounded mx-auto pl-1" type="text" placeholder="Introduce tu email" value={email} onChange={(e) => {
                  setEmail(e.target.value)
                }}/>
            </div>
            <div>
              <label className="mr-4">Curso:</label>
            <select className="border-2 border-black rounded mx-auto" onChange={(e) => {
                setCurso(e.target.value)
              }}>
              <option value="">
                Selecciona el curso al que pertenece
              </option>
              <option value="1 DAM" >1 DAM</option>
              <option value="2 DAM" >2 DAM</option>
            </select>
            </div>
            <button type="submit" className="bg-blue-700 text-white rounded w-fit p-1.5 mx-auto cursor-pointer hover:bg-blue-500">Validar y guardar</button>
            </fieldset>
          </form>
    </div>
  </>
)
}

export default App;