import React from "react";
import "./Teampage.css";
import CommonSection from "../../commonsection/CommonSection";
import CommonBookSection from "../../commonbooksection/CommonBookSection";

export default function Teampage() {
  const team = [
    {
      name: "Luke Miller",
      position: "Salesman",
      img: "/assets/team/team1.png",
    },
    {
      name: "Michael Diaz",
      position: "Business Owner",
      img: "/assets/team/team2.png",
    },
    {
      name: "Briana Ross",
      position: "Photographer",
      img: "/assets/team/team3.png",
    },
    {
      name: "Lauren Rivera",
      position: "Car Detailist",
      img: "/assets/team/team4.png",
    },
    {
      name: "Martin Rizz",
      position: "Mechanic",
      img: "/assets/team/team5.png",
    },
    {
      name: "Caitlyn Hunt",
      position: "Manager",
      img: "/assets/team/team6.png",
    },
  ];
  return (
    <>
      <CommonSection text="Our Team" />
      <section className="team-section">
        <div className="team-section-content-wraper">
          <div className="team-section-content">
            {team.map((item) => {
              return (
                <div className="team-section-profile">
                  <div className="team-section-profile-top">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="team-section-profile-bottom">
                    <h5>{item.name}</h5>
                    <p>{item.position}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CommonBookSection />
    </>
  );
}
