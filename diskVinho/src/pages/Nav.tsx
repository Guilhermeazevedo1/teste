import styles from './Nav.module.css'
import Logo from '../assets/Frame.png'
function Nav(){
    return (
        <div className={styles.navBar}>
            <div className={styles.logo}>
                <img src={Logo} alt="" className={styles.icone} />
                <h3>diskvinho.</h3>
            </div>
            <div className={styles.loginNav}>
                <button className={styles.login}>Login</button>
            </div>
        </div>
    )
}

export default Nav