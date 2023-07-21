// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setLoadingStatusFalse } from '../../redux/actions/actions';

// const AppLoader = ({ children }) => {
//     const { loading } = useSelector((store) => store.loading);
//      const dispatch = useDispatch();

//   useEffect(() => {
//     // Simulación de carga de datos
//     setTimeout(() => {
//         dispatch(setLoadingStatusFalse());
//     }, 1000);
//   }, []);

//   return (
//     <>
//       {loading ? (
//         // Mostrar el loader mientras se carga
//         <div className="loader">Cargando...</div>
//       ) : (
//         // Mostrar el contenido de la aplicación cuando los datos estén cargados
//         <>
//         {children}
//         </>
//       )}
//     </>
//   );
// };

// export default AppLoader;
