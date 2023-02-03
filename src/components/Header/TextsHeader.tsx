import Image from "next/image";
import IconArrow from "../../assets/icons/icon-arrow-down.svg";
export const TextsHeader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-3/4 ">
      <span className=" text-100 text-center">Educação é um tesouro</span>
      <h1 className=" pt-5 pb-6 text-500 text-center">Top sistema de ensino</h1>
      <p className="text-200 text-center ">
        Educação é o passaporte para o futuro, pois o amanhã pertence aqueles
        que o preparam hoje.
      </p>

      <a href="https://api.whatsapp.com/send/?phone=5583999117156&app_absent=0" 
        className="bg-black-dark text-white text-center text-300 font-semibold flex items-center justify-center max-w-[237px] w-full h-[51px] rounded-[5px] mt-[123px] lg:mt-[103px]">
        Inscreva-se
      </a>
      <div className="absolute bottom-9">
        <Image src={IconArrow} alt="arrow donw" />
      </div>
    </div>
  );
};
