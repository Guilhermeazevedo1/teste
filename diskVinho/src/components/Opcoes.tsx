import style from './Opcoes.module.css'
import IconeEntrega from '../assets/IconeEntrega.png'
import IconeMoto from '../assets/IconeMoto.png'
import IconeTaca from '../assets/ImgTaça.png'

function Opcoes() {
    return (
        <div className={style.opcoes}>
            <div className={style.opcoesContainer}>
                <div> 
                    <img src={IconeMoto} alt="" />
                    <p className={style.titulo}>Onde você estiver</p>
                    <p>Levamos até você!</p>
                </div>
                <div>
                    <img src={IconeTaca} alt="" />
                    <p className={style.titulo}>Sua bebida favorita</p>
                    <p>Você pode escolher o vinho favorito <br/>ou buscar novas experiências.</p>
                </div>
                <div>
                    <img src={IconeEntrega} alt="" />
                    <p className={style.titulo}>Facilidade</p>
                    <p>Facilidade para realizar<br/> o seu pedido.</p>
                </div>
            </div>
          
        </div>
    )
}

export default Opcoes