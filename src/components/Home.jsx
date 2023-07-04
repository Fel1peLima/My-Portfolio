import React from 'react'
import Minhaimg from"../assets/minha-foto.jpg"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import {Link} from "react-scroll";

const Home = () => {
  return (
    <div name="home"
    className="h-screen w-full bg-gradient-to-b from-black via-black to-blue-950"
    >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center
        justify-center h-full px-4 md:flex-row">
            <div className=" mt-9 flex flex-col justify-center h-full  bg-gradient-to-r from-blue-500 to-purple-900 text-transparent bg-clip-text">
                <h2 className=" text-4xl sm:text-7xl font-bold ">
                    Desenvolvedor Front-End</h2>
                    <p className="text-gray-300 py-4 max-w-md">
                    Sou um Desenvolvedor Front-End apaixonado por criar experiência digitais. Com uma sólida formação em desenvolvimento web e uma paixão por design, tenho trabalhando incansavelmente e mater-me atualizado com as últimas tendências e tecnologias.

                    </p>
                    <div>
                        <Link to="portfolio"
                        smooth
                        duration={500}
                        offset={150}
                        className="group text-white w-fit px-6 py-3 my-2 flex
                        items-center rounded-md bg-gradient-to-r from-blue-700
                        to-blue-950 cursor-pointer">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </Link>
                    </div>
            </div>
            <div>
                <img src={Minhaimg} alt="meu perfil" 
                className="ml-5 rounded-2xl mx-auto w-2/3 md:w-full  " />
            </div>
        </div>
    </div>
  )
}

export default Home