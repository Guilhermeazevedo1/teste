import style from './BaixarApp.module.css'
import ImgMapa from '../assets/ImgMapa.png'
import RetanguloTransparente from '../assets/RetaguloTransparente.png'
import Phone from '../assets/Phone.png'
import GooglePlay from '../assets/GooglePlay.png'
import AppleStore from '../assets/AppleStore.png'

function BaixarApp(){
    return(
        <div className={style.container}>
            <div className={style.mapaContainer}>
                <div className={style.imgMapa}>
                <img src={ImgMapa} alt="" />
                <div className={style.retanguloTransparente}>
                <img src={RetanguloTransparente} alt="" />
                <p className={style.paragrafoCentralizado}>Cidades que atendemos</p>
                </div>
                </div>
            </div>
            <div className={style.baixarApp}>
                <div className={style.phone}>
                    <img src={Phone} alt="" />
                </div>
                <div className={style.fraseLoja}>
                    <h1>Já Baixou o App?</h1>
                    <p>Entregamos onde você estiver, através de nosso parceiro mais próximo.</p>
                    <div className={style.loja}>
                        <div className={style.tamanhoImg}>
                            <img src={GooglePlay} alt="" />
                        </div>
                        <div className={style.tamanhoImg}>
                            <img src={AppleStore} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default BaixarApp