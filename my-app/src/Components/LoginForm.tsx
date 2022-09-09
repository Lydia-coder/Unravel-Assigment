import React, { useCallback, useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import { actions } from "../Store/Actions/LoginActions";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../Store/Interfaces/StateInterface";

export type LoginValues = {
  name: string;
  password: string;
  onClose: () => void;
};

const LoginForm = (props: LoginValues) => {
  const { name, password, onClose } = props;
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const success = useSelector((state: IRootState) => state.login.success);

  const handleChangeUserName = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setUserName(event.target.name);
  };

  const handleChangePassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassWord(event.target.name);
  };

  const onSubmit = useCallback(async () => {
    dispatch(actions.loginRequest({ userName: userName, passWord: passWord }));
    if (success) {
      await onClose();
    }
  }, []);

  return (
    <Box>
      <Stack direction="column" spacing={2} justifyContent="space-between">
        <TextField
          name={name}
          label="User name"
          type="text"
          fullWidth
          variant="outlined"
          onChange={handleChangeUserName}
        />
        <TextField
          onChange={handleChangePassword}
          name={password}
          type="password"
          fullWidth
          variant="outlined"
        />

        <Button onClick={() => onSubmit()} type="submit">
          Login
        </Button>
      </Stack>
    </Box>
  );
};

export default LoginForm;
