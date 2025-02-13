import React from "react";
// @import components
import Room from "../../../components/common/room";
import Section from "../../../components/common/section";
// @import resources
import { data } from "./data";
import symbol from "../../../assets/images/symbol.svg";
// @import style
import {
  IntroContainer,
  IntroContent,
  IntroFooter,
  IntroHeader,
} from "./intro.styled";

const Intro = () => {
  return (
    <Section id={"places"} height={"700px"}>
      <IntroContainer>
        <IntroHeader>
          <h3
            data-aos="fade-up"
            data-aos-duration={"1500"}
            className="aos-init aos-animate"
          >
            {"Your little"}
            <br />
            {"Heaven in earth"}
          </h3>
          <img
            src={symbol}
            alt={"symbol"}
            data-aos="fade-up"
            data-aos-duration={"1500"}
            className="aos-init aos-animate"
          />
          <p
            data-aos="fade-up"
            data-aos-duration={"1500"}
            className="aos-init aos-animate"
          >
            {"Our vision is crystal clear."}
            <br />
            {"This are some renderings"}
            <br />
            {"we’ve made back in 2020."}
          </p>
        </IntroHeader>
        <IntroFooter>
          <IntroContent>
            {data.map((item, index) => (
              <Room
                key={index}
                image={item.image}
                subtitle={item.subtitle}
                title={item.title}
                content={item.content}
              />
            ))}
          </IntroContent>
        </IntroFooter>
      </IntroContainer>
    </Section>
  );
};

export default Intro;
