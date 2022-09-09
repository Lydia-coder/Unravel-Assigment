import React, { useCallback } from "react";
import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import SegmentOutlinedIcon from "@mui/icons-material/SegmentOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import InsertChartOutlinedOutlinedIcon from "@mui/icons-material/InsertChartOutlinedOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import { Outlet } from "react-router-dom";
import LoginDialog from "./LoginDialog";
import { useSelector } from "react-redux";
import { IRootState } from "../Store/Interfaces/StateInterface";

const Layout = () => {
  const [open, setOpen] = React.useState(false);
  const success = useSelector((state: IRootState) => state.login.success);
  const user = useSelector((state: IRootState) => state.login.userName);

  const onClose = useCallback(async () => {
    setOpen(false);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Stack direction="row" spacing={1}>
            <HomeIcon />
            <Typography variant="subtitle1">Home</Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <CategoryOutlinedIcon />
            <Typography variant="subtitle1">Products</Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <SegmentOutlinedIcon />
            <Typography variant="subtitle1">Content</Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <ShoppingCartOutlinedIcon />
            <Typography variant="subtitle1">Orders</Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <InsertChartOutlinedOutlinedIcon />
            <Typography variant="subtitle1">Reporting</Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <SettingsOutlinedIcon />
            <Typography variant="subtitle1">Settings</Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <AdminPanelSettingsOutlinedIcon />
            <Typography variant="subtitle1">Admin</Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <PersonIcon onClick={() => setOpen(true)} />
            {success ? (
              <Typography variant="subtitle1">{user}</Typography>
            ) : (
              <Typography variant="subtitle1">Login</Typography>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
      <main>
        <Outlet />
      </main>
      {open && <LoginDialog isOpen={open} onClose={onClose} />}
    </Box>
  );
};

export default Layout;
