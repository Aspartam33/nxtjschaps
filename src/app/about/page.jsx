import Image from 'next/image'
import styles from './about.module.css'
const AboutPage = () =>{
   // console.log("lets check where it works")
    return(
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>Sobre nosotros</h2>
                <h1 className={styles.title}> Expertos en ciberseguridad, e-Commerce y redes, para guiar a corporaciones hacia una inversión controlada y escalable</h1>
                <p className={styles.description}>Somos una empresa de consultoría en tecnología informática, especializada en ciberseguridad y 
                    desarrollo de medios comunicacionales empresariales. Contamos con productos certificados de calidad, estamos en España, Chile, Venezuela.</p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>10+</h1>
                        <p>Años de experiencia</p>
                    </div>
                    <div className={styles.box}>
                    <h1>10+</h1>
                    <p>Años de experiencia</p>
                    </div>
                    <div className={styles.box}>
                    <h1>10+</h1>
                    <p>Años de experiencia</p>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/about.png" className={styles.img}fill/>
            </div>
        </div>
    )
        
}

export default AboutPage