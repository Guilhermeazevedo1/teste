import banner from '../assets/MaskGroup.png';
import banner2 from '../assets/MaskGroup2.png';
import styles from './BannerFooter.module.css';

function BannerFooter() {
  return (
    <div className={styles.bannerFooterContainer}> 
      <img src={banner} alt="" className={styles.bannerFooter} />
      <img src={banner2} alt="" className={styles.bannerFooter2} />
    </div>
  );
}

export default BannerFooter;
