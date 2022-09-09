import React from "react";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";
import { IRootState } from "../Store/Interfaces/StateInterface";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
};
const LoginDialog = (props: DialogProps) => {
  const { isOpen, onClose } = props;
  const name = useSelector((state: IRootState) => state.login.userName);
  const password = useSelector((state: IRootState) => state.login.userName);

  return (
    <Dialog open={isOpen} onClose={() => onClose()}>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <LoginForm name={name} password={password} onClose={onClose} />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose()}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};
export default LoginDialog;
