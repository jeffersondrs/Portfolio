import {ProjectLayoutProps} from '@/types/global-types';

export const projectImages = [
  'https://projectImages.unsplash.com/photo-1540273777513-7c4973aa2cd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  'https://projectImages.unsplash.com/photo-1687274999959-dd29003bfa17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  'https://projectImages.unsplash.com/photo-1687800132770-8f1600a5849e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80',
  'https://projectImages.unsplash.com/photo-1687709834461-85009675e422?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
  'https://projectImages.unsplash.com/photo-1687507318101-225772a6e2aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  'https://projectImages.unsplash.com/photo-1687507593516-abd148e0bac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
];
export const aboutMe = [
  'https://projectImages.unsplash.com/photo-1600071075057-fc3fb218e6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
];

export const projetos: ProjectLayoutProps[] = [
  {
  projectId:1,
    projectName: 'Web Ecommerce',
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
  projectId:2,
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
  projectId:3,
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
  projectId:4,
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
    projectLink: 'https://play.google.com/store/apps/details?id=com.jeffersondrs.tarefascertas',
    projectLive: 'https://play.google.com/store/apps/details?id=com.jeffersondrs.tarefascertas',
  },
  {
  projectId:5,
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
  },{
  projectId:6,
    projectName: 'Analítica',

    projectDescription:
      'Projeto desenvolvido com Nextjs, Typescript, Sass, dentre outras tecnologias. O projeto é um site para um laboratório de produtos de bem estar natural com a opção de envio de receitas e contato. Projeto real para um cliente real. Foi desenvolvido em colaboração com outros desenvolvedores, onde fui um dos responsáveis pelo front-end. As tasks foram divididas em sprints, utilizamos o asana para projetar as tasks e o projeto foi entregue em 2 meses.',
    projectTechs: [
      'Nextjs',
      'Typescript',
      'Sass',
    ],
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
