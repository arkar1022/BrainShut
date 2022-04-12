import React from "react";
import {
  Modal,
  MHeader,
  Title,
  InfoTxt,
  EmailField,
  ContBtn,
  ETxt,
  CheckIcon,
} from "./ForgotPassword.elements";
import { Box} from "@mui/material";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "../../Styles/Style.css";

const ForgotPassword = () => {
  const [showVerifyModal, setShowVerifyModal] = React.useState(false);
  const buttonHandler = () => setShowVerifyModal(!showVerifyModal);

  return (
    <>
      <Modal>
        <MHeader>
          <Box
            component="img"
            sx={{
              height: { xs: 60, sm: 100, md: 150 },
              width: { xs: 60, sm: 100, md: 150 },
              display: "inline-flex",
            }}
            src="https://pngimg.com/uploads/brain/brain_PNG70.png"
          />
          <Title>BrainShut</Title>
        </MHeader>
        <InfoTxt>
          Enter the email address associated with your account
          <br />
          and we will send you a link to reset your password
        </InfoTxt>
        <EmailField
          placeholder="Enter your Email"
          variant="standard"
          InputProps={{ disableUnderline: true }}
        />
        <ContBtn
          onClick={() => {
            buttonHandler();
          }}
        >
          Continue
        </ContBtn>
      </Modal>
      {showVerifyModal ? (
        <Modal style={{ justifyContent: "center" }}>
          <CheckIcon icon={faCircleCheck} />
          <ETxt>Email has been sent!</ETxt>
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export default ForgotPassword;
