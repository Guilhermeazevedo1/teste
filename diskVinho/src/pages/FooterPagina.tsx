import styles from './Footer.module.css';
import diskVinhoFooter from '../assets/DiskVinhoFooter.png'
import iconeInsta from '../assets/IconeInstagram.png'
import iconeFace from '../assets/IconeFacebook.png'
import iconeTwitter from '../assets/IconeTwitter.png'
import iconeLinkedin from '../assets/IconeLikedin.png'
import googlePlayBranco from '../assets/GooglePlayWhite.png'
import appleStoreBranco from '../assets/AppleStoreWhite.png'

function Footer(){
    return(
        <div className={styles.footerContainer}>
            <div className={styles.redesSociais}>
                <img src={diskVinhoFooter} alt="" className={styles.diskVinhoFooter}/>
                <div className={styles.redes}>
                    <img src={iconeInsta} alt="" />
                    <img src={iconeFace} alt="" />
                    <img src={iconeTwitter} alt="" />
                    <img src={iconeLinkedin} alt="" />
                </div>
            </div>
            <div className={styles.localizacao}>
                <p className={styles.titulo1}><b>Localização</b></p>
                <p>Recife</p>
                <p>São Paulo</p>
                <p>Natal</p>
                <p>Fortaleza</p>
                <p>Rio de Janeiro</p>
            </div>
            <div className={styles.informacoes}>
                <p className={styles.titulo2}><b>Serviços</b></p>
                <p>Fast Delivery</p>
                <p>Privacy Policy</p>
                <p>Accessibility</p>
                <p>Contact Us</p>
                <p>About Us</p>
            </div>    
                    
                
            <div className={styles.loja}>
                <img src={googlePlayBranco} alt="" />
                <img src={appleStoreBranco} alt="" />
            </div>
        </div>
    )
}

export default Footer