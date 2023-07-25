import React from 'react'

const ProgressBar = ({ progress, goal, totalDonors, height }) => {
    const containerStyles = {
        width: '100%',
        backgroundColor: '#777779',
        borderRadius: '20px',
        height: `${height}px`,
        position: 'relative',
    };

    const fillerStyles = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: '#6EBE4A',
        borderRadius: '20px',
        position: 'absolute',
        top: 0,
        left: 0,
    };

    const imageStyles = {
        width: '50px',
        height: '50px',
        position: 'absolute',
        top: 8,
        left: `${progress}%`,
        transform: 'translate(-50%, -50%)',
    };

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}></div>
            <img src="https://res.cloudinary.com/dgnwqr93n/image/upload/v1689223287/logo-blanco_x4th99_1_1_jvvols_1_ieflxf.svg" alt="Imagen de progreso" style={imageStyles} />
        </div>
    );
};


export default ProgressBar