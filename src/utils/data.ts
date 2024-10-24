import { JourneyProps, ProjectLayoutProps } from '@/types/global-types';

export const aboutMe = [
  'https://projectImages.unsplash.com/photo-1600071075057-fc3fb218e6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
];

export const projetos: ProjectLayoutProps[] = [
  {
    projectId: 1,
    projectName: 'Agendamento MVP',
    projectTechs: ['Nextjs', 'Typescript', 'TailWindCss', 'MUI', 'dayjs', 'Mobx'],
    projectDescription:
      'Projeto desenvolvido com Nextjs, Typescript, TailWindCss, MUI, dayjs, Mobx, dentre outras tecnologias. O projeto é um MVP de um sistema de agendamento de serviços, onde o cliente pode escolher o serviço, o profissional, a data e o horário. O projeto está em constante atualização, com novas funcionalidades e melhorias no código.',
    projectImage: [
      'https://raw.githubusercontent.com/jeffersondrs/schedule-app/refs/heads/main/public/prints/Prints%20(1).png',
      'https://raw.githubusercontent.com/jeffersondrs/schedule-app/refs/heads/main/public/prints/Prints%20(2).png',
      'https://raw.githubusercontent.com/jeffersondrs/schedule-app/refs/heads/main/public/prints/Prints%20(3).png',
      'https://raw.githubusercontent.com/jeffersondrs/schedule-app/refs/heads/main/public/prints/Prints%20(4).png',
    ],
    projectLink: 'https://github.com/jeffersondrs/schedule-app',
    projectLive: 'https://schedule-day.vercel.app/',
  },
  {
    projectId: 2,
    projectName: 'Web E-commerce',
    projectTechs: ['Nextjs', 'Typescript', 'TailWindCss'],
    projectDescription:
      'Lading Page Criada com React, Vite, Typescript Dependencias: React-router-dom, react-icons, TailWindCss, Styled-Component, Sass, dentre outras que irei adicionando conforme for necessário.',
    projectImage: [
      'https://raw.githubusercontent.com/jeffersondrs/web-ecommerce/main/public/home.png',
      'https://raw.githubusercontent.com/jeffersondrs/web-ecommerce/main/public/products.png',
      'https://raw.githubusercontent.com/jeffersondrs/web-ecommerce/main/public/about.png',
      'https://raw.githubusercontent.com/jeffersondrs/web-ecommerce/main/public/support.png',
    ],
    projectLink: 'https://github.com/jeffersondrs/web-ecommerce',
    projectLive: 'https://web-ecommerce-eta.vercel.app/',
  },
  {
    projectId: 3,
    projectName: 'Blog Pessoal',

    projectDescription:
      'Blog pessoal criado para compartilhar conhecimento e experiências, além de ser um projeto para estudo e prática de tecnologias como Nextjs, TailwindCss, SASS, GraphQL, dentre outras. O projeto está em constante atualização, com novas funcionalidades e melhorias no código.',
    projectTechs: ['TailwindCss', 'Nextjs', 'SASS', 'GraphQL'],

    projectImage: [
      'https://raw.githubusercontent.com/jeffersondrs/MyBlog/main/public/home.png',
      'https://raw.githubusercontent.com/jeffersondrs/MyBlog/main/public//post.png',
    ],
    projectLink: 'https://github.com/jeffersondrs/MyBlog',
    projectLive: 'https://jeffersondrsblog.vercel.app/',
  },
  {
    projectId: 4,
    projectName: 'Barbearia Shop/Blog',
    projectDescription:
      'Projeto desenvolvido para juntar e-commerce, agendamento, contato de clientes, blog e institucional da empresa.',
    projectTechs: ['Nextjs', 'TailwindCss', 'Typescript', 'Daisyui'],
    projectImage: [
      'https://raw.githubusercontent.com/jeffersondrs/barberariablogshop/main/public/barbershopproject.png',
      'https://raw.githubusercontent.com/jeffersondrs/barberariablogshop/main/public/contactbarberproject.png',
      'https://raw.githubusercontent.com/jeffersondrs/barberariablogshop/main/public/blogbarberproject.png',
    ],
    projectLink: 'https://github.com/jeffersondrs/barberariablogshop',
    projectLive: 'https://barberariablogshop.vercel.app/',
  },
  {
    projectId: 5,
    projectName: 'Note Check',

    projectDescription:
      'Projeto desenvolvido com React Native/Expo para gerenciar notas, com opção de adicionar, editar, excluir e marcar como concluída, além de listas de tarefas. Estou contantemente atualizando o projeto, adicionando novas funcionalidades e melhorando o código.',
    projectTechs: ['React Native', 'Expo', 'Typescript', 'Styled-Components'],
    projectImage: [
      'https://play-lh.googleusercontent.com/1ojJx1nyAC91HHZSc152eiQ6KQ9l0GiaDHiTFTxFfN7OcG4vxtvpoq5W9YhU92lirMw=w2560-h1440-rw',
      'https://play-lh.googleusercontent.com/idOzzcD6eCZF-7ix3Eud9qVrFFn3g6PNHrMzk7Af3i6vus6kAInFaAyAI1Ik9k4cMw=w2560-h1440-rw',
      'https://play-lh.googleusercontent.com/IY_YOn7nDJL6mHrqbkaMMnwRbSJl1qlfuAzpnZ_lr_3--Qol_JthKD-ZgL56hoXLsY8=w2560-h1440-rw',
      'https://play-lh.googleusercontent.com/uWS1OolmucywaDbN190_VADNo0DEiv7v2yr-AWlMVL92PLNJry-SiXsDtYocGl_ZXss=w2560-h1440-rw',
      'https://play-lh.googleusercontent.com/wEbMlcBEtdIlDw4_cVDDGeE5ZFYFjdwhGHiSBAr8bHmexRzUUxmWKo0y8wqrBIUnrxE=w2560-h1440-rw',
      'https://play-lh.googleusercontent.com/ifQvyS4sGFKgCTRUJ27yuxtF_KVyhkjbtgUVwLK60dOzDfoBnDe6gdGspwJHYHWkUVg=w2560-h1440-rw',
      'https://play-lh.googleusercontent.com/vwh8nbanH-ac6tRy6U9r7gKcKrKvUzWSp_Phc9ZCksl42jpxPvXCXbxNwxExagnbA2s=w2560-h1440-rw',
      'https://play-lh.googleusercontent.com/0jEWvAzIPnohzZocpK3EzL8vnU_hfHNgvZilbDC6DgW0eNVuY7a4jcjwgFnUXEX5J1im=w2560-h1440-rw',
    ],
    projectLink:
      'https://play.google.com/store/apps/details?id=com.jeffersondrs.tarefascertas',
    projectLive:
      'https://play.google.com/store/apps/details?id=com.jeffersondrs.tarefascertas',
  },
  {
    projectId: 6,
    projectName: 'Agency Tech',

    projectDescription:
      'Projeto desenvolvido com Nextjs, Typescript, TailwindCss, React Hook Form, MongoDB, Nodejs, dentre outras tecnologias. O projeto é um site de uma agência de tecnologia, com opção de cadastro de clientes, serviços, produtos, blog, contato, etc. Atualmente é uma empresa fictícia, mas estou trabalhando para torná-la real.',
    projectTechs: [
      'Nextjs',
      'Nodejs',
      'Typescript',
      'TailwindCss',
      'MongoDb',
      'React Hook Form',
    ],
    projectImage: [
      '/imagens/agencytech-1.png',
      '/imagens/agencytech-2.png',
      '/imagens/agencytech-3.png',
      '/imagens/agencytech-4.png',
    ],
    projectLink: 'https://agency-tech.vercel.app/',
    projectLive: 'https://agency-tech.vercel.app/',
  },
  {
    projectId: 7,
    projectName: 'Analítica',

    projectDescription:
      'Projeto desenvolvido com Nextjs, Typescript, Sass, dentre outras tecnologias. O projeto é um site para um laboratório de produtos de bem estar natural com a opção de envio de receitas e contato. Projeto real para um cliente real. Foi desenvolvido em colaboração com outros desenvolvedores, onde fui um dos responsáveis pelo front-end. As tasks foram divididas em sprints, utilizamos o asana para projetar as tasks e o projeto foi entregue em 2 meses.',
    projectTechs: ['Nextjs', 'Typescript', 'Sass'],
    projectImage: [
      '/projeto6/projeto6 (1).png',
      '/projeto6/projeto6 (2).png',
      '/projeto6/projeto6 (3).png',
      '/projeto6/projeto6 (4).png',
      '/projeto6/projeto6 (5).png',
    ],
    projectLink: 'https://freela-starter.vercel.app/',
    projectLive: 'https://freela-starter.vercel.app/',
  },
];

