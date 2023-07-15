import React, { useEffect, useState } from 'react'
import './Donations.scss'
import BtnQuantityMoney from '../../components/donations/btnQuantityMoney/BtnQuantityMoney'
import CtaDonations from '../../components/donations/ctaDonations/CtaDonations'
import Swal from 'sweetalert2';
import BtnKnowMore from '../../components/donations/btnKnowMore/BtnKnowMore';
import { motion, useIsPresent } from "framer-motion";
import client from '../../sanity/client';
import BasicModal from '../../components/BasicModal';
import { listTransactions, listPaymentLinks, getTransactionDetail, createNewCostumer, createCardToken } from '../../epayco';
//import YouTube from 'react-youtube';
import { useDispatch, useSelector } from 'react-redux';
import { setLoadingStatusFalse } from '../../redux/actions/actions';
import Loader from '../../components/appLoader/Loader';

const Donations = () => {

    const isPresent = useIsPresent();

  const [selectedAmount, setSelectedAmount] = useState(null)
  const [selectedCancelSuscripcion, setSelectedCancelSuscripcion] = useState(false)
  const [showImpactIndicator, setShowImpactIndicator] = useState(false);

const [dataTransactionDetail, setDataTransactionDetail] = useState(null)

const formattedDonation = (selectedAmount / 30).toLocaleString();


  const handleConfirmGoToDonate = (amount) => {
    setSelectedAmount(amount === selectedAmount ? null : amount);
  }



  useEffect(() => {
   // getDataEpayco();
   //listTransactions();
   //listPaymentLinks();
   const fetchData = async () => {
    try {
      const result = await createCardToken();
      const data = result;
      console.log(data);
      setDataTransactionDetail(data)
    } catch (error) {
      console.log('error', error);
    }
  };
  fetchData();

  }, [selectedAmount]);

  const { loading } = useSelector((store) => store.loading);
  const dispatch = useDispatch();

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
      .then((data) => {
        setAllPostData(data);
        dispatch(setLoadingStatusFalse());
      })
      .catch(console.error);
  }, [])
  

  const handleCancelRecurrentDonation = () => {
    console.log('Cancelar donación')
    setSelectedCancelSuscripcion(true)
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

  const handleVideoReady = (event) => {
    //     // Aquí puedes agregar lógica adicional cuando el video esté listo
       };

  // const handleScroll = () => {
  //   handleToNextComponent();
  // }
  // window.addEventListener('scroll', handleScroll);


  return (
    <>
    {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div className='donations__background'>
            <h3 style={{textAlign:'center'}}>
              ¡También puedes ser parte de este sueño! <br/> Realizando donaciones económicas o en especies
            </h3> 
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
                    
                 <iframe
                 width="auto"
                 height="263"
                 src="https://www.youtube.com/embed/nzSJh5Ucgvc?autoplay=1"
                 title="YouTube video player"
                 frameborder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 allowfullscreen
               ></iframe> 

              
{/* 
<YouTube
              videoId="nzSJh5Ucgvc"
              opts={{
                playerVars: {
                  autoplay: 1,
                  mute: 1,
                  loop: 1,
                  controls: 0,
                },
              }}
              onReady={handleVideoReady}
              containerClassName="LazyVideo__StyledVideo-sc-12k5ev0-0 gaXtOT"
            /> */}
               
                  
                  </div>
                  :
                  <div className='donations__columnTwo-selected'>
                    <h3 className='donations__title'>¿Quieres ser un donador recurrente?</h3>
                    {selectedAmount !== "Otro Valor" ? 
                    <p className='donations__text'>Al donar COP {formattedDonation} contribuyes al mejoramiento de la calidad de vida de los habitantes de Ayapel.</p>
                    :  <p className='donations__text'> Puedes decir cuánto donar y contribuir al mejoramiento de la calidad de vida de los habitantes de Ayapel.</p>
                    }
                  </div>
                }

               
                <div className='donations__container__ctaBtns'>
                  {selectedAmount === null &&
                   <BasicModal />
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
               {/* <p>{dataTransactionDetail?.lastAction}</p> */}
        </>
      )}
{/*       
      <VideoDonations/> */}

    </>
  )
};

export default Donations