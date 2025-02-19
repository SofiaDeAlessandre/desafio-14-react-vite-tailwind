
const UserCard = ({ nombre, edad , profesion}) => {
  return (
    <div className="flex justify-center content-center items-center">
    <div className="italic font-sans font-bold rounded-2xl border-gray-800 bg-cyan-500 mt-10 text-white p-20 space-y-14">
    <h1 className="text-xl">Nombre y apellido: {nombre}</h1>
    <h2>Edad: {edad}</h2>
    <h2>Profesion: {profesion}</h2>
    </div>
    </div>
  )
}

export default UserCard