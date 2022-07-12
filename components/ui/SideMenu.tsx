import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";

import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import AdminPanelSettings from "@mui/icons-material/AdminPanelSettings";
import CategoryOutlined from "@mui/icons-material/CategoryOutlined";
import ConfirmationNumberOutlined from "@mui/icons-material/ConfirmationNumberOutlined";
import EscalatorWarningOutlined from "@mui/icons-material/EscalatorWarningOutlined";
import FemaleOutlined from "@mui/icons-material/FemaleOutlined";
import LoginOutlined from "@mui/icons-material/LoginOutlined";
import MaleOutlined from "@mui/icons-material/MaleOutlined";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import VpnKeyOutlined from "@mui/icons-material/VpnKeyOutlined";
import { useRouter } from "next/router";
import { UiContext, useUser } from "../../context";
import { useContext, useState } from "react";
import {
  Checkroom,
  Circle,
  CircleOutlined,
  HelpCenter,
  ShoppingBagOutlined,
  WorkOutline,
} from "@mui/icons-material";
import { unsetToken } from "../../lib/auth";

export const SideMenu = () => {

  const { user, loading } = useUser();

  const router = useRouter();
  const { isMenuOpen, toggleSideMenu } = useContext(UiContext);

  const [searchTerm, setSearchTerm] = useState("");

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;
    navigateTo(`/search/${searchTerm}`);
  };

  const navigateTo = (url: string) => {
    toggleSideMenu();
    router.push(url);
  };


  const logout = () => {
    unsetToken();
  }

  console.log(user);

  return (
    <Drawer
      open={isMenuOpen} //visibilidad aquí :p
      anchor="right"
      sx={{ backdropFilter: "blur(4px)", transition: "all 0.5s ease-out" }}
      onClose={toggleSideMenu}
    >
      <Box sx={{ width: 250, paddingTop: 5 }}>
        <List>
          <ListItem>
            <Input
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => (e.key === "Enter" ? onSearchTerm() : null)}
              type="text"
              placeholder="Buscar..."
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility">
                    <SearchOutlined />
                  </IconButton>
                </InputAdornment>
              }
            />
          </ListItem>

          {!loading &&
            (user ? (
              <>
              <ListItem button>
                <ListItemIcon>
                  <AccountCircleOutlined />
                </ListItemIcon>
                <ListItemText primary={"Perfil"} />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <ConfirmationNumberOutlined />
                </ListItemIcon>
                <ListItemText primary={"Mis Ordenes"} />
              </ListItem>

              </>
            ) : (
              ""
            ))}

          <ListItem
            button
            sx={{ display: { xs: "", sm: "none" } }}
            onClick={() => navigateTo("/ropa")}
          >
            <ListItemIcon>
              <Checkroom />
            </ListItemIcon>
            <ListItemText primary={"Ropa"} />
          </ListItem>

          <ListItem
            button
            sx={{ display: { xs: "", sm: "none" } }}
            onClick={() => navigateTo("/accesorios")}
          >
            <ListItemIcon>
              <ShoppingBagOutlined />
            </ListItemIcon>
            <ListItemText primary={"Accesorios"} />
          </ListItem>

          <ListItem button sx={{ display: { xs: "", sm: "none" } }}>
            <ListItemIcon>
              <CircleOutlined />
            </ListItemIcon>
            <ListItemText primary={"Pastel Collection"} />
          </ListItem>

          <ListItem button sx={{ display: { xs: "", sm: "none" } }}>
            <ListItemIcon>
              <Circle />
            </ListItemIcon>
            <ListItemText primary={"Dark Collection"} />
          </ListItem>

          <ListItem button sx={{ display: { xs: "", sm: "none" } }}>
            <ListItemIcon>
              <HelpCenter />
            </ListItemIcon>
            <ListItemText primary={"FAQ"} />
          </ListItem>

          {!loading && !user ? (
            <ListItem 
            button
            onClick={() => navigateTo("/auth/login")}>
            <ListItemIcon>
              <VpnKeyOutlined />
            </ListItemIcon>
            <ListItemText primary={"Ingresar"} />
          </ListItem>
          ) : (
            ''
          )}

          {!loading &&
          (user ? (
            <ListItem 
              button
              onClick={logout}>
                <ListItemIcon>
                  <LoginOutlined />
                </ListItemIcon>
                <ListItemText primary={"Salir"} />
              </ListItem>
          ) : (
            ""
          ))}

         
        </List>
      </Box>
    </Drawer>
  );
};
