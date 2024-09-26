const section = document.querySelector("section");

const courses = [
  {
    id: 0,
    title: "Frontend HTML CSS JS",
    img: "https://img-c.udemycdn.com/course/750x422/1616938_8f0b_3.jpg",
    desc: "Webdesign Front-end Fundamentos: HTML, CSS, Lógica de programação e Javascript.",
    price: "199,99",
  },
  {
    id: 1,
    title: "React Native: Desenvolva APPs",
    img: "https://img-c.udemycdn.com/course/750x422/1805784_0fa0.jpg",
    desc: "Aprenda os fundamentos de React Native, boas práticas e construa várias aplicações nativas para Android e iOS usando JS!",
    price: "259,99",
  },
  {
    id: 2,
    title: "Curso React + Redux",
    img: "https://img-c.udemycdn.com/course/750x422/1076168_b0b9_2.jpg",
    desc: " Aprenda React Js, Redux, Webpack, Redux-Form, MongoDB, Express, Node e Vários exercícios práticos e Duas Apps do ZERO!",
    price: "239,99",
  },
  {
    id: 3,
    title: "React.Js e Next.Js",
    img: "https://img-c.udemycdn.com/course/750x422/3839636_0a4e.jpg",
    desc: " Aprenda <strong>ReactJS</strong>, NextJS, Styled-Components, Testes com Jest , Storybook, Strapi, HTML e CSS com TypeScript e JavaScript.",
    price: "289,99",
  },
];

function render() {
  section.innerHTML = "";
  courses.forEach((course) => {
    section.innerHTML += `
      <article class="flex flex-col w-72 bg-zinc-900 cursor-pointer transition-all hover:scale-105 hover:bg-zinc-800 rounded-md text-white">
        <div class="relative w-76 h-52">
          <img src=${course.img} alt="" class="w-full h-full object-cover rounded-t-md" />
        </div>
        <div class="flex-1 flex flex-col gap-4 p-5">
          <h2 class="text-xl font-bold">${course.title}</h2>
          <p class="flex-1 text-sm text-zinc-400">${course.desc}</p>
          <div class="flex justify-between items-center">
            <span class="text-lg font-semibold">R$ ${course.price}</span>
            <button class="border rounded-full px-5 py-1 text-sm bg-green-700 hover:bg-green-600 active:bg-green-800">Adicionar</button>
          </div>
        </div>
      </article>
    `;
  });
}

render();
