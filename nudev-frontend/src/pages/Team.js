import React from "react";
import { TeamStyled } from "./TeamStyle";

const Team = () => {
  return (
    <TeamStyled>
      <div className="content">
        <div className="header">
          <h1>The Team</h1>
          <a href="https://chingu.io/">Chingu</a>
          <span> voyage 32 Chimeras - Team 05</span>
          <div>
            <a href="https://github.com/chingu-voyages/v32-chimeras-team-05">
              Repository
            </a>
          </div>
        </div>
        <div className="grid-container">
          <div className="team-card">
            <h2>Joe Baker</h2>
            <a href="/">GitHub: </a>
            <p>Email: JBR90@gmail.com </p>
          </div>
          <div className="team-card">
            <h2>Edwin Agbenyega</h2>
            <a href="/">GitHub: </a>
            <p>Email: @gmail.com </p>
          </div>
          <div className="team-card">
            <h2>Amit Karnam</h2>
            <a href="/">GitHub: </a>
            <p>Email: @gmail.com </p>
          </div>
        </div>
      </div>
    </TeamStyled>
  );
};

export default Team;
