import axios from "axios";

const P_CUST_ID_CLIENTE = "927115";
const P_KEY = "efbb4a968055b891305d4d18edbe0ee3e5423269\n\n";
const PUBLIC_KEY = "8ed7aef73ad73a63416e144acfc9b9a7";
const PRIVATE_KEY = "c853c136adce33b85843cab1ef67bec0";
const url_apify = "https://apify.epayco.co";
const token_apify = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGlmeWVQYXljb0pXVCIsInN1YiI6OTI3MTE1LCJpYXQiOjE2ODkzOTM4OTgsImV4cCI6MTY4OTM5NzQ5OCwicmFuZCI6IjY4ZTVkZmI3YWRiZGI1OTVmODlhYTBhZjkxYmRiMzljODUzMyIsInJlcyI6ZmFsc2UsImluYSI6ZmFsc2UsImd1aSI6NTMyNzI3LCJ1dWlkIjoiOTkwNDk4NTItYzc3Yy00MTc0LTk4ZTQtMjY4NTVlNzYxNDk3In0.MOgX8JG0sbWmONlbmbkw1KK7xssn4Bi105jf6c54ah4";
const url_sdk = "http://localhost:9000"
let tokenCard = ""
let planId = ""
let idCustomer= ""

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
    // tokenCard = result.id
    return result;
  } catch (error) {
    console.log('error', error);
  }
};
// Crea una función async autoejecutable



//*************************CREAR CLIENTE**************************** */
export const createNewCustomer = async (data) => {
  try {
    const requestBody = {
      "token_card": `${data.cardToken.id}`,
      "name": `${data.name}`,
      "last_name": `${data.lastName}`, 
      "email": `${data.email.email}`,
      "default": true,
      "city": "",
      "address": "",
      "phone": "",
      "cell_phone": `${data.cellPhone}`
  };

    const response = await axios.post(`${url_sdk}/customer`, requestBody);
    const result = response.data;
   console.log(result)
   //idCustomer = result.customerId
  //  console.log(idCustomer)
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


//createPlanWithFreeAmount('donacionLibre', 55000);




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

    const response = await axios.post(`${url_sdk}/pay/suscription`, requestBody);
    const result = response.data;
   console.log(result)
    return result;
  } catch (error) {
    console.log('error', error);
  }
};

























