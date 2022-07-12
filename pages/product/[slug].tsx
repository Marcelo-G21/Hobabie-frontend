import { Grid, Box, Typography, Button, Chip } from "@mui/material";
import React from "react";
import { ShopLayout } from "../../components/layouts";
import { ProductSlideshow, SizeSelector } from "../../components/products";
import { ItemCounter } from "../../components/ui";
import { useFetchUser } from "../../context";
import { fetcher } from "../../lib/api";


const Product = ({ product}) => {
    /* console.log(product[0].attributes.images) */
    const {user, loading } = useFetchUser();

    return (
    <ShopLayout user={user} title={"ABC"} pageDescription={product[0].attributes.description}>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={7} >
        <ProductSlideshow images={product[0].attributes.images} />
      </Grid>
      <Grid item xs={12} sm={5}>
        <Box display="flex" flexDirection="column">
          {/* Títulos */}
          <Typography variant="h1" component="h1">
            {product[0].attributes.title}
          </Typography>
          <Typography
            variant="subtitle1"
            component="h2"
          >{`$${(product[0].attributes.price).toLocaleString('es-CL')}`}</Typography>

          {/* Cantidad */}
          <Box sx={{ my: 2 }}>
            {" "}
            {/* my es margin y (eje y), significa que se aplica tanto arriba como abajo */}
            <Typography variant="subtitle2">Cantidad</Typography>
            <ItemCounter />
            {/* <SizeSelector
            sizes={ product[0].attributes.sizes}
            /> */}
          </Box>

          {/* Agregar al carrito */}
          <Button className="circular-btn">
            Agregar al carrito
          </Button>

          {/* <Chip label='No hay discponibles' color='error' variant='outlined' /> */}

          {/* Descripción */}
          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle2">Descripción</Typography>
            <Typography variant="body2">{product[0].attributes.description}</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </ShopLayout>
  );
};

export default Product;

export async function getServerSideProps({ params }){
  const { slug } = params;
  const productResponse = await fetcher(`${process.env.NEXT_APP_STRAPI_URL}/productos?filters[slug][$eq]=${slug}&populate=*`);
  return {
    props: {
      product: productResponse.data
    }
  }

}