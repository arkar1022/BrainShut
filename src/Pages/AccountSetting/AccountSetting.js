import React from "react";
import {
  UserInfoContainer,
  UserPic,
  TxtBox,
  Modal,
  TxtField,
  CrossIcon,
  ModalBtn,
  PicEditIcon,
  ScoreContainer,
  Season,
  Score,
  ScoreTxt,
  ScrollBox,
} from "./AccountSetting.elements";
import {
  InfoIcon,
  Button,
  ArrowIcon,
  VerticalL,
  BulletIcon,
} from "../../Styles";
import { Grid, Box, Checkbox } from "@mui/material";
import {
  faInfoCircle,
  faArrowLeft,
  faXmark,
  faCircle,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import "../../Styles/Style.css";
import { InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccountSetting = () => {
  const [showEditModal, setShowEditModal] = React.useState(false);
  const [showPwdModal, setShowPwdModal] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const passwordHandler = () => setShowPassword(!showPassword);
  const editBtnHandler = () => setShowEditModal(!showEditModal);
  const pwdBtnHandler = () => setShowPwdModal(!showPwdModal);

  return (
    <>
      <Box mx={4} mt={7} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <ArrowIcon icon={faArrowLeft} />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "top",
            }}
          >
            <UserInfoContainer>
              <Grid container spacing={2}>
                <Grid item xs={12} className="gridCenterBase">
                  <UserPic
                    src="https://visafoto.com/img/passport-photo-original7.jpg"
                    alt="ehhh"
                  />
                  <PicEditIcon icon={faPenToSquare} />
                </Grid>
                <Grid item xs={6} className="gridRight">
                  <TxtBox> Username : </TxtBox>
                </Grid>
                <Grid item xs={6} className="gridLeft">
                  <TxtBox>Minsoe932</TxtBox>
                </Grid>
                <Grid item xs={6} className="gridRight">
                  <TxtBox>Email :</TxtBox>
                </Grid>
                <Grid item xs={6} className="gridLeft">
                  <TxtBox>minsoe002@gmail.com </TxtBox>
                </Grid>
                <Grid item xs={12} mt={6} className="gridCenter">
                  <Button
                    style={{ marginRight: 10, height: "45px" }}
                    onClick={() => {
                      editBtnHandler();
                    }}
                  >
                    <TxtBox>Edit</TxtBox>
                  </Button>
                  <Button
                    style={{ height: "45px" }}
                    onClick={() => {
                      pwdBtnHandler();
                    }}
                  >
                    <TxtBox>Change Password</TxtBox>
                  </Button>
                </Grid>
              </Grid>
            </UserInfoContainer>
          </Grid>
          <Grid item xs={0} md={1} className="gridCenter">
            <VerticalL></VerticalL>
          </Grid>
          <Grid item xs={12} md={5} className="gridCenter">
            <ScrollBox>
               <ScoreContainer>
                <Season
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                 <TxtBox>Season 1 - Autumn</TxtBox>
                </Season>
                <Score>
                  <Grid container rowSpacing={3}>
                    <Grid item xs={12}>
                      <ScoreTxt>General Knowledge - 120</ScoreTxt>
                    </Grid>
                    <Grid item xs={6}>
                      <BulletIcon color="red" icon={faCircle} />
                      <ScoreTxt>Geography-122</ScoreTxt>
                    </Grid>
                    <Grid item xs={6}>
                      <BulletIcon color="blue" icon={faCircle} />
                      <ScoreTxt>History-123</ScoreTxt>
                    </Grid>
                    <Grid item xs={6}>
                      <BulletIcon color="black" icon={faCircle} />
                      <ScoreTxt>Science-456</ScoreTxt>
                    </Grid>
                    <Grid item xs={6}>
                      <BulletIcon color="green" icon={faCircle} />
                      <ScoreTxt>Technology-665</ScoreTxt>
                    </Grid>
                  </Grid>
                </Score>
              </ScoreContainer>
              <ScoreContainer>
                <Season
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                 <TxtBox>Season 2 - Spring</TxtBox>
                </Season>
                <Score>
                  <Grid container rowSpacing={3}>
                    <Grid item xs={12}>
                      <ScoreTxt>General Knowledge - 120</ScoreTxt>
                    </Grid>
                    <Grid item xs={6}>
                      <BulletIcon color="red" icon={faCircle} />
                      <ScoreTxt>Geography-122</ScoreTxt>
                    </Grid>
                    <Grid item xs={6}>
                      <BulletIcon color="blue" icon={faCircle} />
                      <ScoreTxt>History-123</ScoreTxt>
                    </Grid>
                    <Grid item xs={6}>
                      <BulletIcon color="black" icon={faCircle} />
                      <ScoreTxt>Science-456</ScoreTxt>
                    </Grid>
                    <Grid item xs={6}>
                      <BulletIcon color="green" icon={faCircle} />
                      <ScoreTxt>Technology-665</ScoreTxt>
                    </Grid>
                  </Grid>
                </Score>
              </ScoreContainer>
              <ScoreContainer>
                <Season
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                 <TxtBox>Season 3 - Summer</TxtBox>
                </Season>
                <Score>
                  <Grid container rowSpacing={3}>
                    <Grid item xs={12}>
                      <ScoreTxt>General Knowledge - 120</ScoreTxt>
                    </Grid>
                    <Grid item xs={6}>
                      <BulletIcon color="red" icon={faCircle} />
                      <ScoreTxt>Geography-122</ScoreTxt>
                    </Grid>
                    <Grid item xs={6}>
                      <BulletIcon color="blue" icon={faCircle} />
                      <ScoreTxt>History-123</ScoreTxt>
                    </Grid>
                    <Grid item xs={6}>
                      <BulletIcon color="black" icon={faCircle} />
                      <ScoreTxt>Science-456</ScoreTxt>
                    </Grid>
                    <Grid item xs={6}>
                      <BulletIcon color="green" icon={faCircle} />
                      <ScoreTxt>Technology-665</ScoreTxt>
                    </Grid>
                  </Grid>
                </Score>
              </ScoreContainer>
            </ScrollBox>
          </Grid>
        </Grid>
        <InfoIcon icon={faInfoCircle} />
      </Box>
      {showEditModal ? (
        <Modal>
          <CrossIcon
            icon={faXmark}
            onClick={() => {
              editBtnHandler();
            }}
          />
          <TxtBox>Edit Info</TxtBox>
          <TxtField
            placeholder="Username"
            defaultValue="Minsoe932"
            variant="standard"
            InputProps={{ disableUnderline: true }}
          />
          <TxtField
            placeholder="Email"
            defaultValue="minsoe002@gmail.com "
            variant="standard"
            InputProps={{ disableUnderline: true }}
          />
          Enter password to confirm
          <TxtField
            placeholder="Password"
            variant="standard"
            type={showPassword ? "text" : "password"}
            InputProps={{
              // <-- This is where the toggle button is added.
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={passwordHandler}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <ModalBtn>Confirm</ModalBtn>
        </Modal>
      ) : (
        <></>
      )}
      {showPwdModal ? (
        <Modal>
          <CrossIcon
            icon={faXmark}
            onClick={() => {
              pwdBtnHandler();
            }}
          />
          <TxtBox>Change Password</TxtBox>
          <TxtField
            placeholder="Enter Current Password"
            variant="standard"
            type={showPassword ? "text" : "password"}
            InputProps={{
              // <-- This is where the toggle button is added.
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={passwordHandler}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />{" "}
          <TxtField
            placeholder="Enter New Password"
            variant="standard"
            type={showPassword ? "text" : "password"}
            InputProps={{
              // <-- This is where the toggle button is added.
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={passwordHandler}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <ModalBtn>Confirm</ModalBtn>
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export default AccountSetting;
