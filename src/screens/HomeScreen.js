import products from "../data";
import React , {useEffect, useState} from 'react'
import './HomeScreen.css'
import ProductCard from "../components/ProductCard";
import axios from 'axios';

const HomeScreen = () => {

const [list, setList] = useState([]); // nie sakame da gi povleceme objektite od API, zatoa mora na pocetok da imame state kaj sto kako kako pocetna vrednost ke imame prazna niza

const fetchData = async () => {
    const {data} = await axios.get("https://fakestoreapi.com/products")
    setList(data);
    console.log(data)
}
// const fetchData = () => {
//     return fetch("https://fakestoreapi.com/products")
//     .then((response) => response.json)
//     .then((data)=> setList(data))
//     .then(console.log('ujfvjdfnvjdfk'))
// }
  useEffect(() => {
    fetchData();
  },[])

  return (
    <div className='products__wrapper'>
   {list.map((listItem) => (
    <ProductCard key={listItem.id} listItem={listItem}/>
   ))}
</div>
  )
}

export default HomeScreen
