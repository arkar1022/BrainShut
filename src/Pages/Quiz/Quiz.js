import React from "react";
import {
  QueTxt,
  AnsTxt,
  QuizContainer,
  CrossIcon,
  AnsRadio,
  NextBtn,
  TimerContainer,
  ScoreModal,
  MHeader,
  ScoreTxt,
  OkBtn,
} from "./Quiz.elements";
import {  STitle } from "../../Styles";
import { Grid, Box} from "@mui/material";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import {
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../../Styles/Style.css";

const Quiz = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [showScoreModal, setShowScoreModal] = React.useState(false);

  const crossBtnHandler = () => setShowScoreModal(!showScoreModal);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <Box mx={4} mt={7} sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} rowSpacing={2}>
          <Grid item xs={11} className="gridLeft">
            <STitle>Sport</STitle>
          </Grid>
          <Grid item xs={1} className="gridRight">
            <CrossIcon icon={faXmark}  onClick={() => {
                      crossBtnHandler();
                    }}/>
          </Grid>
          <Grid item xs={12} className="gridCenter">
            <QuizContainer>
              <QueTxt>
                Who has the Highest Number of Gold Medals in Olympic History?
              </QueTxt>
              <AnsTxt>
                <AnsRadio
                  checked={selectedValue === "1"}
                  onChange={handleChange}
                  value="1"
                  name="radio-buttons"
                />
                Larisa Latynina
              </AnsTxt>
              <AnsTxt>
                <AnsRadio
                  checked={selectedValue === "2"}
                  onChange={handleChange}
                  value="2"
                  name="radio-buttons"
                />
                Mark Spitz
              </AnsTxt>
              <AnsTxt>
                <AnsRadio
                  checked={selectedValue === "3"}
                  onChange={handleChange}
                  value="3"
                  name="radio-buttons"
                />
                Michael Phelps
              </AnsTxt>
              <AnsTxt>
                <AnsRadio
                  checked={selectedValue === "4"}
                  onChange={handleChange}
                  value="4"
                  name="radio-buttons"
                />
                Saina Nehwal
              </AnsTxt>
              <TimerContainer >
              <CountdownCircleTimer
                isPlaying
                size={40}
                strokeWidth={6}
                duration={10}
                colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[10, 6, 3, 0]}
              />
              </TimerContainer>
            </QuizContainer>
          </Grid>
          <Grid item xs={2} className="gridLeft"></Grid>
          <Grid item xs={10} className="gridRight">
            <NextBtn>Next</NextBtn>
          </Grid>
        </Grid>
      </Box>


      {showScoreModal ? (
        <ScoreModal>
          <MHeader>
            Your Score
          </MHeader>
          <ScoreTxt>
            534
          </ScoreTxt>
          <OkBtn>OK</OkBtn>
        </ScoreModal>
      ) : (
        <></>
      )}


    </>
  );
};

export default Quiz;
