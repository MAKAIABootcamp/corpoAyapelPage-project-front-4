import React, { useEffect, useState } from 'react'
import './Donations.scss'
import BtnQuantityMoney from '../../components/donations/btnQuantityMoney/BtnQuantityMoney'
import CtaDonations from '../../components/donations/ctaDonations/CtaDonations'
import Swal from 'sweetalert2';
import BtnKnowMore from '../../components/donations/btnKnowMore/BtnKnowMore';
import { motion, useIsPresent } from "framer-motion";
import client from '../../sanity/client';
//import YouTube from 'react-youtube';
import { useDispatch, useSelector } from 'react-redux';
import { setLoadingStatusFalse } from '../../redux/actions/actions';
import Loader from '../../components/appLoader/Loader';
import FormDonationFixed from '../../components/donations/formDonationFixed/FormDonationFixed';
import ModalFormDonationRecurrent from '../../components/donations/formDonationRecurrent/ModalFormDonationRecurrent';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { FaDonate } from 'react-icons/fa';
import ModalFormCancelOneDonationRecurrent from '../../components/donations/formDonationRecurrent/ModalFormCancelOneDonationRecurrent';
import HubspotContactForm from '../../components/hubspotContactForm/HubspotContactForm';
import { actionGetDataAsync } from '../../redux/actions/dataActions';
import Navbar from '../../components/Navbar/Navbar';

const Donations = ({ handleGoToDonorProgress }) => {

  const isPresent = useIsPresent();

  const [selectedAmount, setSelectedAmount] = useState(null)
  const [setSelectedCancelSuscripcion] = useState(false)
  const [setShowImpactIndicator] = useState(false);


  const formattedDonation = (selectedAmount / 30).toLocaleString();


  const handleConfirmGoToDonate = (amount) => {
    setSelectedAmount(amount === selectedAmount ? null : amount);
  }

  const [typeSelected, setTypeSelected] = useState('mensual');

  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.loading);
  const { data } = useSelector((store) => store.data);
  const [videoData, setVideoData] = useState('');
  const fields = [
    "amount1",
    "amount2",
    "amount3",
    "amount4",
    "amount5",
    "amount6",
    "currentDonors"]


  useEffect(() => {

    dispatch(actionGetDataAsync("donationAmount", fields));
    client
    .fetch(
      `*[_type == "video"] {
        title,
        videoFile{
          asset->{
            _id,
            url
          }
        }
      }`
    )
    .then((data) => {
      setVideoData(data);
    })
    .catch(console.error);
  

  }, [dispatch]);

