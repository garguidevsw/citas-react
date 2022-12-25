import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, deletePaciente, setPaciente }) => {


  return (
    <div className="md:w-1/2 lg:w-3/5">

      { pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

          <p className="text-xl mt-5 mb-10 text-center">Administra tus {''} <span className="text-indigo-600 font-bold">Pacientes y Citas</span></p>

          <div className="md:h-screen md:overflow-y-scroll">
            { pacientes.map( (paciente) => ( 
              <Paciente 
                key={ paciente.id } 
                paciente={ paciente } 
                setPaciente={ setPaciente }
                deletePaciente={deletePaciente}
              /> ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>

          <p className="text-xl mt-5 mb-10 text-center">Agrega tu primer paciente para iniciar con {''} <span className="text-indigo-600 font-bold">tu historial</span></p>
        </>
      ) }
    </div>
  )
}

export default ListadoPacientes