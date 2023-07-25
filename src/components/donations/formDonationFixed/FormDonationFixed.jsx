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
          data-epayco-key="26a1a9519d718ad497a047739d3fc952"
          data-epayco-amount={amount}
          data-epayco-tax="0.00"
          data-epayco-tax-ico="0.00"
          data-epayco-tax-base={amount}
          data-epayco-name="Donación única vez a CorpoAyapel"
          data-epayco-description="Donación única vez a CorpoAyapel"
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