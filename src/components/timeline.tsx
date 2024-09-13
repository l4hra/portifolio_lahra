import Check from "@/assets/check-circle.svg";
import Work from "@/assets/pasta-em-branco.svg";
import Study from "@/assets/estudante.svg";

export default function TimeLine() {
  return (
    <>
      <div className="w-6 gap-8 flex flex-col items-center">
        <div className="flex gap-1">
          <img src={Check} width="35px" />
          <p className="bg-slate-500 pl-5">aqui sera algo</p>
        </div>
        <div className="w-1 bg-white h-24"></div>
        <img src={Work} />
        <div className="w-1 bg-white h-24"></div>

        <img src={Study} />
      </div>
    </>
  );
}
