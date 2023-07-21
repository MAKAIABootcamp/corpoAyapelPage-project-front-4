import axios from "axios";

const url_sdk = "http://localhost:9000"

//*************************CREAR TOKEN DE TARJETA DE CREDITO**************************** */


export const createCardToken = async (data) => {
  try {
    const requestBody = {
        'card[number]': `${data.cardNumber}`,
        'card[exp_year]': `${data.expiryYear}`,
        'card[exp_month]': `${data.expiryMonth}`,
        'card[cvc]': `${data.codigoCVV}`,
        hasCvv: true
      };

    const response = await axios.post(`${url_sdk}/token/card`, requestBody);
    const result = response.data;
    console.log(result)
    return result;
  } catch (error) {
    console.log('error', error);
  }
};




//*************************CREAR CLIENTE**************************** */
export const createNewCustomer = async (data) => {
  try {
    const requestBody = {
      "token_card": `${data.cardToken.id}`,
      "name": `${data.name}`,
      "last_name": `${data.lastName}`, 
      "email": `${data.email}`,
      "default": true,
      "city": "",
      "address": "",
      "phone": "",
      "cell_phone": `${data.cellPhone}`
  };

    const response = await axios.post(`${url_sdk}/customer`, requestBody);
    const result = response.data;
   console.log(result)
    return result;
  } catch (error) {
    console.log('error', error);
  }
};




//*************************CREAR UN PLAN SELECCIONANDO EL MONTO**************************** */
export const createPlanWithFreeAmount = async (name, selectedAmount) => {
  try {
    const requestBody = {
      "id_plan": `${name}${selectedAmount}`,
      "name": `${name}`,
      "description": `${name}`,
      "amount": selectedAmount,
      "currency": "cop",
      "interval": "month",
      "interval_count": 1,
      "trial_days": 30
  };

    const response = await axios.post(`${url_sdk}/plan`, requestBody);
    const result = response.data;
   console.log(result)
    return result;
  } catch (error) {
    console.log('error', error);
  }
};



//*************************CREAR UNA SUSCRIPCIÓN**************************** */
export const createSuscription = async (data) => {
    console.log(data)
  try {
    const requestBody = {
      "id_plan": `${data.planInfo.data.id_plan}`,
      "customer": `${data.customerInfo.data.customerId}`,
      "token_card": `${data.cardToken.id}`,
      "doc_type": `${data.customerInfoForm.documentType}`,
      "doc_number": `${data.customerInfoForm.documentNumber}`,
      "url_confirmation": "https://ejemplo.com/confirmacion",
      "method_confirmation": "POST"
  };

    const response = await axios.post(`${url_sdk}/suscription`, requestBody);
    const result = response.data;
   console.log(result)
    return result;
  } catch (error) {
    console.log('error', error);
  }
};

//*************************PAGAR UNA SUSCRIPCIÓN**************************** */
export const paySuscription = async (data) => {
  console.log(data);
  try {
    const requestBody = {
      "id_plan": `${data.planInfo.data.id_plan}`,
      "customer": `${data.customerInfo.data.customerId}`,
      "token_card": `${data.cardToken.id}`,
      "doc_type": `${data.customerInfoForm.documentType}`,
      "doc_number": `${data.customerInfoForm.documentNumber}`,
      "ip": `${data.ip}`,
      "url_confirmation": "https://ejemplo.com/confirmacion",
      "method_confirmation": "POST"
  };

    const response = await axios.post(`${url_sdk}/pay/suscription`, requestBody);
    const result = response.data;
   console.log(result)
    return result;
  } catch (error) {
    console.log('error', error);
  }
};


//*************************CONSULTAR CLIENTES**************************** */
export const listCustomers = async () => {
try{
    const response = await axios.get(`${url_sdk}/list/customers`);
    const result = response.data;
   console.log(result)
    return result;
  } catch (error) {
    console.log('error', error);
  }
};


//*************************CANCELAR UNA SUSCRIPCIÓN EXISTENTE**************************** */
export const cancelSubscription = async (id_subscription) => {
  console.log(id_subscription);
  try {
    const response = await axios.get(`${url_sdk}/cancel/suscription?id_subscription=${id_subscription}`);
    const result = response.data;
    console.log(result);
    return result;
  } catch (error) {
    console.log('error', error);
  }
};


//*************************CONSULTAR PLANES**************************** */
export const listSubscriptions = async () => {
  try{
      const response = await axios.get(`${url_sdk}/list/subscription`);
      const result = response.data;
     console.log(result)
      return result;
    } catch (error) {
      console.log('error', error);
    }
  };



















