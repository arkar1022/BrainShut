import React from "react";
import {
  SeasonTxt,
  TableContainer,
  BulletIcon,
  Row,
  UserScoreContainer,
} from "./Leaderboard.elements";
import { InfoIcon, STitle, ArrowIcon,} from "../../Styles";
import { Grid, Box} from "@mui/material";
import {
  faInfoCircle,
  faArrowLeft,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import "../../Styles/Style.css";

const Leaderboard = () => {

    const data = [
        {
            id:"#1",
            name:"Kyaw001",
            geoScore: 334,
            hisScore: 381,
            sciScore: 233,
            tecScore: 234,
            totalScore: 1182,

        },
        {
            id:"#1",
            name:"Kyaw001",
            geoScore: 334,
            hisScore: 381,
            sciScore: 233,
            tecScore: 234,
            totalScore: 1182,

        },
        {
            id:"#1",
            name:"Kyaw001",
            geoScore: 334,
            hisScore: 381,
            sciScore: 233,
            tecScore: 234,
            totalScore: 1182,

        },
        {
            id:"#1",
            name:"Kyaw001",
            geoScore: 334,
            hisScore: 381,
            sciScore: 233,
            tecScore: 234,
            totalScore: 1182,

        },
        {
            id:"#1",
            name:"Kyaw001",
            geoScore: 334,
            hisScore: 381,
            sciScore: 233,
            tecScore: 234,
            totalScore: 1182,

        },
        {
            id:"#1",
            name:"Kyaw001",
            geoScore: 334,
            hisScore: 381,
            sciScore: 233,
            tecScore: 234,
            totalScore: 1182,

        },
        
        
    ]

  return (
    <>
      <Box mx={4} mt={7} sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid
            item
            xs={12}
            md={8}
            lg={6}
            className="gridLeft"
          >
            <ArrowIcon icon={faArrowLeft} />
            <STitle>Leaderboard</STitle>
          </Grid>
          <Grid item xs={12} md={4} lg={6}className="gridLeft"><SeasonTxt>Season - 1 Autumn</SeasonTxt></Grid>
          <Grid item xs={12} className="gridCenter">
            <TableContainer>
                {data.map((row)=>{ 
                    return[
                    <Row container my={1} rowSpacing={1}>
                  <Grid item xs={1} md={2} className="gridACenter">{row.id}</Grid>
                  <Grid item xs={2} md={3} className="gridLeft">{row.name}</Grid>
                  <Grid item xs={7} md={5} className="gridLeft">
                  <BulletIcon color="red" icon={faCircle} />{row.geoScore}
                  <BulletIcon color="blue" icon={faCircle} />{row.hisScore}
                  <BulletIcon color="black" icon={faCircle} />{row.sciScore}
                  <BulletIcon color="green" icon={faCircle} />{row.tecScore}
                  </Grid>
                  <Grid item xs={2} md={2} className="gridLeft"> {row.totalScore}</Grid>
              </Row>
                    ];
                })}
            </TableContainer>
          </Grid>
          <Grid item xs={12} className="gridCenter">
          <UserScoreContainer container my={1}>
          <Grid item xs={1} md={2} className="gridACenter">#22</Grid>
                  <Grid item xs={2} md={3} className="gridLeft">kyawmoe232</Grid>
                  <Grid item xs={7} md={5} className="gridLeft">
                  <BulletIcon color="red" icon={faCircle} />234
                  <BulletIcon color="blue" icon={faCircle} />234
                  <BulletIcon color="black" icon={faCircle} />234
                  <BulletIcon color="green" icon={faCircle} />234
                  </Grid>
                  <Grid item xs={2} md={2} className="gridLeft"> 3224</Grid>
          </UserScoreContainer>
          </Grid>
        </Grid>
        <InfoIcon icon={faInfoCircle} />
      </Box>
    </>
  );
};

export default Leaderboard;
