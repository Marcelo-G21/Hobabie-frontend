import NextLink from 'next/link';
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { AuthLayout } from '../../components/layouts'


const RegisterPage = () => {
  return (
    <AuthLayout title='Registrarse'>
        <Box sx={{ width:350, paddin: '10px 20px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h1' component='h1'>Crear cuenta</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField label='Nombre completo' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField label='Correo' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField label='Contraseña' type='password' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <Button color='secondary' className='circular-btn' size='large' fullWidth>
                        Registrar
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <NextLink href='/auth/login' passHref>
                        <Link underline='always' display='flex' justifyContent='end'>
                            ¿Ya tienes cuenta?
                        </Link>
                    </NextLink>
                </Grid>
            </Grid>
        </Box>
    </AuthLayout>
  )
}

export default RegisterPage