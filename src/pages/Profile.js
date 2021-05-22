import React from "react";
import NavBar from "../components/NavBar";
import "../styles/index.css";

const Profile = () => {

  
  const containerStyle = {
    color: "white",
    borderRadius: "10px",
    background: "linear-gradient(25deg, #292929, #3d3d3d)",
    padding: "20px 10px"
  };

  const titleStyle = {
    color: "white"
  };

  const entryStyle = {
    display: "flex",
    padding: "30px 10px"
  };

  const separatorStyle = {
    color: "#e5e5e5",
    width: "15px"
  };

  const dateStyle = {
    color: "white",
    fontWeight: "600",
    padding: "0px 50px",
    justifyContent: "center",
    flexDirection: "column",
    display: "flex"
  };

  const contentStyle = {
    color: "white"
  };

  return (
    <div>
      <div className="game__profile--container">
        <h1> My Profile </h1>

        <div style={containerStyle}> 
          <h1 style={titleStyle}> Favourites </h1>
        You have 15 favourited cards
        </div>

        <h1 style={titleStyle}> Journey </h1>

        <div style={containerStyle}>
          <div style={entryStyle}>
            <span style={dateStyle}> 15 July </span>
            <span style={contentStyle}> 
              <strong> What is your favourite building? </strong> <br /><br />
            Angkor Wat, located in northwest Cambodia, is the largest religious structure (temple complex) in the world by land area, measuring 162.6 hectares.
            </span>
          </div>

          <hr style={separatorStyle}/>
        
          <div style={entryStyle}>
            <span style={dateStyle}> 19 July </span>
            <span style={contentStyle}> 
              <strong> What is your most loved story? </strong> <br /><br />
            According to a myth, the construction of Angkor Wat was ordered by Indra to serve as a palace for his son Precha Ket Mealea. According to the 13th-century Chinese traveller Zhou Daguan, some believed that the temple was constructed in a single night by a divine architect.
            </span>
          </div>

          <hr style={separatorStyle}/>

          <div style={entryStyle}>
            <span style={dateStyle}> 23 July </span>
            <span style={contentStyle}> 
              <strong> What is a fact that more people should know? </strong> <br /><br />
            As with most other ancient temples in Cambodia, Angkor Wat has faced extensive damage and deterioration by a combination of plant overgrowth, fungi, ground movements, war damage and theft. The war damage to Angkor Wat&apos;s temples however has been very limited, compared to the rest of Cambodia&apos;s temple ruins, and it has also received the most attentive restoration.
            </span>
          </div>

        </div>
      </div>

      <NavBar />
    </div>
  );

};

export default Profile;