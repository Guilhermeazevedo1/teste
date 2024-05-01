import styles from "./Home.module.css"
import ImagemVinho from '../assets/VinhoBanner.png'

function Home(){
    return(
        
        <div className={styles.conteudoBanner}>
            <div className={styles.texto}>
                <h1>Viva Novas Experiências.</h1>
                <p>Descubra novos sabores e aromas com <br/> nossa seleção de vinhos.</p>
                <form>
                <input type="text" placeholder="Em qual endereço você está?" />
                <button type="button">Buscar</button>
                </form>
            </div>
            <div>
                <img src={ImagemVinho} alt="" className={styles.img} />
            </div>
        </div>
    )
}

export default Home
