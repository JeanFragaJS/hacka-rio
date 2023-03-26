export default {

  Page: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',  
    color: '#FFFF',
    
    margin: '70px auto',
  },

  FormContainer: {
    marginTop: '20px',
    background: "rgba(0, 0, 0, 0.3)",
    borderRadius: '15px',
    minWidth: '50%',
    '& form': {
      width: '60%',
      margin: '50px auto',
      overflow: 'hidden',
    },

    '& fieldset': {
      height: '100%',
      border: 0,
      marginTop: 0, 
      '& legend': {
        width: '100%',

        fontSize: '45px',
        color: '#ffff',
        fontWeight: 'normal',
      
        borderBottom: '1px solid #D3e2E5',
        marginBottom: '20px',
        paddingBottom: '16px',
      }
    }
  },

  InputBlock: {
    '& input': {
      width: '90%',
      borderRadius: '15px',
      width: '100%',
      border: 'none',
      margin: '3px 0',
      outline: 'none',
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    
      color: '#FFFF',
      height: '40px',
      padding: ' 0px 16px',
    },
    '& label': {
      display: 'flex',
      color: '#FFFF',
      lineHeight: '25px',
      fontSize: '20px',
      paddingLeft: '10px'
    },

  },

  ImagesContainer: {
    paddingTop: '6px',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridGap: '8px',
    '& img': {
      width: '100%',
      height: '75px',
      objectFit: 'cover',
      borderRadius: '8px', 
    }
  },

  NewImage: {
    height: '80px',
    border: '1px solid',
    background:' rgba(255, 255, 255, 0.289)',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '20px',
    alignItems: 'center',
  },

  ConfirmButton: {
    marginTop: '20px',
  
    width: '100%',
    height: '64px',
    border: 0,
    cursor: 'pointer',
    background: 'rgba(7,130,183,1)',
    borderRadius: '16px',
    color: '#FFFF',
    fontWeight: '700px',
  
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  
    transition: 'background-color 0.2s',

    '&:hover': {
      background: '#FFFF',
      color: ' rgba(7,130,183,1)'
    }
  },
}
