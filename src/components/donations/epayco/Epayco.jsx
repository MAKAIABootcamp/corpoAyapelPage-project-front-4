import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateDataSuscription } from "../redux/actions/suscriptionDonationActions";

const Epayco = () => {
  const dispatch = useDispatch();
  const { suscriptionDonation } = useSelector((store) => store.suscriptionDonation);
  console.log(suscriptionDonation);

  const P_CUST_ID_CLIENTE = "927115";
  const P_KEY = "efbb4a968055b891305d4d18edbe0ee3e5423269\n\n";
  const PUBLIC_KEY = "8ed7aef73ad73a63416e144acfc9b9a7";
  const PRIVATE_KEY = "c853c136adce33b85843cab1ef67bec0";
  const url_apify = "https://apify.epayco.co";
  const token_apify = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGlmeWVQYXljb0pXVCIsInN1YiI6OTI3MTE1LCJpYXQiOjE2ODkzOTM4OTgsImV4cCI6MTY4OTM5NzQ5OCwicmFuZCI6IjY4ZTVkZmI3YWRiZGI1OTVmODlhYTBhZjkxYmRiMzljODUzMyIsInJlcyI6ZmFsc2UsImluYSI6ZmFsc2UsImd1aSI6NTMyNzI3LCJ1dWlkIjoiOTkwNDk4NTItYzc3Yy00MTc0LTk4ZTQtMjY4NTVlNzYxNDk3In0.MOgX8JG0sbWmONlbmbkw1KK7xssn4Bi105jf6c54ah4";
  const url_sdk = "http://localhost:9000";
  let tokenCard = "";
  let planId = "";
  let idCustomer = "";

  useEffect(() => {
    // Lógica que necesitas ejecutar al cargar el componente
    createCardToken(suscriptionDonation)
    createPlanWithFreeAmount('donacionLibre', 55000);
  }, []);

  const createCardToken = async (data) => {
    try {
      const requestBody = {
        'card[number]': `${data.cardNumber}`,
        'card[exp_year]': "2025",
        'card[exp_month]': "12",
        'card[cvc]': "123",
        hasCvv: true
      };

      const response = await axios.post(`${url_sdk}/token/card`, requestBody);
      const result = response.data;
      console.log(result);
      tokenCard = result.id;
      return result;
    } catch (error) {
      console.log('error', error);
    }
  };

  const createNewCustomer = async (tokenCard) => {
    try {
      const requestBody = {
        "token_card": tokenCard,
        "name": "maria",
        "last_name": "aaanto", 
        "email": "s1234@payco.co",
        "default": true,
        "city": "Bogota",
        "address": "Cr 4 # 55 36",
        "phone": "3005234321",
        "cell_phone": "3010000001"
      };

      const response = await axios.post(`${url_sdk}/customer`, requestBody);
      const result = response.data;
      idCustomer = result.customerId;
      return result;
    } catch (error) {
      console.log('error', error);
    }
  };

  const createPlanWithFreeAmount = async (planId, amountToDonate) => {
    try {
      const requestBody = {
        "id_plan": `${planId}${amountToDonate}`,
        "name": "Course react js 3",
        "description": "Course react and redux",
        "amount": `${amountToDonate}`,
        "currency": "cop",
        "interval": "month",
        "interval_count": 1,
        "trial_days": 30
      };

      const response = await axios.post(`${url_sdk}/plan`, requestBody);
      const result = response.data;
      console.log(result);
      return result;
    } catch (error) {
      console.log('error', error);
    }
  };

  const createSuscription = async (planId, idCustomer, token_card) => {
    try {
      const requestBody = {
        "id_plan": `${planId}`,
        "customer": `${idCustomer}`,
        "token_card": `${token_card}`,
        "doc_type": "CC",
        "doc_number": "5234568",
        "url_confirmation": "https://ejemplo.com/confirmacion",
        "method_confirmation": "POST"
      };

      const response = await axios.post(`${url_sdk}/suscription`, requestBody);
      const result = response.data;
      console.log(result);
      return result;
    } catch (error) {
      console.log('error', error);
    }
  };

  const paySuscription = async (planId, idCustomer, token_card) => {
    try {
      const requestBody = {
        "id_plan": `${planId}`,
        "customer": `${idCustomer}`,
        "token_card": `${token_card}`,
        "doc_type": "CC",
        "doc_number": "5234568",
        "url_confirmation": "https://ejemplo.com/confirmacion",
        "method_confirmation": "POST"
      };

      const response = await axios.post(`${url_sdk}/pay/suscription`, requestBody);
      const result = response.data;
      console.log(result);
      return result;
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div>
      {/* Contenido del componente */}
    </div>
  );
};

export default Epayco;
