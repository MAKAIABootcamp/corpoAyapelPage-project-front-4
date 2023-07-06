import React from 'react'
import NavbarPageAyapel from '../../components/ayapel/navbarPageAyapel/NavbarPageAyapel'
import './Ayapel.scss'
import WhatToDo from '../../components/ayapel/navbarPageAyapel/whatToDo/WhatToDo'
import WhatToDoDescription from '../../components/ayapel/navbarPageAyapel/whatToDoDescription/WhatToDoDescription'

const Ayapel = () => {
  return (
    <>
      <div className='ayapel__background'>
        <main className='ayapel__container'>
          <div className='ayapel__container__nav'>
            <NavbarPageAyapel />
          </div>
          <div className='ayapel__container__ppl'>
            <article className='ayapel__container__columnLeft'>
              <WhatToDo />
            </article>
            <article className='ayapel__container__columnRight'>
            <WhatToDoDescription/>
            </article>
          </div>

        </main>


      </div>
    </>
  )
}

export default Ayapel