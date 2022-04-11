import React from "react";
import {
  DesField,
  FLink,
  SLBox,
  SLField,
  SLTitle,
  SLForm,
  BtnContainer,
} from "./LogReg.elements";
import { Button,InfoIcon,VerticalL,Title } from "../../Styles";
import { Grid, Box, Checkbox } from "@mui/material";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "../../Styles/Style.css";
import {InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const LogReg = () => {
  const [showSLBox, setSLBox] = React.useState(false);
  const [switchSL, setSwitchSL] = React.useState(false);
  const [showSBtn, setShowSBtn] = React.useState(true);
  const [swtichSLTxt, setSwitchSLTxt] = React.useState("Login");

  const [showPassword, setShowPassword] = React.useState(false);
const handleClickShowPassword = () => setShowPassword(!showPassword);

  const buttonHandler = () => {
    setSLBox(!showSLBox);
  };

  return (
    <Box mx={4} mt={12} sx={{ flexGrow: 1 }}>
      <InfoIcon icon={faInfoCircle} />

      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            sx={{
              height: { xs: 110, sm: 150, md: 200 },
              width: { xs: 110, sm: 150, md: 200 },
              display: "inline-flex",
            }}
            src="https://pngimg.com/uploads/brain/brain_PNG70.png"
          />
          <Title>BrainShut</Title>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "top",
          }}
        >
          <Box>
            {showSBtn ? (
              <Button
                style={{ paddingLeft: 70, paddingRight: 70 }}
                onClick={() => {
                  buttonHandler();
                  setShowSBtn(false);
                }}
              >
                Start Game
              </Button>
            ) : null}

            {showSLBox ? (
              <SLBox>
                <div style={{ display: "flex" }}>
                  <SLTitle
                    onClick={() => {
                      setSwitchSL(false);
                      setSwitchSLTxt("Login");
                    }}
                    style={{ marginRight: 30 }}
                  >
                    Login
                  </SLTitle>
                  <SLTitle
                    onClick={() => {
                      setSwitchSL(true);
                      setSwitchSLTxt("Sign Up");
                    }}
                    style={{ marginLeft: 30 }}
                  >
                    Sign Up
                  </SLTitle>
                </div>

                {switchSL ? (
                  <SLForm>
                    <SLField
                      placeholder="Username"
                      variant="standard"
                      InputProps={{ disableUnderline: true }}
                    />
                    <SLField
                      placeholder="Email"
                      variant="standard"
                      InputProps={{ disableUnderline: true }}
                    />
                    <SLField
                      placeholder="Password"
                      variant="standard"
                      type={showPassword ? "text" : "password"} // <-- This is where the magic happens
                      InputProps={{ // <-- This is where the toggle button is added.
                        disableUnderline: true,
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                            >
                              {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />
                  </SLForm>
                ) : (
                  <SLForm>
                    <SLField
                      placeholder="Username or Email"
                      variant="standard"
                      InputProps={{ disableUnderline: true }}
                    />
                      <SLField
                      placeholder="Password"
                      variant="standard"
                      type={showPassword ? "text" : "password"} // <-- This is where the magic happens
                      InputProps={{ // <-- This is where the toggle button is added.
                        disableUnderline: true,
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                            >
                              {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />
                    <div
                      style={{
                        marginTop: 44,
                        fontSize: 13.5,
                      }}
                    >
                      <Grid container spacing={0}>
                        <Grid item xs={6} style={{
                              display: "flex",
                              alignItems:"center",
                            }}>
                          <Checkbox
                            style={{
                              display: "inline",
                            }}
                          />
                          Remeber
                        </Grid>
                        <Grid item xs={6} style={{
                              display: "flex",
                              alignItems:"center",
                              justifyContent:"flex-end",
                            }}>
                          <FLink href="www.google.com">Forgot Password?</FLink>
                        </Grid>
                      </Grid>
                    </div>
                  </SLForm>
                )}

                <BtnContainer>
                  <Button
                    style={{ marginRight: 10 }}
                    onClick={() => {
                      buttonHandler();
                      setShowSBtn(true);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button style={{ marginLeft: 10 }}>{swtichSLTxt}</Button>
                </BtnContainer>
              </SLBox>
            ) : (
              <></>
            )}
          </Box>
        </Grid>
        <Grid item xs={0} md={1} className="gridCenter">
              <VerticalL></VerticalL>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className="gridCenter"
        >
          <DesField>
            Fiction-writing also has modes: action, exposition, description,
            dialogue, summary, and transition.[4] Author Peter Selgin refers to
            methods, including action, dialogue, thoughts, summary, scenes, and
            description.[5] Currently, there is no consensus within the writing
            community regarding the number and composition of fiction-writing
            modes and their uses. Description is the fiction-writing mode for
            transmitting a mental image of the particulars of a story. Together
            with dialogue, narration, exposition, and summarization, description
            is one of the most widely recognized of the fiction-writing modes.
            As stated in Writing from A to Z, edited by Kirk Polking,
            description is more than the amassing of details; it is bringing
            something to life by carefully choosing and arranging words and
            phrases to produce the desired effect.[6] The most appropriate and
            effective techniques for presenting description are a matter of
            ongoing discussion among writers and writing coaches.
          </DesField>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LogReg;
