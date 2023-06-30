import React from 'react'

const About = () => {
  return (
    <div name="sobre"
    className="w-full h-screen bg-gradient-to-b from-blue-950 to-black text-white"
    >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
        w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-white">
                    Sobre Mim
                </p>
            </div>
            <p className="text-xl mt-20">
            Olá meu nome é Felipe Batista de Lima! Sou um desenvolvedor front-end apaixonado pelo desenvolvimento web e design, tenho um grande conhecimento em HTML, CSS, JavaScript e tecnologias em NodeJS, ReactJS, MongoDB, MySQL e WordPress, sempre buscando conhecimento para melhorar a cada dia.
            </p>
            <br />
            <p className="text-xl">
            Com sólidos conhecimentos em HTML, CSS e JavaScript, estou bem equipado para transformar conceitos de design em interfaces web visualmente atraentes e intuitivas. Tenho experiência no desenvolvimento responsivo, garantindo que meus projetos sejam acessíveis e funcionem perfeitamente em diferentes dispositivos e tamanhos de tela.
            </p>
            <br />
            <p className="text-xl">
            <p className="text-xl">
            Se você procura um desenvolvedor front-end comprometido, motivado e apaixonado, estou pronto para 
            colaborar em projetos empolgantes. Sinta-se à vontade para explorar meu portfólio e entrar em contato 
            comigo para discutir como podemos trabalhar juntos para alcançar seus objetivos.
            </p>
            </p>
        </div>
    </div>
  )
}

export default About