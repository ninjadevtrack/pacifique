import React from "react";
// @import components
import Action from "../../../components/common/action";
import Section from "../../../components/common/section";
// @import resources
import membershipBG from "../../../assets/images/membership_bg.png";
// @import styles
import {
  MemberActions,
  MemberContainer,
  MemberContent,
} from "./membership.styled";

const MemberShip = () => {
  return (
    <Section
      height={"750px"}
      image={membershipBG}
      bgsize={"60% 90%"}
      bgpos={"right"}
      mbgsize={"75% 75%"}
    >
      <MemberContainer>
        <MemberContent
          data-aos="fade-up"
          data-aos-duration={"1500"}
          className="aos-init aos-animate"
        >
          <h3>
            {"Your"}
            <br /> {"Membership"}
            <br /> {"becomes a"}
            <br /> {"digital asset"}
          </h3>
          <p>
            <b>{"Pacifique Humans Club "}</b>
            {
              "is your exclusive laidback club, where membership is purchased as a NFT on the blockchain. "
            }
            <br />
            <br />
            {
              "It’s time to skip those yearly payments for hotel memberships and replace them with a one-time buy-in you can trust. This pass gives you lifetime access to our Smart Luxury Eco Retreats and unique IRL experiences, via a digital asset that no hotel members club has ever used before."
            }
            <br />
            <br />
            {
              "Members will enjoy a selection of culinary and cultural experiences, free stays and unlimited access to our locations and services."
            }
            <br />
            <br />
            {"We plan on opening multiple locations around the world."}
          </p>
          <MemberActions>
            <Action link={"/benefits"} content={"Membership Benefits"} />
            <Action link={"/nfts"} content={"Why NFTs?"} />
            <Action link={"/buy"} content={"How to Buy"} />
          </MemberActions>
        </MemberContent>
      </MemberContainer>
    </Section>
  );
};

export default MemberShip;
