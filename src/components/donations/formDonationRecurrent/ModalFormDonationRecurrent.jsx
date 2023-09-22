import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormDonationRecurrent from './FormDonationRecurrent';
import { useState } from 'react';


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

export default function ModalFormDonationRecurrent({selectedAmount}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [dataFormDonationRecurrent, setDataFormDonationRecurrent] = useState({})



    return (
        <>
            <Button onClick={handleOpen} className='donations__container__ctaBtns' style={{
                width: '90%',
                height: '2.5rem',
                bgColor: 'green',
                backgroundColor: '#6EBE4A',
                borderRadius: '2rem',
                color: 'white', border: '2px solid gray', fontSize: '.8rem', fontWeight: 'bold'
            }}>Confirmar donación mensual</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <p style={{ textAlign: 'center', marginBottom: '1rem', fontFamily: 'arial, helvetica, sans-serif', fontWeight:'bold' }}>Formulario de donación mensual</p>
                    <p style={{ textAlign: 'center', marginBottom: '1rem', fontFamily: 'arial, helvetica, sans-serif' }}>Ha seleccionado donar <span>${Number(selectedAmount).toLocaleString()}</span> mensualmente</p>
                    <Typography id="modal-modal-title" variant="h6" component="h2">

                    </Typography>
                    <>
                        <FormDonationRecurrent handleClose={handleClose} selectedAmount={selectedAmount} dataFormDonationRecurrent={dataFormDonationRecurrent} setDataFormDonationRecurrent={setDataFormDonationRecurrent}  />
                    </>

                </Box>
            </Modal>
        </>
    );
}