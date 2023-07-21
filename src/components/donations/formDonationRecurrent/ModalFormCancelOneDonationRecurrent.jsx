import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormCancelOneDonationRecurrent from './FormCancelOneDonationRecurrent';


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

export default function ModalFormCancelOneDonationRecurrent({selectedAmount}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>
            <span onClick={handleOpen} style={{ textDecoration: 'underline', fontWeight: 'bold' 
               
            }}>Cancelar</span>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h3 style={{ textAlign: 'center', marginBottom: '1rem', fontFamily: 'arial, helvetica, sans-serif' }}>¿Desea cancelar la suscripción de donación mensual?</h3>
                    <Typography id="modal-modal-title" variant="h6" component="h2">

                    </Typography>
                    <>
                        <FormCancelOneDonationRecurrent handleClose={handleClose} selectedAmount={selectedAmount}  />
                    </>

                </Box>
            </Modal>
        </>
    );
}