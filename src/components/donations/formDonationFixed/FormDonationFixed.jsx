import React from 'react';
import { Helmet } from 'react-helmet';

const FormDonationFixed = ({ amount }) => {
  return (
    <div>
      <Helmet>
        <script src="https://checkout.epayco.co/checkout.js"></script>
      </Helmet>
      <form>
        <button
          className="epayco-button"
          data-epayco-key="8ed7aef73ad73a63416e144acfc9b9a7"
          data-epayco-amount={amount}
          data-epayco-tax="0.00"
          data-epayco-tax-ico="0.00"
          data-epayco-tax-base={amount}
          data-epayco-name="Donación a CorpoAyapel"
          data-epayco-description="Donación a CorpoAyapel"
          data-epayco-currency="cop"
          data-epayco-country="CO"
          data-epayco-test="false"
          data-epayco-external="false"
          data-epayco-response=""
          data-epayco-confirmation=""
          data-epayco-button="https://multimedia.epayco.co/dashboard/btns/btn5.png"
        >
        </button>
      </form>
    </div>
  );
};

export default FormDonationFixed;
