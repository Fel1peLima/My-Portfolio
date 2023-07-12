import React from 'react'
import site from '../assets/portfolio/ThumbSitedeNoticia.png'
import montyhall from '../assets/portfolio/MontyHallthumb.png'
import api from '../assets/portfolio/ThumbAPI.png'
import socket from '../assets/portfolio/socket-iothumb.png'
import calculadora from '../assets/portfolio/CalculadoraApp.png'
import sistemacrm from '../assets/portfolio/codemaster.png'


const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src: site,
            link: 'https://github.com/Fel1peLima/League-Cenario-News'
        },

        {
            id:2,
            src: sistemacrm,
            link: 'https://felipelima-portfolio.netlify.app'
        },

        {
            id:3,
            src: montyhall,
            link: 'https://github.com/Fel1peLima/MontyHall-Problem'
        },

        {
            id:4,
            src: calculadora,
            link: 'https://github.com/Fel1peLima/Calculadora-vue'
        },

        {
            id:5,
            src: socket,
            link: 'https://github.com/Fel1peLima/Socket-Chat'
        },

        {
            id:6,
            src: api,
            link: 'https://github.com/Fel1peLima/Mini_E-Commerce'
        }
    ]



    return (
        <div
          name="portfolio"
          className="bg-gradient-to-b  from-black  to-blue-950 w-full text-white md:h-screen"
        >
          <div className="max-w-screen-lg p-4 mx-auto  flex flex-col justify-center w-full h-full">
            <div className="pb-8 mt-80">
              <p className="text-4xl font-bold inline border-b-4 border-white">
                Portfolio
              </p>
              <p className="py-6">Confira um pouco do meu trabalho aqui</p>
            </div>
    
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              {portfolios.map(({ id, src, link}) => (
                <div key={id} className="shadow-md shadow-black rounded-lg">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                  />
                  <div className="flex items-center justify-center">
                    
                    <a href={link} className="w-1/2 px-14 py-3 m-4 duration-200 hover:scale-105">
                      Code
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    
    export default Portfolio;