import KeyboardImg from "@/assets/images/keyboard2.jpg";
import TaigaImg from "@/assets/images/taiga.png";
import HatImg from "@/assets/images/hat.jpg";
import Blogpin from "@/assets/images/blog2.jpg";
import Gamepin from "@/assets/images/gamepin.jpg";
import Penpin from "@/assets/images/penpin.jpg";
import Github from "@/assets/images/github.png";

export const SITE_LINKS = [
  {
    title: "Minha Carreira",
    image: KeyboardImg,
    link: "/carreira",
  },
  {
    title: "Print Magias",
    image: HatImg,
    link: "/print-magias",
  },
  {
    title: "Blog",
    image: Blogpin,
    link: "/blog",
  },
  {
    title: "Pens",
    image: Penpin,
    link: "/pens",
  },
  {
    title: "Jogos Digitais",
    image: Gamepin,
    link: "/jogos-digitais",
  },
  {
    title: "Taiga Livraria",
    image: TaigaImg,
    link: "https://taigalivraria.com.br",
    target: "_blank",
  },
  {
    title: "Github",
    image: Github,
    style: "background-color: #4d2a7e",
    link: "https://github.com/dbasilioesp",
    target: "_blank",
  },
];
