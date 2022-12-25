const Paciente = ({ paciente, setPaciente, deletePaciente }) => {
  const { id, mascota, propietario, email, ingreso, sintomas } = paciente;

  const handleDelete = () => {
    const resp = confirm('¿Deseas eliminar el registro?')
    if(resp) deletePaciente(id)
  }
  
  return (
    <>
      <div className="mx-3 mb-3 px-5 py-10 bg-white rounded-lg shadow-md ">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Mascota: {""}{" "}
          <span className="font-normal normal-case">{mascota}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: {""}{" "}
          <span className="font-normal normal-case">{propietario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {""} <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Ingreso: {""}{" "}
          <span className="font-normal normal-case">{ingreso}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Síntomas: {""}{" "}
          <span className="font-normal normal-case">{sintomas}</span>
        </p>

        <div className="flex justify-end">
          <button 
            className="bg-yellow-500 text-white px-10 py-2 hover:bg-yellow-600 cursor-pointer rounded-md mr-4 uppercase transition-all"
            onClick={ () => setPaciente(paciente) }>
            Editar
          </button>
          <button 
            className="bg-red-500 text-white px-10 py-2 hover:bg-red-600 cursor-pointer rounded-md mr-4 uppercase transition-all"
            onClick={handleDelete}
          >
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
};

export default Paciente;
