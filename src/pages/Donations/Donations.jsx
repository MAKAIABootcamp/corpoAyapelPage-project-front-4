import React, { useEffect, useState } from 'react'
import './Donations.scss'
import BtnQuantityMoney from '../../components/donations/btnQuantityMoney/BtnQuantityMoney'
import CtaDonations from '../../components/donations/ctaDonations/CtaDonations'
import Swal from 'sweetalert2';

const Donations = () => {

  const [selectedAmount, setSelectedAmount] = useState(null)

  const handleConfirmGoToDonate = (amount) => {
    setSelectedAmount(amount === selectedAmount ? null : amount);
  }

  useEffect(() => {
    console.log('Donarás', selectedAmount); // El valor de "selectedAmount" estará actualizado aquí
  }, [selectedAmount]);


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
          // Handle "Otro Valor" case or any other custom amount
          window.open('https://secure.payco.co/checkoutopen/44371', '_blank');
          break;
      }
    }
  }

  const donationAmounts = [
    { amount: '50.000' },
    { amount: '100.000' },
    { amount: '150.000' },
    { amount: '200.000' },
    { amount: '300.000' },
    { amount: 'Otro Valor' },
  ];

  const formattedDonation = Math.round(Number(selectedAmount) * 1000 / 30).toLocaleString();
  return (
    <>
      <div className='donations__background'>
        <div className='donations__container'>
          <div className='donations__columnOne'>
            <div className='donations__btns'>
              {donationAmounts.slice(0, 3).map((item, index) => (
                <BtnQuantityMoney
                  key={index}
                  amount={item.amount}
                  isSelected={selectedAmount === item.amount}
                  onClick={handleConfirmGoToDonate} // Verifica esta línea
                />
              ))}
            </div>
          </div>
          <div className='donations__columnTwo'>
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
                isSelected={selectedAmount !== null} // Aquí establece isSelected a true si selectedAmount no es null (un monto está seleccionado), de lo contrario, será false.
              />
            </div>
          </div>
          <div className='donations__columnThree'>
            <div className='donations__btns'>
              {donationAmounts.slice(3).map((item, index) => (
                <BtnQuantityMoney
                  key={index}
                  amount={item.amount}
                  isSelected={selectedAmount === item.amount}
                  onClick={handleConfirmGoToDonate} // Verifica esta línea
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Donations