// import React, { useEffect, useState } from 'react';
// import { Button, Input, InputAdornment, InputLabel, TextField, FormControl, Grid, Select, MenuItem } from '@mui/material';
// import { useFormik } from 'formik';
// import * as Yup from "yup";
// import { ImCreditCard } from 'react-icons/im';
// import './formDonationsRecurrent.scss'
// import { FaLess } from 'react-icons/fa';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateDataSuscription } from '../../../redux/actions/suscriptionDonationActions';
// import { BiSolidUser } from 'react-icons/bi';
// import { createNewCustomer, createPlanWithFreeAmount, createSuscription, paySuscription } from '../../../epayco';


// const CustomerInformation = ({ setCurrentStep }) => {

//     useEffect(() => {
//         // Aquí puedes realizar acciones basadas en los cambios en suscriptionDonation
//         console.log(suscriptionDonation);
//         dispatch(updateDataSuscription({customerInfoForm: updatedDataC}, {inforForm: dataCustomer}));
//         // Realizar otras operaciones o llamadas a API según sea necesario
//       }, [suscriptionDonation]);

//     const { suscriptionDonation } = useSelector((store) => store.suscriptionDonation);


//     const dispatch = useDispatch();

//     let initialValues = {
//         name: "",
//         lastName: "",
//         documentType: "CC",
//         documentNumber: "",
//         cellphone: "",
//     }

//     const documentTypes = [
//         { value: 'CC', label: 'Cédula de Ciudadanía' },
//         { value: 'TI', label: 'Tarjeta de Identidad' },
//         { value: 'PASSPORT', label: 'Pasaporte' },
//     ];


//     const sendForm = async (dataCustomer) => {
//         console.log('hola')
//         console.log(dataCustomer)
//         const updatedDataC = {
//             ...suscriptionDonation,
//             ...dataCustomer,
//         };

//         console.log(suscriptionDonation)

//         const customerResponse = await createNewCustomer(suscriptionDonation);
//         console.log(customerResponse)

//         const customerUpdated = {
//             ...suscriptionDonation,
//             ...customerResponse,
//         };

//         dispatch(updateDataSuscription({ customerInfo: customerUpdated }));

//         // console.log(customerResponse.data.customerId)
//         // const customerId = customerResponse.data.customerId;


//         const planResponse = await createPlanWithFreeAmount("donacion", 98915251745);

//         await dispatch(updateDataSuscription({ planInfo: planResponse }));
//         console.log(planResponse.data.id_plan)
//         console.log(suscriptionDonation)


//         setCurrentStep("confirmation")

//     }

//     const { handleSubmit, handleChange, values, errors } = useFormik({
//         initialValues: initialValues,
//         validationSchema: Yup.object({
//             name: Yup.string().matches(/^[a-zA-Z\s']+$/, 'El nombre del pasajero debe contener solo letras')
//                 .min(3, 'El nombre del pasajero debe tener al menos 3 caracteres.')
//                 .max(15, 'El nombre del pasajero no debe tener más de 15 caracteres.')
//                 .required('El nombre del pasajero es obligatorio.'),
//             lastName: Yup.string().matches(/^[a-zA-Z\s']+$/, 'El apellido del pasajero debe contener solo letras')
//                 .min(5, 'El apellido del pasajero debe tener al menos 3 caracteres.')
//                 .max(15, 'El apellido del pasajero no debe tener más de 15 caracteres.')
//                 .required('El apellido del pasajero es obligatorio.'),
//             documentType: Yup.string().required("Debes seleccionar un tipo de documento."),
//             documentNumber: Yup.string()
//                 .matches(/^[0-9]+$/, 'El número de documento debe contener solo números')
//                 .min(10, 'El número de documento debe tener al menos 10 caracteres')
//                 .max(10, 'El número de documento no debe tener más de 10 caracteres')
//                 .required('El número de documento es obligatorio'),
//         }),
//         onSubmit: sendForm,

//     });

//     return (
//         <>
//             <div className='formDonationsRecurrent__stepOne'>
//                 <p className='formDonationsRecurrent__stepOne'> Paso 3 de 3 </p>
//                 <p className='formDonationsRecurrent__stepOne__title'>Información complementaria</p>
//             </div>
//             <form onSubmit={handleSubmit} className='formDonationsRecurrent'>
//                 <TextField
//                     label="Nombre"
//                     name="name"
//                     onChange={handleChange}
//                     value={values.name}
//                     error={errors.name}
//                     helperText={errors.name}
//                 />
//                 <TextField
//                     label="Apellido"
//                     name="lastName"
//                     onChange={handleChange}
//                     value={values.lastName}
//                     error={errors.lastName}
//                     helperText={errors.lastName}
//                 />
//                 <div className='customerInformation__document'>
//                     <FormControl fullWidth >
//                         <Select name="documentType"
//                             onChange={handleChange}
//                             value={values.documentType}
//                             error={errors.documentType}
//                             helperText={errors.documentType}
//                         >
//                             {documentTypes.map((type) => (
//                                 <MenuItem key={type.value} value={type.value}>
//                                     {type.label}
//                                 </MenuItem>
//                             ))}
//                         </Select>
//                     </FormControl>
//                     <TextField
//                         label="Número de documento"
//                         name="documentNumber"
//                         onChange={handleChange}
//                         value={values.documentNumber}
//                         error={errors.documentNumber}
//                         helperText={errors.documentNumber}
//                     />

