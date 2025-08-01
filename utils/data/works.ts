import azionImg from "~/assets/images/azion.png";
import wegoutImg from "~/assets/images/wegoout.png";
import timesheetImg from "~/assets/images/timesheet.png";

export const works = [
  {
    title: "We Go Out",
    desc: "Um portal criado a partir da paixão por festas, festivais de música e viagens. Integrando eventos com artistas, noticias e novos lançamentos, tudo no mesmo lugar.",
    image: wegoutImg,
    tech: "O projeto foi desenvolvido com Nuxt 3 e API com Laravel, com busca usando Google Maps. O projeto tambem possui a arquitetura AMP e Open Graph.",
    link: "https://wegoout.com.br/",
    tags: [
      "Vue 3",
      "Nuxt 3",
      "Laravel API",
      "Google Maps",
      "AMP",
      "Open Graph",
    ],
  },
  {
    title: "Timesheet",
    desc: "Plataforma de gerenciamento de tarefas entre clientes e squads.",
    image: timesheetImg,
    tech: "Desenvolvido com Nuxt 2 e API em Laravel. Projeto possui um nivel alto de regras de negócio, precisando que ter muita experiência em desenvolvimento para seu funcionamento, é um dos projetos que mais me desafiou e que tenho muito orgulho.",
    link: "https://bbsk-timesheet.com.br/",
    tags: [
      "Vue 2",
      "Nuxt 2",
      "Laravel API",
      "Sistema de Calendário",
      "Permissões de Usuário",
    ],
  },
  {
    title: "Azion Console",
    desc: "Plataforma de gerenciamento das soluções da Azion.",
    image: azionImg,
    tech: "Projeto construído usando SPA em Vue 3. O projeto demandou alto conhecimento na tecnologia NodeJS e NPM, junto com Github Actions e Docker. E pra integrar vários times o uso do Module Federation e Monorepo.",
    link: "https://console.azion.com/",
    tags: [
      "Vue 3",
      "SPA",
      "Module Federation",
      "Design System",
      "Tailwind CSS",
      "Lerna",
    ],
  },
];
