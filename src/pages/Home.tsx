import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
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

  const items = [
    {
      quote: 'quote numer um',
      name: 'name number one',
      title: 'Lorelorelorelore',
    },
    {
      quote: 'quote numer um',
      name: 'name number one',
      title: 'Lorelorelorelore',
    },
    {
      quote: 'quote numer um',
      name: 'name number one',
      title: 'Lorelorelorelore',
    }
  ]
  return (
    <>
      {/* centraliza div */}
      <body className="w-screen h-screen bg-black ">
    
      <div className=" flex justify-center items-center gap-5 flex-col text-white ">
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
        
      </div>
      <div>
        <StickyScroll content={content}></StickyScroll>
      </div>
      <div className=" flex justify-center items-center mt-16">
       <InfiniteMovingCards items={items}/>
      </div>
      </body>
    </>
  );
}
