import style from './CategoriaVinho.module.css'
import ImgEspumante from '../assets/ImgEspumante.png'
import ImgVinhoBranco from '../assets/ImgVinhoBranco.png'
import ImgVinhoTinto from '../assets/ImgVinhoTinto.png'
import ImgVinhoRose from '../assets/ImgVinhoRose.png'

function CategoriaVinho(){
    return(
        <div className={style.categoriaConteiner}>
            <div className={style.categoriaItem}>
                <h3>Branco</h3>
                <img src={ImgVinhoBranco} alt="" />
            </div>
            <div className={style.categoriaItem}>
                <h3>Tinto</h3>
                <img src={ImgVinhoTinto} alt="" />
            </div>
            <div className={style.categoriaItem}>
                <h3>Rose</h3>
                <img src={ImgVinhoRose} alt="" />
            </div>
            <div className={style.categoriaItem}>
                <h3>Espumante</h3>
                <img src={ImgEspumante} alt="" />
            </div>
        </div>
    )
}

export default CategoriaVinho