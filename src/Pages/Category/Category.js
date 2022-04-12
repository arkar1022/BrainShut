import React from "react";
import {
  CategoryBtn,
  CatContainer,
  CatIcon,
  CatText,
} from "./Category.elements";
import { InfoIcon, STitle, ArrowIcon, RLink } from "../../Styles";
import { Grid, Box } from "@mui/material";
import {
  faInfoCircle,
  faArrowLeft,
  faGlobeAsia,
  faLandmarkDome,
  faFlask,
  faMicrochip,
  faDice,
} from "@fortawesome/free-solid-svg-icons";
import "../../Styles/Style.css";

const Category = () => {
  
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
            <RLink to={"/home"}>
            <ArrowIcon icon={faArrowLeft} />
            </RLink>
            <STitle>Category</STitle>
          </Grid>
          <Grid item xs={12} className="gridCenter">
            <CatContainer>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                  <Box
                    style={{
                      display: "flex",
                    }}
                  >
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6} className="gridCenter">
                        <RLink to={"/quiz"}>
                          <CategoryBtn className="red">
                            <CatText>Geography</CatText>
                            <CatIcon icon={faGlobeAsia} />
                          </CategoryBtn>
                        </RLink>
                      </Grid>
                      <Grid item xs={12} md={6} className="gridCenter">
                        <RLink to={"/quiz"}>
                          <CategoryBtn className="blue">
                            <CatText>History</CatText>
                            <CatIcon icon={faLandmarkDome} />
                          </CategoryBtn>
                        </RLink>
                      </Grid>
                      <Grid item xs={12} md={6} className="gridCenter">
                        <RLink to={"/quiz"}>
                          <CategoryBtn className="black">
                            <CatText>Science</CatText>
                            <CatIcon icon={faFlask} />
                          </CategoryBtn>
                        </RLink>
                      </Grid>
                      <Grid item xs={12} md={6} className="gridCenter">
                        <RLink to={"/quiz"}>
                          <CategoryBtn className="green">
                            <CatText>Technology</CatText>
                            <CatIcon icon={faMicrochip} />
                          </CategoryBtn>
                        </RLink>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{ height: { xs: "275px", md: "553px" } }}
                  className="gridCenter"
                >
                  <CategoryBtn className="purple" style={{ height: "auto" }}>
                    <CatText>Random</CatText>
                    <CatIcon icon={faDice} />
                  </CategoryBtn>
                </Grid>
              </Grid>
            </CatContainer>
          </Grid>
        </Grid>
        <RLink to={"/developerintro"}>
          <InfoIcon icon={faInfoCircle} />
        </RLink>
      </Box>
    </>
  );
};

export default Category;
