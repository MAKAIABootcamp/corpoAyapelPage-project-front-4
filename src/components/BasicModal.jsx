import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import HubspotContactForm from './hubspotContactForm/HubspotContactForm';
import '../../src/pages/Donations/Donations.scss'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}  className='donations__container__ctaBtns' style={{ width:'12rem',
                      height:'3rem',
                      bgColor:'#FFF',
                      borderRadius:'2rem',
                      color:'black', border:'2px solid gray', fontSize:'.8rem', fontWeight:'bold'}}>Cancelar Suscripción</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <p style={{textAlign:'center', marginBottom:'1rem', fontFamily:'arial, helvetica, sans-serif'}}>CANCELAR SUSCRIPCIÓN DE DONACIÓN RECURRENTE</p>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            
          </Typography>
          <HubspotContactForm id={"40152509"} idForm={"13cfcef7-1453-41c9-8e93-332a4b195c3f"} targetForm={'#hubspotForm'} />
     
        </Box>
      </Modal>
    </>
  );
}