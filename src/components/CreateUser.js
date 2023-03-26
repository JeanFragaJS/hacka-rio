import React, {useState} from 'react';
import useFormState from '../hooks/useFormState';
import injectSheet from 'react-jss';
import {BiImageAdd} from 'react-icons/bi';
import styles from '../style/CreateUserAndEvent'
import api from '../api.js';




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
      const data = new FormData();
 
      data.append('name', name);
      data.append('phone', phone);
      data.append('email', email);
      data.append('role', role);
      images.forEach(image => {
        data.append('images', image);
      });

      const res = await api.post('/user', data); 
      console.log(res)
      alert("Cadastro efetuado com sucesso");

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