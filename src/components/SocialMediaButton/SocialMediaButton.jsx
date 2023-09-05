import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { BsWhatsapp, BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs";
import {MdAlternateEmail } from "react-icons/md";
import {FaDonate } from "react-icons/fa";
import { actionGetDataAsync } from '../../redux/actions/dataActions';
import { useDispatch, useSelector } from 'react-redux';

const SocialMediaButton = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { data } = useSelector((store) => store.data);
    const dispatch = useDispatch();
    const fields = [
        "linkWhatsapp",
        "linkInstagram",
        "linkFacebook",
        "linkDonations",
        "linkEmail",
        "linkYoutube",
    ];

    useEffect(() => {
        dispatch(actionGetDataAsync("socialsMediaUrl", fields));
    }, [dispatch]);

   const generateMailtoLink = () => {
    const emailLink = data[4]?.socialsMediaUrl?.[0].linkEmail;
    if (emailLink) {
        window.location.href = `mailto:${emailLink}`;
    }
};

const handleGoTo = (direction) => {
    switch (direction) {
        case 'whatsapp':
            window.open(data[4]?.socialsMediaUrl?.[0].linkWhatsapp, '_blank');
            break;
          case 'instagram':
            window.open(data[4]?.socialsMediaUrl?.[0].linkInstagram, '_blank');
            break;
          case 'facebook':
            window.open(data[4]?.socialsMediaUrl?.[0].linkFacebook, '_blank');
            break;
          case 'youtube':
            window.open(data[4]?.socialsMediaUrl?.[0].linkYoutube, '_blank');
            break;
          case 'email':
            generateMailtoLink();
            break;
          case 'donations':
             window.open(data[4]?.socialsMediaUrl?.[0].linkDonations, '_blank');
            break;
          default:
            break;
    }
}

    const actions = [
        { icon: <BsWhatsapp onClick={() => handleGoTo('whatsapp')}/>, name: 'Whatsapp' },
        { icon: <BsInstagram onClick={() => handleGoTo('instagram')} />, name: 'Instagram' },
        { icon: <BsFacebook onClick={() => handleGoTo('facebook')}/>, name: 'Facebook' },
        { icon: <BsYoutube onClick={() => handleGoTo('youtube')} />, name: 'Youtube' },
        { icon: <MdAlternateEmail onClick={() => handleGoTo('email')} />, name: 'Correo' },
        { icon: <FaDonate onClick={() => handleGoTo('donations')}/>, name: 'Donaciones' },
    
      ];
  
    return (
      <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial controlled open example"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={handleClose}
              
            />
          ))}
        </SpeedDial>
      </Box>
    );
  }

export default SocialMediaButton