//  console.log(videoData);

  const handleCancelRecurrentDonation = () => {
    console.log('Cancelar donación')
    setSelectedCancelSuscripcion(true)
  }
  const handleGoDonate = () => {
    if (selectedAmount === null || selectedAmount === 'Otro Valor') {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Por favor seleccionar un monto',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  const donationAmounts = data[0]?.donationAmount?.[0] ? [
    { amount: data[0].donationAmount[0].amount1 },
    { amount: data[0].donationAmount[0].amount2 },
    { amount: data[0].donationAmount[0].amount3 },
    { amount: data[0].donationAmount[0].amount4 },
    { amount: data[0].donationAmount[0].amount5 },
    { amount: data[0].donationAmount[0].amount6 },
  ] : [];

  const handleToNextComponent = () => {
   // console.log('voy al next')
    setShowImpactIndicator(true);
  }

  const handleVideoReady = (event) => {
  };

  // const handleScroll = () => {
  //   handleToNextComponent();
  // }
  // window.addEventListener('scroll', handleScroll);
  //console.log(selectedAmount);


  let initialValues = {
    amount: "",
  }

  const sendForm = async (data) => {
    setSelectedAmount(data.amount)
  }

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      amount: Yup.string()
        .required('Por favor indicar un valor')
        .test('is-greater-than-5000', 'El monto debe ser superior a $5.000', function (value) {
          const parsedValue = parseFloat(value.replace(/\D/g, ''));
          return parsedValue > 5000;
        }),

    }),
    onSubmit: sendForm,
  })

  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div className='donations__background'>
            <main className='donations__main'>
              <section className='donations__sectionTypes'>
                <div className='donations__sectionTypes__container'>
                  <h3>
                    ¡Haz la diferencia y construyamos juntos un futuro sostenible para Ayapel!

                  </h3>
                  <p>Selecciona el tipo de donación que deseas realizar</p>
                  <article className='donations__typeDonation'>

                    <button className={typeSelected === 'mensual' ? 'donations__btnTypeSelected-active' : 'donations__btnTypeSelected'}
                      onClick={() => setTypeSelected('mensual')}> Donación mensual</button>


                    <button className={typeSelected === 'unica' ? 'donations__btnTypeSelected-active' : 'donations__btnTypeSelected'}
                      onClick={() => setTypeSelected('unica')}> Donación única vez</button>


                    <button className={typeSelected === 'especie' ? 'donations__btnTypeSelected-active' : 'donations__btnTypeSelected'}
                      onClick={() => setTypeSelected('especie')}> Donación en especies</button>

                  </article>
                </div>
                <article onClick={handleGoToDonorProgress} >
                  <BtnKnowMore onClick={handleGoToDonorProgress} />
                </article>

              </section>
              {typeSelected === 'mensual' &&
                <section className='donations__sectionDonate'>
                  <div className='donations__container'>
                    {selectedAmount === null ?
                      // <img className='donations__videoBackground' src="https://res.cloudinary.com/dd8l8bm6q/image/upload/v1689261448/ayapel/oczq1l3syf3bbj8ja09e.webp" alt="" />
                      <video
                      controls
                      autoPlay  // Cambiamos "autoplay" a "autoPlay" (mayúscula P)
                      loop
                      muted
                      className="donations__videoBackground"
                      // poster="ruta_a_la_miniatura_del_video.jpg"
                    >
                      {videoData.length > 0 && videoData.map((video) => (
                        <source key={video.videoFile.asset._id} src={video.videoFile.asset.url} type="video/mp4" />
                      ))}
                      Tu navegador no admite el elemento de video.
                    </video>
                      :
                      <>
                        <div className='donations__videoBackground-inactive'></div>
                        <div className='donations__columnTwo-selected'>
                          <h2 className='donations__title selectDonate'>¡Estás a un paso de ser parte de esta historia!
                          </h2>
                          {selectedAmount !== "Otro Valor" ?
                            <>
                              <p className='donations__text'>
                                {/* Al donar COP {formattedDonation} */}
                                Tu aporte mensual marca la diferencia en la vida de las familias de Ayapel, en la protección de su entorno natural y en el impulso de su economía local.
                              </p>
                              <p className='donations__text selectDonate'> Has seleccionado donar:</p>
                              <p className='donations__title selectDonate' style={{ fontSize: '2rem', textAlign: 'center' }}>
                                ${Number(selectedAmount).toLocaleString()}
                              </p>
                            </>
                            :
                            <div className='donations__howToDonate'>
                              <p className='donations__text'> Puedes decidir cuánto donar </p>
                              <p className='donations__text'>Por favor ingresa la cantidad que deseas donar</p>
                              <form onSubmit={handleSubmit} className='donations__formDonationsAmount'>
                                <TextField
                                  id="outlined-password-input"
                                  label={
                                    <span>
                                      <FaDonate style={{ verticalAlign: 'middle' }} /> Monto a donar
                                    </span>
                                  }
                                  name="amount"
                                  onChange={handleChange}
                                  value={values.amount}
                                  error={errors.amount}
                                  helperText={errors.amount}
                                />
                                <button type='submit' className='donations__btnConfirmAmount'>Confirmar</button>
                              </form>
                            </div>

                          }
                        </div>
                      </>
                    }
                    <div className='donations__containerAmounts'>
                      <div className='donations__containerAmounts__btns'>
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
                      </div>

                      {selectedAmount > 5000 ?
                        <ModalFormDonationRecurrent selectedAmount={selectedAmount} />
                        :
                        <CtaDonations
                          style={{ position: 'relative' }}
                          onClick={handleGoDonate}
                          label={'DONAR AHORA'}
                          width={'90%'}
                          height={'3rem'}
                          borderRadius={'2rem'}

                        />
                      }
                      <p className='donations__cancelDonation'>Puedes <span><ModalFormCancelOneDonationRecurrent /> </span>  tu suscripción cuando desees </p>
                    </div>
                  </div>
                </section>
              }
              {typeSelected === 'unica' &&
                <section className='donations__sectionDonate'>
                  <div className='donations__container'>
                    {selectedAmount === null ?
                      <img className='donations__videoBackground' src="https://res.cloudinary.com/dd8l8bm6q/image/upload/v1689261448/ayapel/oczq1l3syf3bbj8ja09e.jpg" alt="" />
                      :
                      <>
                        <div className='donations__videoBackground-inactive'></div>
                        <div className='donations__columnTwo-selected'>
                          <h2 className='donations__title selectDonate'>¡Estás a un paso de ser parte de esta historia!
                          </h2>
                          {selectedAmount !== "Otro Valor" ?
                            <>
                              <p className='donations__text'>
                                {/* Al donar COP {formattedDonation} */}
                                Tu aporte marca la diferencia en la vida de las familias de Ayapel, en la protección de su entorno natural y en el impulso de su economía local.
                              </p>
                              <p className='donations__text selectDonate'> Has seleccionado donar:</p>
                              <p className='donations__title selectDonate' style={{ fontSize: '2rem', textAlign: 'center' }}>
                                ${Number(selectedAmount).toLocaleString()}
                              </p>
                            </>
                            :
                            <div className='donations__howToDonate'>
                              <p className='donations__text'> Puedes decidir cuánto donar </p>
                              <p className='donations__text'>Por favor ingresa la cantidad que deseas donar</p>
                              <form onSubmit={handleSubmit} className='donations__formDonationsAmount'>
                                <TextField
                                  id="outlined-password-input"
                                  label={
                                    <span>
                                      <FaDonate style={{ verticalAlign: 'middle' }} /> Monto a donar
                                    </span>
                                  }
                                  name="amount"
                                  onChange={handleChange}
                                  value={values.amount}
                                  error={errors.amount}
                                  helperText={errors.amount}
                                />
                                <button type='submit' className='donations__btnConfirmAmount'>Confirmar</button>
                              </form>
                            </div>

                          }
                        </div>
                      </>
                    }
                    <div className='donations__containerAmounts'>
                      <div className='donations__containerAmounts__btns'>
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
                      </div>

                      {selectedAmount > 5000 ? (
                        <FormDonationFixed amount={selectedAmount} className='donations__btnDontationFixed' />
                      ) : (
                        <CtaDonations
                          style={{ position: 'relative' }}
                          onClick={handleGoDonate}
                          label={'DONAR AHORA'}
                          width={'90%'}
                          height={'3rem'}
                          borderRadius={'2rem'}
                        />
                      )}

                      <p className='donations__cancelDonation'>Puedes <span><ModalFormCancelOneDonationRecurrent /> </span> tu suscripción cuando desees </p>
                    </div>
                  </div>
                </section>
              }
              {typeSelected === 'especie' &&
                <section className='donations__sectionDonate'>
                  <div className='donations__contactForm'>
                    <article className='donations__contactForm__bg'>
                      {/* <h3>¿Deseas realizar una donación en especie?</h3> */}
                      {/* <p>¡Puedes diligenciar el formulario y te contatámos!</p> */}
                      <HubspotContactForm id={"40813403"} idForm={"1e4a6dc2-cddc-4cac-b4ed-363e045b10ca"} />
                    </article>
                  </div>
                </section>
              }
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
    </>
  )
};

export default Donations