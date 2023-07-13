import React from 'react'

const CtaDonations = ({ onClick, label, width, height, borderRadius, isSelected, color, labelAfter }) => {
    const handleClick = () => {
        if (isSelected === null) {
            alert('Seleccionar monto');
          } else {
            onClick();
          }
      };

    const buttonStyle = {
        width: width,
        height: height,
        borderRadius: borderRadius,
        color: isSelected ? '#FFF' : '#FFF',
        backgroundColor: isSelected ? 'orange' : '#6EBE4A', 
        transform: isSelected ? 'translateY(5px) scale(1.25)' : '',
      };
  
  
    return (
    <>
     <button className="cta-donations-btn" style={buttonStyle} onClick={handleClick}>
     {!isSelected ? label : labelAfter || label} 
    </button>
</>
  )
}

export default CtaDonations