export const myJourney: JourneyProps[] = [
  {
    date: '2021',
    title: 'Junho de 2021',
    description: `Comecei a estudar programação e a aprender sobre tecnologia. Entrei em um curso técnico de informática para internet do Senac. Tive aulas de HTML, CSS, JavaScript e C#, porém o curso não me dava muitas possibilidades de estágio, então decidi começar um curso superior de tecnologia.`,
    image:
      'https://images.unsplash.com/photo-1701940616810-207c146d384a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    date: '2022',
    title: 'Fevereiro de 2022',
    description: `Ingressei na faculdade de Análise e Desenvolvimento de Sistemas, na Universidade Veiga de Almeida. Comecei a estudar Java, SQL, UML e outras tecnologias. Fiz um estágio no Ministério Público do Trabalho (MPT). Foi uma experiência incrível, onde pude aprender muito sobre desenvolvimento de sistemas e sobre o funcionamento do MPT. Nessa mesma época, comecei a estudar Javascript e depois de dominar o básico, comecei a estudar React.`,
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    date: '2022',
    title: 'Ainda em 2022',
    description: `Já estudando Javascript e React, comecei a fazer projetos pessoais e a estudar sobre desenvolvimento web. Fiz um curso de React, onde aprendi sobre Condescription API, Redux, Redux Saga, Redux Thunk, Hooks e muito mais. Fiz um projeto de um blog pessoal, onde pude aplicar tudo que aprendi no curso. Foi uma experiência incrível, onde pude aprender muito sobre desenvolvimento web e sobre React. E com isso, meus estudos de nodejs e expressjs começaram.`,
    image:
      'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    date: '2023',
    title: 'No ano de 2023',
    description: `Comecei a estudar NodeJS e ExpressJS, fiz vários cursos na Udemy, Rocketseat, Alura entre outros. Fiz um projeto de um e-commerce, onde pude aplicar tudo que aprendi nos cursos. Foi uma experiência incrível, onde pude aprender muito sobre desenvolvimento web e sobre NodeJS e ExpressJS. E com isso, meus estudos de MongoDB começaram. Nesse mesmo ano, comecei a estudar sobre Docker, Kubernetes e Jenkins, onde pude aprender sobre CI/CD e sobre deploy de aplicações em containers. E estava me faltando algo para completar minha stack, então comecei a estudar sobre React native e Typescript. O que me ajudou a evoluir muito, com esses estudos também vieram mais aprofundamento em TDD, DDD, SOLID e Clean Code. React native me caiu como uma luva, por ter a experiência com React, foi muito fácil de aprender e aplicar. Hoje domino Expo e deploy de aplicações mobile.`,
    image:
      'https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    date: '2024',
    title: 'Até aqui!',
    description: `Hoje sou um desenvolvedor fullstack, com experiência em React, React Native, NodeJS, ExpressJS, MongoDB, Docker, Kubernetes, Typescript, TDD, DDD, MVC, MVP, SOLID e Clean Code. Estou sempre estudando e me aprimorando, para me tornar um desenvolvedor cada vez melhor. Tenho inglês avançado e estou sempre estudando para melhorar meu inglês. E estou sempre em busca de novos desafios e de novas oportunidades.`,
    image:
      'https://images.unsplash.com/photo-1623460445304-4db6c271ef62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];
