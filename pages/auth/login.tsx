import NextLink from 'next/link';
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { AuthLayout } from '../../components/layouts'
import { fetcher } from '../../lib/api';
import { setToken } from '../../lib/auth';

const LoginPage = () => {

    
    const[data, setData] = useState({
        identifier: '',
        password: ''
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const responseData = await fetcher(
            `${process.env.NEXT_APP_STRAPI_URL}/auth/local`,
            {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            }, 
            body: JSON.stringify({ 
                identifier: data.identifier, 
                password: data.password,
            }),
        });
        setToken(responseData);
    };


  return (
    <AuthLayout title='Ingresar'>
        <form onSubmit={handleSubmit}>
        <Box sx={{ width:350, paddin: '10px 20px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h1' component='h1'>Iniciar Sesión</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField name='identifier' label='Correo' variant='filled' fullWidth onChange={handleChange}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField name='password' label='Contraseña' type='password' variant='filled' fullWidth onChange={handleChange}/>
                </Grid>
                <Grid item xs={12}>
                    <Button type='submit' color='secondary' className='circular-btn' size='large' fullWidth>
                        Ingresar
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <NextLink href='/auth/register' passHref>
                        <Link underline='always' display='flex' justifyContent='end'>
                            ¿No tienes cuenta?
                        </Link>
                    </NextLink>
                </Grid>
            </Grid>
        </Box>
        </form>

    </AuthLayout>
  )
}

export default LoginPage