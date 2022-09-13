 import { useEffect, useState } from 'react'
 
 import styles from './ProjectForm.module.css'
 import Input from '../componentes/form/Input'
 import Select from '../componentes/form/Select'
 import Submit from '../componentes/form/Submit'


 
function ProjectForm ({btnText}) {
    const [categories, setCategories] =useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/categories',{
            method: 'GET' ,
            headers :{
                'Content-Type' : 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
    },[])

 

    return(
        <form className={styles.form}>
          <Input 
          type='text'
          text='Nome do projeto'
          name='bugget'
          placeholder='Digite o nome do projeto'
           />

       
          <Input 
          type='number'
          text='Orçamento do projeto'
          name='bugget'
          placeholder='Insira o orçamento do projeto'
           />

          <Select  
          name='category_id' 
          text='Selecione uma categoria'
          options={categories}
           />

        <Submit text={btnText} />
 </form>
    )

}
export default ProjectForm