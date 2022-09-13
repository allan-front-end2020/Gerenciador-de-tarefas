import styles from './Select.module.css'

function Select ({text, name, options, handleOnChance, value}){
    return(
        
     <div className={styles.form_control}>
        <div>
         <label htmlFor={name}>{text} :</label>
        </div>
         <select name={name} id={name}>
           <option >Selecione um opção</option>
           {options.map((option) =>(
            <option
            value={option.id}
             key={option.name}
             >
              {option.name}
            </option>
           ))}
         </select>
     </div>
    )
}

export default Select