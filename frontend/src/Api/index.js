import axios from 'axios';

const URL = "http://localhost:5000";
const PRODUCTS = `${URL}/api/products/`;
 
export async function getProducts() {
	try {
	const response = await axios.get(PRODUCTS)
	return response.data
	} catch (error) {
	console.log(error);
	}
  }

//   export async function getSingleProduct(id) {
// 	try {
// 	  const response = await axios.get(`${PRODUCTS}${id}`)
// 	  return response.data
// 	} catch (error) {
// 	  console.log(error)
// 	}
//   }
  

//  export function getProducts(){
// 	axios.get('http://localhost:5000/api/products/_id')
//     .then(response => console.log(response.data))
// }