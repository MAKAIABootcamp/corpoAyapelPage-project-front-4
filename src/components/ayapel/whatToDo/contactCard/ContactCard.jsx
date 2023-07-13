import React from 'react'
import './contactCard.scss'
import { BiSolidUserCircle, BiSolidPhoneCall, BiLogoWhatsapp } from "react-icons/bi";
import { MdPlace } from "react-icons/md";
import Stack from '@mui/material/Stack';


const ContactCard = ({ name, cellPhone, address, image, instagram, whatsapp, facebook }) => {
    console.log(whatsapp)
    const handleGoTo = (link) => {
        window.open(link, '_blank');
    }

    const stringName = () => {
        if (name && name.includes(' ')) {
            const [firstName, lastName] = name.split(' ');
            return {
              children: `${firstName[0]}${lastName[0]}`,
            };
          } else if (name) {
            return {
              children: name[0],
            };
          }
          return {};
    }
       

    return (
        <>
            <div className='WhatToDoDescription__card__container'>
                <div className='WhatToDoDescription__card__description'>
                    {image ?
                        <figure>
                            <img src={image} alt="" />
                        </figure>
                        :
                        <Stack direction="row" spacing={2}>
                            <div className='WhatToDoDescription__otherName' {...stringName(`${name.toUpperCase()}`)} />
                        </Stack>
                    }
                    <div className='WhatToDoDescription__card__description__name'>
                        <BiSolidUserCircle />
                        <p>{name}</p>
                    </div>
                    <div className='WhatToDoDescription__card__description__name'>
                        <BiSolidPhoneCall />
                        <p>{cellPhone}</p>
                    </div>
                    <div className='WhatToDoDescription__card__description__name'>
                        <MdPlace />
                        <p>{address}</p>
                    </div>
                </div>
                <div className='WhatToDoDescription__card__description'>
                    <div className='WhatToDoDescription__socialMedia'>
                        <img src="https://cdn-icons-png.flaticon.com/128/5968/5968841.png" alt="" onClick={() => handleGoTo(whatsapp)} />
                        <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="" onClick={() => handleGoTo(instagram)} />
                        <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="" onClick={() => handleGoTo(facebook)} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactCard