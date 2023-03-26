import React, {useState} from 'react';
import injectSheet from 'react-jss';
// import {useHistory} from 'react-router-dom';

const styles = {
  Page: {
    display: 'flex',
    color: '#FFFF',
    height: '100%',
    margin: '70px auto',
  },

  Container: {
    margin: '50px auto 10px auto',
    width: '90%',
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "1rem",
    justifyContent: 'center',
    alignItems: "center",
    flexWrap: "wrap",
  },

  UserBox: {
    height: '250px',
    background: "rgba(0, 0, 0, 0.3)",
    borderRadius: '15px',
    minWidth: '250px',
  }
}

 function UserBox (props) {

    const {classes} = props;

  return (
    <div className={classes.Page}> 
      <div className={classes.Container}>
        <div className={classes.UserBox}></div> 
        <div className={classes.UserBox}></div> 
        <div className={classes.UserBox}></div> 
        <div className={classes.UserBox}></div> 
        <div className={classes.UserBox}></div> 
         
      </div>


    </div>
  )
}

export default injectSheet(styles)(UserBox); 