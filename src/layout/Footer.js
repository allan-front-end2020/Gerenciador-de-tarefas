import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';


import styles from './Footer.module.css'


function Footer(){

    return(
    <footer className={styles.footer}>
        <ul className={styles.socialList}>
            <li ><FaFacebook /></li>
            <li><FaInstagram /></li>
            <li><FaLinkedin />  </li>
            <p>
                <span>Tavares-Tech</span>&copy; 2021
            </p>
        </ul>

    </footer>
    )

}
export default Footer