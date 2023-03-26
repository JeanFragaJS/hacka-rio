import React, {useState} from 'react';
import useFormState from '../hooks/useFormState';
import injectSheet from 'react-jss';
import styles from '../style/CreateUserAndEvent'

// import api from '../services/api';
// import {useHistory} from 'react-router-dom';

 function CreateEvent (props) {

    const {classes} = props;

    const [name, setName] = useFormState('');
    const [local, setLocal] = useFormState('');
    const [date, setDate] = useFormState('');
  
    async function handleSubmit(event) {
      event.preventDefault();

      const data = {name, local, date};   
      

      let message;
      const fields = ['name', 'local', 'date'];
      for (let field of fields) {
        if (!data[field] || data[field] === 'Teste') {
         message = `O campo ${field} vazio ou inválido !`
         return alert(message)      
        };
      }


      // await api.post('/clients', data)
      // console.log(data)
      // alert("Cadastro efetuado com sucesso");
      // history.push('/clients')

    }

  return (
    <div id= "Page-Create-User-With-Role" className={classes.Page}> 
      
      <main className= {classes.FormContainer}>
        <form onSubmit= {handleSubmit} >
        <fieldset>
         
          <legend>Crie o Evento</legend>

            <div className={classes.InputBlock}>
              <label htmlFor = "name"> Nome </label>
              <input id= "name" name = 'name' value= {name} onChange= {setName} />
            </div>

            <div className={classes.InputBlock}>
              <label htmlFor= "local"> Local </label>
              <input id="local" name = 'local' value= {local} onChange= {setLocal} />
            </div>

            <div className={classes.InputBlock}>
              <label htmlFor= "data"> Data </label>
              <input id="data" name = 'data' value= {date}   onChange= {setDate} />
            </div>

        </fieldset>
          <button className= {classes.ConfirmButton} type= "submit">
              Confirmar 
          </button>
        </form>
      </main>
    </div>
  )
}

export default injectSheet(styles)(CreateEvent); 