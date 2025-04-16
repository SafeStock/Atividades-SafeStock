export function Button() {

  const DescerTela = () => {
    window.scrollTo({
        top: 2250,
        behavior: 'smooth',
    });
};

    return (
      <button onClick={DescerTela} className="p-[2.5vh] w-[90%] text-[3.5vh] p-[1vh] bg-[#5390e7] text-white rounded border-2 rounded-[1.5vh] mt-[1.5vh]
      border-transparent hover:bg-[#fff] hover:text-[#5390e7] hover:border-[#5390e7] transition-all duration-300">
        Agendar Consulta
      </button>
    );
  }
  