import {Link} from 'react-router-dom'

import Container from './Container'

 import Logo from '../img/logo.png'



import styles from './Navbar.module.css'



function NavBar (){
    return(
       <nav class={styles.navbar}>
         <Container>
         <ul className={styles.list}>
          <li className={styles.item}>
              <Link to='/' >
                <img src={Logo} alt='logo da empresa' className={styles.img} />
              </Link>
           </li>


            <li class={styles.item}>
              <Link to='/'>Home</Link>
           </li>

             
          <li className={styles.item}>
              <Link to='/contact'>Contato</Link>
            </li> 
            <li className={styles.item}>
              <Link to='/company'>Empresa</Link>
           </li>
           <li className={styles.item}>
              <Link to='/contact'>Cpontato</Link>
           </li>
           </ul>  
          
         </Container>
       </nav>
    )
}


export default NavBar 