//                 </div>
//                 <TextField
//                     label="Numero de móvil"
//                     name="cellphone"
//                     onChange={handleChange}
//                     value={values.cellphone}
//                     error={errors.cellphone}
//                     helperText={errors.cellphone}
//                 />

//                 <Button type="submit" className='formDonationsRecurrent__btnContinue'>
//                     Continuar
//                 </Button>
//             </form>
//         </>
//     )
// }

// export default CustomerInformation

import React, { useEffect, useState } from 'react';
import { Button, TextField, FormControl, Select, MenuItem } from '@mui/material';
import { Formik, useFormik } from 'formik';
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { updateDataSuscription } from '../../../redux/actions/suscriptionDonationActions';
import { createNewCustomer, createPlanWithFreeAmount, createSuscription } from '../../../epayco';
import { connect } from "react-redux";
import axios from 'axios';

const CustomerInformation = ({ setCurrentStep, selectedAmount }) => {
  const dispatch = useDispatch();
  const { suscriptionDonation } = useSelector((store) => store.suscriptionDonation);
  const [dataToIp, setDataToIp] = useState({})

  const initialValues = {
    name: "",
    lastName: "",
    documentType: "CC",
    documentNumber: "",
    cellphone: "",
  };

  const documentTypes = [
    { value: 'CC', label: 'Cédula de Ciudadanía' },
    { value: 'TI', label: 'Tarjeta de Identidad' },
    { value: 'PASSPORT', label: 'Pasaporte' },
  ];

  let updatedDataC = {}
  let customerUpdated = {}

  const [clientIP, setClientIP] = useState('');

  const fetchClientIP = async (data) => {
    try {
      const response = await axios.get('https://api.ipify.org?format=json');
      setClientIP(response.data.ip);
    } catch (error) {
      console.log('Error al obtener la dirección IP del cliente:', error);
    }
  };

  useEffect(() => {
    fetchClientIP();
  }, []);

  console.log(clientIP);

  const sendForm = async (data) => {

    setDataToIp(data)

    fetchClientIP(data); 

    updatedDataC = {
      ...suscriptionDonation,
      ...data,
      ip: clientIP,
    };
    if (Object.keys(updatedDataC).length > 0) {
      const customerResponse = await createNewCustomer(updatedDataC);
      customerUpdated = {
        ...suscriptionDonation,
        ...customerResponse,
      }


      dispatch(updateDataSuscription({ customerInfoForm: updatedDataC }));

      console.log(updatedDataC);
      console.log(suscriptionDonation);


      dispatch(updateDataSuscription({ customerInfo: customerUpdated }));

      console.log(customerUpdated);

      const planResponse = await createPlanWithFreeAmount(`${updatedDataC.documentNumber}`, selectedAmount);
      dispatch(updateDataSuscription({ planInfo: planResponse }));

      setCurrentStep("confirmation");
      //handleClose();
    }
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      name: Yup.string().matches(/^[a-zA-Z\s']+$/, 'El nombre debe contener solo letras')
        .min(3, 'El nombre debe tener al menos 3 caracteres.')
        .max(15, 'El nombre no debe tener más de 15 caracteres.')
        .required('El nombre es obligatorio.'),
      lastName: Yup.string().matches(/^[a-zA-Z\s']+$/, 'El apellido debe contener solo letras')
        .min(5, 'El apellido debe tener al menos 3 caracteres.')
        .max(15, 'El apellido no debe tener más de 15 caracteres.')
        .required('El apellido es obligatorio.'),
      documentType: Yup.string().required("Debes seleccionar un tipo de documento."),
      documentNumber: Yup.string()
        .matches(/^[0-9]+$/, 'El número de documento debe contener solo números')
        .min(4, 'El número de documento debe tener al menos 10 caracteres')
        .required('El número de documento es obligatorio'),
    }),
    onSubmit: sendForm,
  });

  return (

    <>
      <div className='formDonationsRecurrent__stepOne'>
        {/* Título y descripción del paso */}
      </div>
      <form onSubmit={handleSubmit} className='formDonationsRecurrent'>
        <TextField
          id="outlined-password-input"
          label="Nombre"
          name="name"
          onChange={handleChange}
          value={values.name}
          error={errors.name}
          helperText={errors.name}
        />
        <TextField
          id="outlined-password-input"
          label="Apellido"
          name="lastName"
          onChange={handleChange}
          value={values.lastName}
          error={errors.lastName}
          helperText={errors.lastName}
        />
        <div className='customerInformation__document'>
          <Select
            id="outlined-password-input"
            name="documentType"
            onChange={handleChange}
            value={values.documentType}
            error={errors.documentType}
          >
            {documentTypes.map((type) => (
              <MenuItem key={type.value} value={type.value}>
                {type.label}
              </MenuItem>
            ))}
          </Select>
          <TextField
            label="Número de documento"
            name="documentNumber"
            onChange={handleChange}
            value={values.documentNumber}
            error={errors.documentNumber}
            helperText={errors.documentNumber}
          />
        </div>
        <TextField
          label="Número de móvil"
          name="cellphone"
          onChange={handleChange}
          value={values.cellphone}
          error={errors.cellphone}
          helperText={errors.cellphone}
        />
        <Button type="submit" className='formDonationsRecurrent__btnContinue'>
          Continuar
        </Button>
      </form>
    </>
  );
};

export default CustomerInformation;
