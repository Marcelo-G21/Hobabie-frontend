import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import NextLink from "next/link"
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { UiContext } from "../../context";
/* import { ReactComponent as Logo } from '../../public/logo.svg'; */

export const Navbar = () => {

  const { asPath, push } = useRouter();
  const { toggleSideMenu } = useContext( UiContext );

  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const onSearchTerm = () => {
      if( searchTerm.trim().length === 0 ) return;
      push(`/search/${ searchTerm }`);
  }

  return (
    <AppBar>
      <Toolbar>
        <NextLink href='/' passHref>
          <Link>
            <Typography variant='h1'>Hobabie</Typography>
          </Link>
        </NextLink>

        <Box flex={1} />

        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <NextLink href='/category/ropa' passHref>
            <Link>
              <Button>Ropa</Button>
            </Link>
          </NextLink>
          <NextLink href='/category/accesorios' passHref>
            <Link>
              <Button>Accesorios</Button>
            </Link>
          </NextLink>
          <NextLink href='/collections/pastel' passHref>
            <Link>
              <Button>Pastel Collection</Button>
            </Link>
          </NextLink>
          <NextLink href='/collections/dark' passHref>
            <Link>
              <Button>Dark Collection</Button>
            </Link>
          </NextLink>
          <NextLink href='/category/faq' passHref>
            <Link>
              <Button>FAQ</Button>
            </Link>
          </NextLink>
        </Box>

        <Box flex={1} />

        <NextLink href="/cart" passHref>
          <Link>
            <IconButton sx={{ mr:3 }}>
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>

        <Button onClick={ toggleSideMenu }>
          Menú
        </Button>

      </Toolbar>
    </AppBar>
  )
}
