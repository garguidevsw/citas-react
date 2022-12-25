
const Alerta = ({ mensaje, tipo }) => {
  return (
    <>
        <div className={`${ tipo == 'error' ? 'bg-red-600' : 'bg-green-600'} text-white w-full py-1 text-center font-light rounded-md mb-4`}>
              <p>{ mensaje }</p>
        </div>
    </>
  )
}

export default Alerta