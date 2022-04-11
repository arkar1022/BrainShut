import React from "react";
import {
  DevPic,
  SlideContainer,
  DevName,
  DevInfo,
  Item,
  Icon,
} from "./DeveloperIntro.elements";
import { InfoIcon, STitle, ArrowIcon } from "../../Styles";
import { Grid, Box, Checkbox } from "@mui/material";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/fontawesome-free-brands";
import "../../Styles/Style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const DeveloperIntro = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Box mx={4} mt={10} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} className="gridCenter">
            <SlideContainer>
              <Carousel
                infinite={true}
                responsive={responsive}
                showDots={true}
                autoPlaySpeed={500000}
                removeArrowOnDeviceType={["tablet", "mobile"]}
              >
                <Item className="gridCenter">
                  <grid container>
                    <grid item xs={12} className="gridCenter">
                      <DevPic src="https://visafoto.com/img/source355x388_cn.jpg" />
                    </grid>
                    <grid item xs={12} className="gridCenter">
                      <DevName>Moe Satt</DevName>
                    </grid>
                    <grid item xs={12} className="gridCenter">
                      <DevInfo>
                        Fiction-writing also has modes: action,
                        exposition,description, dialogue, summary, and
                        transition. Author Peter Selgin refers to methods,
                        including action, dialogue, thoughts, summary, scenes,
                        and description. Currently, there is no consensus within
                        the writing community regarding the number and
                        composition of fiction-writing modes and their uses.
                        Description is the fiction-writing mode for transmitting
                        a mental image of the particulars of a story. Together
                        with dialogue, narration, exposition, and summarization,
                        description is one of the most widely recognized of the
                        fiction-writing modes. As stated in Writing from A to Z,
                        edited by Kirk Polking, description is more than the
                        amassing of details.
                      </DevInfo>
                    </grid>
                    <grid
                      item
                      xs={12}
                      style={{ margin: "30px 0px" }}
                      className="gridCenter"
                    >
                      <Icon icon={faEnvelope} />
                      <Icon icon={faLinkedin} />
                      <Icon icon={faFacebook} />
                      <Icon icon={faTwitter} />
                    </grid>
                  </grid>
                </Item>
                <Item className="gridCenter">
                  <grid container>
                    <grid item xs={12} className="gridCenter">
                      <DevPic src="https://visafoto.com/img/passport-photo-original7.jpg" />
                    </grid>
                    <grid item xs={12} className="gridCenter">
                      <DevName>David</DevName>
                    </grid>
                    <grid item xs={12} className="gridCenter">
                      <DevInfo>
                        Fiction-writing also has modes: action,
                        exposition,description, dialogue, summary, and
                        transition. Author Peter Selgin refers to methods,
                        including action, dialogue, thoughts, summary, scenes,
                        and description. Currently, there is no consensus within
                        the writing community regarding the number and
                        composition of fiction-writing modes and their uses.
                        Description is the fiction-writing mode for transmitting
                        a mental image of the particulars of a story. Together
                        with dialogue, narration, exposition, and summarization,
                        description is one of the most widely recognized of the
                        fiction-writing modes. As stated in Writing from A to Z,
                        edited by Kirk Polking, description is more than the
                        amassing of details.
                      </DevInfo>
                    </grid>
                    <grid
                      item
                      xs={12}
                      style={{ margin: "30px 0px" }}
                      className="gridCenter"
                    >
                      <Icon icon={faEnvelope} />
                      <Icon icon={faLinkedin} />
                      <Icon icon={faFacebook} />
                      <Icon icon={faTwitter} />
                    </grid>
                  </grid>
                </Item>
                <Item className="gridCenter">
                  <grid container>
                    <grid item xs={12} className="gridCenter">
                      <DevPic src="https://images.squarespace-cdn.com/content/v1/54ff160de4b0a76e3a90696a/1562150296188-4XEX3JKWVO9CJX5I4UOO/us+American+passport+visa+photo+bath?format=300w" />
                    </grid>
                    <grid item xs={12} className="gridCenter">
                      <DevName>Joe</DevName>
                    </grid>
                    <grid item xs={12} className="gridCenter">
                      <DevInfo>
                        Fiction-writing also has modes: action,
                        exposition,description, dialogue, summary, and
                        transition. Author Peter Selgin refers to methods,
                        including action, dialogue, thoughts, summary, scenes,
                        and description. Currently, there is no consensus within
                        the writing community regarding the number and
                        composition of fiction-writing modes and their uses.
                        Description is the fiction-writing mode for transmitting
                        a mental image of the particulars of a story. Together
                        with dialogue, narration, exposition, and summarization,
                        description is one of the most widely recognized of the
                        fiction-writing modes. As stated in Writing from A to Z,
                        edited by Kirk Polking, description is more than the
                        amassing of details.
                      </DevInfo>
                    </grid>
                    <grid
                      item
                      xs={12}
                      style={{ margin: "30px 0px" }}
                      className="gridCenter"
                    >
                      <Icon icon={faEnvelope} />
                      <Icon icon={faLinkedin} />
                      <Icon icon={faFacebook} />
                      <Icon icon={faTwitter} />
                    </grid>
                  </grid>
                </Item>
                <Item className="gridCenter">
                  <grid container>
                    <grid item xs={12} className="gridCenter">
                      <DevPic src="https://images.squarespace-cdn.com/content/v1/54ff160de4b0a76e3a90696a/1562151162391-6JVV5R67D7PRDG1CO079/indian+passport+visa+photo+bath?format=300w" />
                    </grid>
                    <grid item xs={12} className="gridCenter">
                      <DevName>Jasmine</DevName>
                    </grid>
                    <grid item xs={12} className="gridCenter">
                      <DevInfo>
                        Fiction-writing also has modes: action,
                        exposition,description, dialogue, summary, and
                        transition. Author Peter Selgin refers to methods,
                        including action, dialogue, thoughts, summary, scenes,
                        and description. Currently, there is no consensus within
                        the writing community regarding the number and
                        composition of fiction-writing modes and their uses.
                        Description is the fiction-writing mode for transmitting
                        a mental image of the particulars of a story. Together
                        with dialogue, narration, exposition, and summarization,
                        description is one of the most widely recognized of the
                        fiction-writing modes. As stated in Writing from A to Z,
                        edited by Kirk Polking, description is more than the
                        amassing of details.
                      </DevInfo>
                    </grid>
                    <grid
                      item
                      xs={12}
                      style={{ margin: "30px 0px" }}
                      className="gridCenter"
                    >
                      <Icon icon={faEnvelope} />
                      <Icon icon={faLinkedin} />
                      <Icon icon={faFacebook} />
                      <Icon icon={faTwitter} />
                    </grid>
                  </grid>
                </Item>
              </Carousel>
            </SlideContainer>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DeveloperIntro;
