import React from 'react'
import './contactCard.scss'
import { BiSolidUserCircle, BiSolidPhoneCallp } from "react-icons/bi";
import { MdPlace } from "react-icons/md";

const ContactCard = ({name, cellPhone, address, image, instagram, whatsapp, facebook}) => {
    console.log(whatsapp)
    
const handleGoTo = (link) => {
    window.open(link, '_blank');
}


    return (
        <>
            <div className='WhatToDoDescription__card__container'>
                <div className='WhatToDoDescription__card__description'>
                    <figure>
                        <img src={image} alt="" />
                    </figure>
                    <div className='WhatToDoDescription__card__description__name'>
                        <BiSolidUserCircle />
                        <p>{name}</p>
                    </div>
                    <div className='WhatToDoDescription__card__description__name'>
                        <BiSolidPhoneCall />
                        <p>{cellPhone}9</p>
                    </div>
                    <div className='WhatToDoDescription__card__description__name'>
                        <MdPlace />
                        <p>{address}</p>
                    </div>
                </div>
                <div className='WhatToDoDescription__card__description'>
                    <div className='WhatToDoDescription__socialMedia'>
                        <img src="https://cdn-icons-png.flaticon.com/128/5968/5968841.png" alt=""  onClick={() => handleGoTo(whatsapp)} />
                        <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt=""  onClick={() => handleGoTo(instagram)}/>
                        <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt=""  onClick={() => handleGoTo(facebook)}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactCard