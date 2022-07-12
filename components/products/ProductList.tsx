import { Grid } from "@mui/material";
import { FC } from "react";
import { IProduct } from "../../Interfaces";
import * as React from "react";
import { ProductCard } from "./ProductCard";


/* interface Props {
  products: IProduct[];
} */

/* export const ProductList: FC<Props> = ({ products }) => { */

export const ProductList = ({ products }) => {



  return (
    <Grid container spacing={4}>
      
      {products.map((product, id) => (
        <ProductCard 
            key={ id }
            product={ product }
        />
      ))}
    </Grid>
  );
};

