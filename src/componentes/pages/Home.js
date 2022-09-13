import styles from "./Home.module.css"
import Sifrao from "../../img/sifrao.png"
import LinkButton from "../../layout/LinkButton"


function Home(){

return(
    <section className={styles.home_container} >
    <h1>Bem-vindo ao <span>Gerenciamendor de projetos </span></h1>
    <p>Começe a genenciar seus projetos agora mesmo</p>
    <LinkButton  to='/NewProject' text='Criar Projeto' />
      <img src={Sifrao} alt='sifrao' />
  </section>


)
}


export default Home