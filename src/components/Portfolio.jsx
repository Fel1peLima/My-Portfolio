import React from 'react'
import site from '../assets/portfolio/site.png'
import installNode from '../assets/portfolio/installNode.jpg'
import embreve from '../assets/portfolio/embreve.png'
import sistemacrm from '../assets/portfolio/codemaster.png'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src: site
        },

        {
            id:2,
            src: sistemacrm
        },

        {
            id:3,
            src: embreve
        },

        {
            id:4,
            src: embreve
        },

        {
            id:5,
            src: embreve
        },

        {
            id:6,
            src: embreve
        }
    ]



    return (
        <div
          name="portfolio"
          className="bg-gradient-to-b mb-16 from-black  to-blue-950 w-full text-white md:h-screen"
        >
          <div className="max-w-screen-lg p-4 mx-auto  flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-white">
                Portfolio
              </p>
              <p className="py-6">Confira um pouco do meu trabalho aqui</p>
            </div>
    
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              {portfolios.map(({ id, src }) => (
                <div key={id} className="shadow-md shadow-black rounded-lg">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                  />
                  <div className="flex items-center justify-center">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      Demo
                    </button>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      Code
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    
    export default Portfolio;