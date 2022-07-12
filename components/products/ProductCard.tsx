import { Box, Card, CardActionArea, CardMedia, Grid, Typography, Link } from "@mui/material";
import { FC, useMemo, useState } from "react";
import NextLink from 'next/link';
import { IProduct } from "../../Interfaces";

    export const ProductCard = ({ product }) => {

        /* console.log(product.attributes.images.data[0].attributes.name) */

    return (
        <Grid item xs={6} sm={4}>
            <Card>
                <NextLink href={`product/` + product.attributes.slug} passHref>
                    <Link>
                        <CardActionArea>
                            <CardMedia
                                className='fadeIn'
                                component="img"
                                image={product.attributes.images.data[0].attributes.url}
                                alt={product.attributes.images.data[0].attributes.name}
                            />
                        </CardActionArea>
                    </Link>
                </NextLink>
            </Card>

            <Box sx={{ mt: 1 }} className="fadeIn">
                <Typography fontWeight={700}>{product.attributes.title}</Typography>
                <Typography fontWeight={500}>{`$${(product.attributes.price).toLocaleString('es-CL')}`}</Typography>
            </Box>
        </Grid>
    )
}
