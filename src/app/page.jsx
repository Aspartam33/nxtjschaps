import ErrorComp from "./error";
import sty from "./home.module.css"
import Image from 'next/image'
const Home = () =>{
  //throw new ErrorComp("Error en home")
  return( <div className={sty.container}>
    <div className={sty.textContainer}>
      <h1 className={sty.title}>Creative thoughts agency</h1>
      <p className={sty.description}>Somos una empresa de consultoría en tecnología informática. 
        Ayudamos a los clientes a solucionar sus problemas. 
        Los tipos de obstáculos que requieren las capacidades únicas de nuestro equipo de profesionales.</p>
      <div className={sty.buttons}>
        <button className={sty.button}>Ver más</button>
        <button className={sty.button}>Contáctanos</button>
      </div>
      <div className={sty.brands}>
        <Image src="/brands.png" alt="" fill className="sty.brandImg"/>
      </div>
    </div>
    
    <div className={sty.imgContainer}>
    <Image src="/hero.gif" alt="" fill className="sty.heroImg"/>
    </div>
  </div>

  )
}

export default Home;