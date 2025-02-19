const UserCard = ({ name, age, profession }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="italic font-sans font-bold rounded-2xl border border-gray-800 bg-cyan-500 mt-10 text-white p-20 space-y-14">
        <h1 className="text-xl">Nombre y apellido: {name}</h1>
        <h2>Edad: {age}</h2>
        <h2>Profesion: {profession}</h2>
      </div>
    </div>
  );
};

export default UserCard;
