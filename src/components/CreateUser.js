import React, {useState} from 'react';
import useFormState from '../hooks/useFormState';
import injectSheet from 'react-jss';
import {BiImageAdd} from 'react-icons/bi';
import styles from '../style/CreateUserAndEvent'



// import api from '../services/api';
// import {useHistory} from 'react-router-dom';

 function CreateUserWithRole (props) {

    const {classes} = props;

    const [name, setName] = useFormState('');
    const [phone, setPhone] = useFormState('');
    const [email, setEmail] = useFormState('');
    const [role, setRole] = useFormState('');

    const [images, setImages] = useState([])
    const [imagesPreviews, setPreviewImages] = useState([])
  
    
  
    function handleSelectImages(event) {
      
      if(!event.target.files) {
        return
      }
  
      const selecionarImagens = [...event.target.files]
      setImages(selecionarImagens)
  
      const selecionarPrevisualisacaoDeImagens = selecionarImagens.map(imagem =>{
        return URL.createObjectURL(imagem)
      })
  
      setPreviewImages(selecionarPrevisualisacaoDeImagens)
    }


    async function handleSubmit(event) {
      event.preventDefault();

      const data = {name, phone, email, role, images}

      let message;
      const fields = ['name', 'phone', 'email', 'role'];
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
    <div id= "Page-User" className={classes.Page}> 
      
      <main className= {classes.FormContainer}>
        <form onSubmit= {handleSubmit} >
        <fieldset>
         
          <legend>Cadastre-se</legend>

            <div className={classes.InputBlock}>
              <label htmlFor = "name"> Nome </label>
              <input id= "name" name = 'name' value= {name} onChange= {setName} />
            </div>

            <div className={classes.InputBlock}>
              <label htmlFor= "phone"> Telefone </label>
              <input id="phone" name = 'phone' value= {phone} onChange= {setPhone} />
            </div>

            <div className={classes.InputBlock}>
              <label htmlFor= "email"> E-mail </label>
              <input id="email" name = 'email' value= {email}   onChange= {setEmail} />
            </div>

            <div className={classes.InputBlock}>
              <label htmlFor= "role"> Tipo de usuário </label>
              <input id="email" name = 'email' value= {role}   onChange= {setRole} />
            </div>

            <div className= {classes.InputBlock}>
              <label htmlFor= "images"> Álbum </label>
              
              <div className= {classes.ImagesContainer}>
                    {imagesPreviews.map((image)=> {
                      return <img key= {image} src= {image} alt= {name}/>
                    })}
                <label htmlFor= "image[]" className= {classes.NewImage}>
                      <BiImageAdd size= {30} color= "#FFFF"/>
                </label>
              </div>
              <input multiple style={{display: 'none'}} type="file" id= "image[]" value= "" onChange= {handleSelectImages}/>
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

export default injectSheet(styles)(CreateUserWithRole); 