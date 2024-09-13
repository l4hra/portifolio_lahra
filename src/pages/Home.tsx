// import BlurIn from "@/components/magicui/blur-in";
import { DockDemo } from "@/components/blocos/dock";
import TimeLine from "@/components/timeline";
// import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
// import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Typewriter from "typewriter-effect";

export default function Home() {
  // const content = [
  //   {
  //     title: "Maratona hack27",
  //     description:
  //       "Em agosto de 2024 fui convidada a participar do maior evento de prototipagem do Espirito Santo. Foram três dias de pura imersão em uma problemática de uma empresa capixaba a Fortes Engenharia. Com uma equipe de 7 pessoas, nós desenvolvemos um protótipo no Figma, montamos um fluxograma para entender a realidade da empresa e planejar a solução, além disso tive a honra de apresentar um pitch de 5 minutos para apresentar nossas ideias.  ",
  //   },
  //   {
  //     title: "Mestre de cerimônia",
  //     description:
  //       "Já em julho fui convidada especialmente pela ex presidente da Findes Cris Samorini para anunciar o novo Senai Porto em Vitória. Um projeto incrível que trara muitos ganhos ao nosso estado. A nova unidade de ensino irá capacitar profissionalmente milhares de pessoas para a industria.",
  //   },
  //   {
  //     title: "Vidas transformadas",
  //     description:
  //       "Outro grande acontecimento em minha vida foi a significativa participação na serie Vidas transformadas da Findes. Ali fui convidada mais uma vez para contar minha historia com a educação, onde comecei aos 17 anos no Senai com meu curso de qualificação web 100% gratuito e exclusivo para mulheres. A partir disso continuei na área de tecnologia, mas dessa vez certa do que queria: Protagonizar junto da tecnologia.",
  //   },
  //   {
  //     title: "Tcc",
  //     description:
  //       "Construir um trabalho de conclusão de curso não está sendo fácil, mas a gratificação de construir algo como diagramas, documentação, casos de uso e desenvolver algo que estará pronto para o mercado é entender que estamos engrandecendo como profissionais. Desenvolver um produto é oque eu e minha equipe esta fazendo no momento, um sistema de gerenciamento de comandas para transformar a forma com que sorveterias self-service controlam suas vendas e lucro.",
  //   },
  // ];

  // const items = [
  //   {
  //     quote: "quote numer um",
  //     name: "name number one",
  //     title: "Lorelorelorelore",
  //   },
  //   {
  //     quote: "quote numer um",
  //     name: "name number one",
  //     title: "Lorelorelorelore",
  //   },
  //   {
  //     quote: "quote numer um",
  //     name: "name number one",
  //     title: "Lorelorelorelore",
  //   },
  // ];
  return (
    <>
      {/* centraliza div */}
      <body className="h-screen justify-center items-center relative flex flex-col">
        <div className="h-96 flex justify-center items-center  flex-col">
          <div className="  text-4xl">
            <Typewriter
              options={{
                strings: [
                  "Olá eu sou a L4hra!",
                  "Você está no meu portfólio ;)",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <TimeLine />
        {/* 
        <div>
          <StickyScroll content={content}></StickyScroll>
        </div> */}
        {/* <div className="flex justify-center items-center">
          <InfiniteMovingCards items={items} />
        </div> */}
        <div className="fixed bottom-2 z-20">
          <DockDemo />
        </div>
      </body>
    </>
  );
}
