import React, { useEffect, useState } from 'react'
import './Ayapel.scss'
import '../../components/ayapel/whatToDoStyle/whatToDo.scss'
import NavbarPageAyapel from '../../components/ayapel/navbarPageAyapel/NavbarPageAyapel'
import '../../../src/components/ayapel/navbarPageAyapel/navbarPageAyapel.scss'
import '../../../src/components/ayapel/mainAyapel/mainAyapel'
import MainWhatToDoInAyapel from '../../components/ayapel/mainWhatToDoInAyapel/MainWhatToDoInAyapel'
import MainLocationApel from '../../components/ayapel/mainLocationAyapel/MainLocationApel'
import MainImportantData from '../../components/ayapel/mainImportantData/MainImportantData'
import MainFloraAndFauna from '../../components/ayapel/mainFloraAndFauna/MainFloraAndFauna'

const Ayapel = () => {

  const [activeIndexNavbar, setActiveIndexNavbar] = useState(0);

  return (
    <>
      <div className='ayapel__background'>
        <main className='ayapel__container'>
          <div className='ayapel__container__nav'>
            <NavbarPageAyapel activeIndexNavbar={activeIndexNavbar} setActiveIndexNavbar={setActiveIndexNavbar} />
          </div>
          {activeIndexNavbar === 0 &&
            <MainLocationApel />
          }
          {activeIndexNavbar === 1 &&
            <MainWhatToDoInAyapel />
          }
          {activeIndexNavbar === 2 &&
            <MainImportantData />
          }
          {activeIndexNavbar === 3 &&
            <MainFloraAndFauna />
          }
        </main>


      </div>
    </>
  )
}

export default Ayapel