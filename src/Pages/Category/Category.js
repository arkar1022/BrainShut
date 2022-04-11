import React from "react";
import {
  CategoryBtn,
  CatContainer,
  CatIcon,
  CatText,
} from "./Category.elements";
import { InfoIcon, STitle, ArrowIcon } from "../../Styles";
import { Grid, Box, Checkbox } from "@mui/material";
import {
  faInfoCircle,
  faArrowLeft,
  faGlobeAsia,
  faLandmarkDome,
  faFlask,
  faMicrochip,
  faDice
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
            <ArrowIcon icon={faArrowLeft} />
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
                        <CategoryBtn className="red">
                          <CatText>Geography</CatText>
                          <CatIcon icon={faGlobeAsia} />
                        </CategoryBtn>
                      </Grid>
                      <Grid item xs={12} md={6} className="gridCenter">
                        <CategoryBtn className="blue">
                          <CatText>History</CatText>
                          <CatIcon icon={faLandmarkDome} />
                        </CategoryBtn>
                      </Grid>
                      <Grid item xs={12} md={6} className="gridCenter">
                        <CategoryBtn className="black">
                          <CatText>Science</CatText>
                          <CatIcon icon={faFlask} />
                        </CategoryBtn>
                      </Grid>
                      <Grid item xs={12} md={6} className="gridCenter">
                        <CategoryBtn className="green">
                          <CatText>Technology</CatText>
                          <CatIcon icon={faMicrochip} />
                        </CategoryBtn>
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
        <InfoIcon icon={faInfoCircle} />
      </Box>
    </>
  );
};

export default Category;
