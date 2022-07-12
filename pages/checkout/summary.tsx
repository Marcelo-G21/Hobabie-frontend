import NextLink from 'next/link';
import {Grid,Typography,Card,CardContent,Divider,Box,Button, Link,} from "@mui/material";
import { CartList, OrderSummary } from "../../components/cart";
import { ShopLayout } from "../../components/layouts/ShopLayout";

const SummaryPage = () => {
  return (
    <ShopLayout
      title="Resumen de orden"
      pageDescription={"Resumen de la orden"}
    >
      <Typography variant="h1" component="h1">
        Resumen de la orden
      </Typography>

      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Resumen (3 productos)</Typography>
              <Divider sx={{ my: 1 }} />

              <Box display='flex' justifyContent='space-between'>
                <NextLink href='/checkout/address' passHref>
                    <Link underline='always'>
                        Editar
                    </Link>
                </NextLink>
            </Box>

            <Typography variant='subtitle1'>Dirección de entrega</Typography>
            <Typography>Marcelo García</Typography>
            <Typography>123 Calle Falsa</Typography>
            <Typography>Santiago</Typography>
            <Typography>Padre Hurtado</Typography>
            <Typography>+569 12345678</Typography>
            <Typography>srtelo22@gmail.com</Typography>

            <Divider sx={{ my: 1 }} />

            <Box display='flex' justifyContent='space-between'>
                <NextLink href='/checkout/address' passHref>
                    <Link underline='always'>
                        Editar
                    </Link>
                </NextLink>
            </Box>

              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                <Button color="secondary" className="circular-btn" fullWidth>
                  Confirmar orden
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default SummaryPage