import banner from '../assets/MaskGroup.png';
import banner2 from '../assets/MaskGroup2.png';
import styles from './Banner.module.css';

function Banner() {
  return (
    <div className={styles.bannerContainer}> 
      <img src={banner} alt="" className={styles.banner} />
      <img src={banner2} alt="" className={styles.banner2} />
    </div>
  );
}

export default Banner;
