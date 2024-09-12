import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Typewriter from "typewriter-effect";

export default function Home() {
  const content = [
    {
      title: "Lorelorelorelore",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Lorelorelorelore",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Lorelorelorelore",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
  ];

  return (
    <>
      {/* centraliza div */}
      <div className="h-80 w-screen bg-black flex justify-center items-center gap-5 flex-col text-white">
        <div className="text-4xl">
          <Typewriter
            options={{
              strings: ["Olá eu sou a L4hra!", "Você está no meu portfólio ;)"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className="">Frase de efeito/resuminho</p>
        <p className="">continuação/conclusão</p>
        <p className="">continuação/conclusão</p>
        <p>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
        <p>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
        
      </div>
      <div>
        <StickyScroll content={content}></StickyScroll>
      </div>
    </>
  );
}
