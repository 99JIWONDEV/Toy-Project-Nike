const ServicesCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 border border-solid border-red-600  ">
      <div className="w-11 h-11 flex justify-center items-center rounded-full bg-coral-red "> 
        <img src={imgURL} width={24} height={24} />
      </div>
      <h2 className=" font-palanquin mt-5 font-bold text-3xl leading-normal">{label}</h2>
      <p className=" font-montserrat text-slate-gray mt-3 text-lg leading-normal">{subtext}</p>
    </div>
  );
};

export default ServicesCard;
