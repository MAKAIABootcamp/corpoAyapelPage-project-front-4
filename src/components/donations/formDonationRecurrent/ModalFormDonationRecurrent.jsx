import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormDonationRecurrent from './FormDonationRecurrent';


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

export default function ModalFormDonationRecurrent() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button onClick={handleOpen} className='donations__container__ctaBtns' style={{
                width: '12rem',
                height: '3rem',
                bgColor: '#FFF',
                borderRadius: '2rem',
                color: 'black', border: '2px solid gray', fontSize: '.8rem', fontWeight: 'bold'
            }}>Donación recurrente</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <p style={{ textAlign: 'center', marginBottom: '1rem', fontFamily: 'arial, helvetica, sans-serif' }}>Donación recurrente</p>
                    <Typography id="modal-modal-title" variant="h6" component="h2">

                    </Typography>
                    <>
                        <FormDonationRecurrent />
                    </>

                </Box>
            </Modal>
        </>
    );
}