import React, { useEffect, useState } from 'react'
import './Donations.scss'
import BtnQuantityMoney from '../../components/donations/btnQuantityMoney/BtnQuantityMoney'
import CtaDonations from '../../components/donations/ctaDonations/CtaDonations'
import Swal from 'sweetalert2';
import BtnKnowMore from '../../components/donations/btnKnowMore/BtnKnowMore';
import { motion, useIsPresent } from "framer-motion";
import ImpactIndicator from '../../components/donations/impactIndicator/ImpactIndicator';
import client from '../../sanity/client';

const Donations = () => {

  const isPresent = useIsPresent();

  const [selectedAmount, setSelectedAmount] = useState(null)
  const [showImpactIndicator, setShowImpactIndicator] = useState(false);

  const formattedDonation = Math.round(Number(selectedAmount) * 1000 / 30).toLocaleString();

  const handleConfirmGoToDonate = (amount) => {
    setSelectedAmount(amount === selectedAmount ? null : amount);
  }

  useEffect(() => {
    console.log('Donarás', selectedAmount); // El valor de "selectedAmount" estará actualizado aquí
  }, [selectedAmount]);

  const [allPostData, setAllPostData] = useState(null)
  useEffect(() => {
    client
      .fetch(
        `*[_type == "donationAmount"] {
        amount1,
        amount2,
        amount3,
        amount4,
        amount5,
        amount6,
        currentDonors
      }`
      )
      .then((data) => setAllPostData(data))
      .catch(console.error)
  }, [])
  console.log(allPostData)


  const handleCancelRecurrentDonation = () => {
    console.log('Cancelar donación')
  }
  const handleGoDonate = () => {
    if (selectedAmount === null) {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Por favor seleccionar un monto',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      handleConfirmGoToDonate(selectedAmount);
      switch (selectedAmount) {
        case '50.000':
          window.open('https://payco.link/1371324', '_blank');
          break;
        case '100.000':
          window.open('https://payco.link/1371328', '_blank');
          break;
        case '150.000':
          window.open('https://payco.link/1371330', '_blank');
          break;
        case '200.000':
          window.open('https://payco.link/1371332', '_blank');
          break;
        case '300.000':
          window.open('https://payco.link/1371333', '_blank');
          break;
        default:
          window.open('https://secure.payco.co/checkoutopen/44371', '_blank');
          break;
      }
    }
  }

  const donationAmounts = [
    { amount: allPostData?.[0].amount1 },
    { amount: allPostData?.[0].amount2 },
    { amount: allPostData?.[0].amount3 },
    { amount: allPostData?.[0].amount4 },
    { amount: allPostData?.[0].amount5 },
    { amount: allPostData?.[0].amount6 },
  ];

  const handleToNextComponent = () => {
    console.log('voy al next')
    setShowImpactIndicator(true);
  }

  // const handleScroll = () => {
  //   handleToNextComponent();
  // }
  // window.addEventListener('scroll', handleScroll);


  return (
    <>
      {showImpactIndicator ? <ImpactIndicator /> :
        <>
          <div className='donations__background'>
            <main className='donations__container'>
              <section className='donations__columnOne'>
                <div className='donations__btns'>
                  {donationAmounts.slice(0, 3).map((item, index) => (
                    <BtnQuantityMoney
                      key={index}
                      amount={item.amount}
                      isSelected={selectedAmount === item.amount}
                      onClick={handleConfirmGoToDonate}
                    />
                  ))}
                </div>
              </section>
              <section className='donations__columnTwo'>
                {selectedAmount === null ?
                  <div className='donations__image'>
                    <video width='540' height='360' controls className='donations__image__ppl'>
                      <source src='https://youtu.be/1KzRhryHfLI' type='video/mp4' />
                    </video>
                  </div>
                  :
                  <div className='donations__columnTwo-selected'>
                    <h3 className='donations__title'>¿Quieres ser un donador recurrente?</h3>
                    <p>Al donar COP {formattedDonation} diarios ayudas a ...</p>
                  </div>
                }
                <div className='donations__container__ctaBtns'>
                  {selectedAmount === null &&
                    <CtaDonations
                      onClick={handleCancelRecurrentDonation}
                      label={'Cancelar suscripción'}
                      width={'12rem'}
                      height={'3rem'}
                      bgColor={'#FFF'}
                      borderRadius={'2rem'}
                      color={'black'}
                    />
                  }
                  <CtaDonations
                    onClick={handleGoDonate}
                    label={'DONAR AHORA'}
                    width={'15rem'}
                    height={'3rem'}
                    borderRadius={'2rem'}
                    labelAfter={'CONFIRMAR DONACIÓN'}
                    isSelected={selectedAmount !== null}
                  />
                </div>
              </section>
              <section className='donations__columnThree'>
                <div className='donations__btns'>
                  {donationAmounts.slice(3).map((item, index) => (
                    <BtnQuantityMoney
                      key={index}
                      amount={item.amount}
                      isSelected={selectedAmount === item.amount}
                      onClick={handleConfirmGoToDonate}
                    />
                  ))}
                </div>
              </section>
              <BtnKnowMore onClick={handleToNextComponent} />
            </main>
          </div>
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
            exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
            style={{ transformOrigin: isPresent ? "0" : "100%" }}
            className="privacy-screen"
          />
        </>
      }
    </>
  )
};

export default Donations