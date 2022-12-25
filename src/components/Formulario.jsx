import { useState, useEffect } from 'react'
import Alerta from './Alerta'

const Formulario = (props) => {

  const [ mascota, setMascota ] = useState('')
  const [ propietario, setPropietario ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ ingreso, setIngreso ] = useState('')
  const [ sintomas, setSintomas ] = useState('')

  const [ editar, setEditar ] = useState(false)

  const [ error, setError] = useState(false)

  const { pacientes, setPacientes, paciente, setPaciente } = props

  useEffect( () => {
    if( Object.keys(paciente).length > 0 ){
      setMascota(paciente.mascota)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setIngreso(paciente.ingreso)
      setSintomas(paciente.sintomas)

      setEditar(true)
    }
  }, [paciente])


  const generarId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // Validación del formulario
    if([ mascota, propietario, email, ingreso, sintomas ].includes('')) {
      setError(true)
      return;
    } 

    setError(false)

    const objPaciente = {
      mascota,
      propietario,
      email,
      ingreso,
      sintomas
    }

    if(editar){
      const pxsEditados = pacientes.map( px => {
        if(px.id === paciente.id){
          return {
            id: px.id,
            ...objPaciente
          }
        }else{
          return px
        }
      })

      setPacientes(pxsEditados)
    }else{
      objPaciente.id = generarId()
      setPacientes([ ...pacientes, objPaciente ])
    }


    // Resetear state y formulario
    setMascota('')
    setPropietario('')
    setEmail('')
    setIngreso('')
    setSintomas('')
    setPaciente({})
    setEditar(false)

    
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

        <p className="text-lg mt-5 text-center mb-10">
          Añade Pacientes y {''}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>
        <form onSubmit={ handleSubmit } className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-3">
          { error && <Alerta mensaje='Todos los campos son obligatorios' tipo='error' />}
          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
            <input id="mascota" 
              value={mascota} 
              onChange={ (e) => setMascota(e.target.value) } className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre de la mascota" />
          </div>

          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre propietario</label>
            <input id="propietario" 
              value={propietario} 
              onChange={ (e) => setPropietario(e.target.value) }
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre del propietario" />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Correo Electrónico</label>
            <input id="email" 
              value={email} 
              onChange={ (e) => setEmail(e.target.value) }className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="email" placeholder="Correo Electrónico" />
          </div>

          <div className="mb-5">
            <label htmlFor="ingreso" className="block text-gray-700 uppercase font-bold">Fecha de ingreso</label>
            <input id="ingreso" 
              value={ingreso} 
              onChange={ (e) => setIngreso(e.target.value) } className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="date" />
          </div>

          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Síntomas</label>
            <textarea id="sintomas" 
              value={sintomas} 
              onChange={ (e) => setSintomas(e.target.value) } className="border-2 rounded-md w-full h-24 p-2 mt-2" placeholder="Describe los Síntomas" />
          </div>

          <input className="bg-indigo-600 text-white py-2 w-full rounded-md uppercase hover:bg-indigo-700 font-bold cursor-pointer transition-all" type="submit" value={ editar ? "Editar paciente" : "Agregar Paciente"} />
          
        </form>
    </div>
  )
}

export default Formulario