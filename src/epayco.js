
//import { params_transaction } from './path/to/params_transaction';
//import { ePayco } from './path/to/ePayco';

const P_CUST_ID_CLIENTE = "936779";
const P_KEY = "54355433733cfdea3514765b57b65abac635d26c\n\n";
const PUBLIC_KEY = "856fc378f84069d4d0ba4174647eb794";
const PRIVATE_KEY = "863642a552fd0e5d7f8331170110be63";
const url_apify = "https://apify.epayco.co";
const token_apify = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGlmeWVQYXljb0pXVCIsInN1YiI6OTM2Nzc5LCJpYXQiOjE2ODkwMzk4ODUsImV4cCI6MTY4OTA0MzQ4NSwicmFuZCI6IjI3ZWVmYmJkMGYyMDg1Yjc2MWI1M2VhOGZlY2IxMzI1MjQyIiwicmVzIjpmYWxzZSwiaW5hIjpmYWxzZSwiZ3VpIjo1NDIxNzYsInV1aWQiOiI1YTc4Mzk4Zi1mYzRjLTQ4NDktYmYxYy1mMjY2MGZmM2FjNTIifQ.4UuSeOWgkcghssvAxA6a-pOOGIyEh4GCNKBwonwm7Nw";


// export const getDataEpayco = () => {

// fetch('https://yourbackend.com/session', {
//     method: "POST",
//     body: JSON.stringify({
//         ...params_transaction,
//     }),
//     headers: { "Content-type": "application/json; charset=UTF-8" }
// })
//     .then(response => response.json())
//     .then(({ data: { sessionId } }) => {
//         const handler = ePayco.checkout.configure({
//             sessionId,
//             external: false // external: true -> para checkout externo ó External: false => para iframe onePage
//         })
//         //open checkout
//         handler.openNew()
//     })
//     .catch(error => console.log(error))
// }
export const listTransactions = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token_apify}`);
  
    var raw = JSON.stringify({
      "filter": {
        "transactionInitialDate": "2020-01-01 00:00:00",
        "transactionEndDate": "2020-11-11 23:59:59"
      },
      "pagination": {
        "page": 1,
        "limit": 50
      }
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    fetch(`${url_apify}/transaction`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  

export const listPaymentLinks = async () => {
    try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token_apify}`);
  
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
  
   const response = await fetch(`${url_apify}/collection/link`, requestOptions)
   const result= await response.json();
      console.log(result);
}
      catch(error) {

       console.log('error', error);
      }
  }
  


export const getTransactionDetail = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${token_apify}`);
      
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      const response = await fetch(`${url_apify}/transaction/detail`, requestOptions);
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.log('error', error);
    }
  };
  