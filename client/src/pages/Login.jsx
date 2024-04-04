import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { useInputValidation } from "use-input-validation";
import { usernameValidator } from '../utils/Validators';
import { useFileHandler } from '6pp';
import { bgGradient } from '../constants/color';



const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleLogin = () => setIsLogin((prev) => !prev);

    const name = useInputValidation("");
    const bio = useInputValidation("");
    const username = useInputValidation("",usernameValidator);
    const password = useInputValidation("");
    const avatar = useFileHandler('single')
    const handleLogin = (e) => {
        e.preventDefault();
    }

    const handleSignUp = (e) => {
        e.preventDefault();
    }

  return (
    <div  style={{
        backgroundImage: bgGradient,
      }}>
        <Container component={"main"} maxWidth="xs" sx={{height: "100vh",display: "flex",justifyContent: "center",alignItems: "center"}}>
            <Paper  elevation={2} sx={{padding: 1, display: "flex", flexDirection: "column",alignItems: "center",}}>
                {
                    isLogin ? (
                        <>
                            <Typography variant="h5">Login</Typography>
                            <form style={{ width: "100%",marginTop: "1rem",}}
                                onSubmit={handleLogin}
                            >
                                <TextField
                                    required
                                    fullWidth
                                    label="Username"
                                    margin="normal"
                                    variant="outlined"
                                    value={username.value}
                                    onChange={(e) => username.setValue(e.target.value)}
                                />

                                <TextField
                                    required
                                    fullWidth
                                    label="Password"
                                    type='password'
                                    margin="normal"
                                    variant="outlined"
                                    value={password.value}
                                    onChange={(e) => password.setValue(e.target.value)}
                                />

                                <Button
                                    sx={{
                                        marginTop: "1rem",
                                    }}
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    fullWidth
                                    // disabled={isLoading}
                                    >
                                    Login
                                </Button>

                                <Typography textAlign={"center"} m={"1rem"}>
                                    OR
                                </Typography>
                
                                <Button
                                    // disabled={isLoading}
                                    fullWidth
                                    variant="text"
                                    onClick={toggleLogin}
                                >
                                Sign Up Instead
                                </Button>
                            </form>
                        </>
                    ) : (
                    <>
                            <Typography variant="h5">Register</Typography>
                            <form style={{ width: "100%",marginTop: "1rem",}}
                                onSubmit={handleSignUp}
                            >
                                <Stack position={"relative"} width={"5rem"} margin={"auto"}>
                                    <Avatar
                                        sx={{
                                        width: "5rem",
                                        height: "5rem",
                                        objectFit: "contain",
                                        }}
                                        src={avatar.preview}
                                    />

                                    <IconButton
                                        sx={{
                                        size: ".5rem",    
                                        position: "absolute",
                                        bottom: "-0.6rem",
                                        right: "0",
                                        color: "white",
                                        bgcolor: "rgba(0,0,0,0.5)",
                                        ":hover": {
                                            bgcolor: "rgba(0,0,0,0.7)",
                                        },
                                        }}
                                        component="label"
                                    >
                                        <>
                                            <CameraAltIcon />
                                            <VisuallyHiddenInput
                                                type="file"
                                                onChange={avatar.changeHandler}
                                            />
                                        </>
                                    </IconButton>
                                </Stack>

                                {avatar.error && (
                                    <Typography
                                        m={"8px auto"}
                                        width={"fit-content"}
                                        display={"block"}
                                        color="error"
                                        variant="caption"
                                    >
                                        {avatar.error}
                                    </Typography>
                                )}
                                <TextField
                                    required
                                    fullWidth
                                    label="Name"
                                    margin="normal"
                                    variant="outlined"
                                    value={name.value}
                                    onChange={(e) => name.setValue(e.target.value)}
                                />

                                <TextField
                                    required
                                    fullWidth
                                    label="Bio"
                                    margin="normal"
                                    variant="outlined"
                                    value={bio.value}
                                    onChange={(e) => bio.setValue(e.target.value)}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    label="Username"
                                    margin="normal"
                                    variant="outlined"
                                    value={username.value}
                                    onChange={(e) => username.setValue(e.target.value)}
                                />

                                {username.error && (
                                    <Typography color="error" variant="caption">
                                        {username.error}
                                    </Typography>
                                )}

                                <TextField
                                    required
                                    fullWidth
                                    label="Password"
                                    type='password'
                                    margin="normal"
                                    variant="outlined"
                                    value={password.value}
                                    onChange={(e) => password.setValue(e.target.value)}
                                />

                                <Button
                                    sx={{
                                        marginTop: "1rem",
                                    }}
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    fullWidth
                                    // disabled={isLoading}
                                    >
                                    Register
                                </Button>

                                <Typography textAlign={"center"} m={"10px"}>
                                    OR
                                </Typography>
                
                                <Button
                                    // disabled={isLoading}
                                    fullWidth
                                    variant="text"
                                    onClick={toggleLogin}
                                >
                                    Login Instead
                                </Button>
                            </form>
                        </>
                    )
                }
            </Paper>
        </Container>
    </div>
  )
}

export default Login