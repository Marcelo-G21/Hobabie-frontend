import { Typography, Grid, Card, CardMedia, CardActionArea } from '@mui/material'
import axios from 'axios'
import type { NextPage } from 'next'
import { ShopLayout } from '../components/layouts'
import { ProductList } from '../components/products'
import { useFetchUser } from '../context'
import { fetcher } from '../lib/api'

/* const Home: NextPage = (props) => { */

/* @ts-ignore */
const Home: NextPage = ({ products }) => {

/* 
console.log(products); */

const {user, loading } = useFetchUser();

  return (
   <ShopLayout user={user} title={'Hobabie - Home'} pageDescription={'Encuentra los mejores productos aquí'}>
     

<ProductList products={ products } />


   </ShopLayout>
  )
}

export default Home

export async function getStaticProps(){


  const productsResponse = await fetcher(`${process.env.NEXT_APP_STRAPI_URL}/productos?populate=*`);
  
  /* console.log(productsResponse); */

  return {
    props: {
      products: productsResponse.data
    }
  }
  /* const { data } = await axios.get( `${process.env.NEXT_STRAPI_URL}/productos?populate=*`)

  return {
    props: {
      data: data
    }
  }; */



}