import React from "react";
import {
  DesField,
  UserIcon,
  UserButton,
  UserModal,
  ProfilePic,
  InfoTxt,
  ScoreTxt,
  SeasonTxt,
  AccBtn,
} from "./Home.elements";
import { Button, InfoIcon, VerticalL, Title, BulletIcon, RLink} from "../../Styles";
import { Grid, Box } from "@mui/material";
import {
  faInfoCircle,
  faAward,
  faUser,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../Styles/Style.css";
const Home = () => {
  const [showUserModal, setUserModal] = React.useState(false);
  const buttonHandler = () => setUserModal(!showUserModal);

  return (
    <>
      <Box mx={4} mt={12} sx={{ flexGrow: 1 }}>
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
          <Grid item xs={12} md={5} className="gridCenter">
            <Box>
              <RLink to={"/category"}>
                <Button
                  style={{
                    paddingLeft: 60,
                    paddingRight: 60,
                    display: "inline",
                    marginRight: 30,
                  }}
                  onClick={() => {}}
                >
                  Start Game
                </Button>
              </RLink>
              <RLink to={"/leaderboard"}>
                <Button style={{ display: "inline" }}>
                  <FontAwesomeIcon icon={faAward} />
                </Button>
              </RLink>
            </Box>
          </Grid>
          <Grid item xs={0} md={1} className="gridCenter">
            <VerticalL></VerticalL>
          </Grid>
          <Grid item xs={12} md={6} className="gridCenter">
            <DesField>
              Fiction-writing also has modes: action, exposition, description,
              dialogue, summary, and transition.[4] Author Peter Selgin refers
              to methods, including action, dialogue, thoughts, summary, scenes,
              and description.[5] Currently, there is no consensus within the
              writing community regarding the number and composition of
              fiction-writing modes and their uses. Description is the
              fiction-writing mode for transmitting a mental image of the
              particulars of a story. Together with dialogue, narration,
              exposition, and summarization, description is one of the most
              widely recognized of the fiction-writing modes. As stated in
              Writing from A to Z, edited by Kirk Polking, description is more
              than the amassing of details; it is bringing something to life by
              carefully choosing and arranging words and phrases to produce the
              desired effect.[6] The most appropriate and effective techniques
              for presenting description are a matter of ongoing discussion
              among writers and writing coaches.
            </DesField>
          </Grid>
        </Grid>
      </Box>

      <UserButton onClick={() => buttonHandler()}>
        <UserIcon icon={faUser} />
      </UserButton>
      {showUserModal ? (
        <UserModal>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <ProfilePic
                style={{ display: "inline" }}
                image="https://visafoto.com/img/source355x388_cn.jpg"
                roundedColor="#828282"
                imageWidth="60"
                imageHeight="60"
                roundedSize="2"
                borderRadius="75"
              />
            </Grid>
            <Grid
              item
              xs={9}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <InfoTxt>
                HninYu983
                <br />
                hinyu323@gmail.com
              </InfoTxt>
            </Grid>
            <Grid item xs={12}>
              <hr style={{ height: 5, background: "#848181" }} />
            </Grid>
            <Grid item xs={12}>
              <SeasonTxt>S1 - Autumn</SeasonTxt>
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
            <Grid item xs={12} className="gridCenter">
              <RLink to={"/accountsetting"}>
                <AccBtn>Account Setting</AccBtn>
              </RLink>
            </Grid>
          </Grid>
        </UserModal>
      ) : (
        <></>
      )}
      <RLink to={"/developerintro"}>
        <InfoIcon icon={faInfoCircle} />
      </RLink>
    </>
  );
};

export default Home;
