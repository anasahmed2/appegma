import { Button1, Button2, Button3 } from "../Button";
import LineHolder from "../Line Holder";
import { Title1Container, Title2Container } from "../Title";
import { AiOutlineCheck } from "react-icons/ai";
import React, { useRef, useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({
  reverse,
  cardImageContainer,
  heading,
  textgreadent1,
  headingGradient,
  src,
  detail,
  cardContainer,
  layoutCard,
  cardDataContainer,
  headingvalue,
  headingvalueG,
  paragvalue,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);
console.log(reverse)
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="cardContainer"
      >
        <div className={`${reverse ? "right" :"left" } layoutCard`}>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
            className={cardImageContainer}
          >
            <div className="cardImage">
              <img src={src} alt="Card image" />
            </div>
          </div>
          <div
            data-aos="flip-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
            className="cardDataContainer"
          >
            <div className="cardheading">
              <h1>
                {heading}
                <span className={textgreadent1}>{headingGradient}</span>.
              </h1>
            </div>
            <div className="cardheading">
              <p>{detail} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Card1 = ({ Name, Experience, src }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
        className="card1Container"
      >
        <div className="card1Img">
          <img src={src} />
        </div>
        <div className="card1Name">
          <p>{Name}</p>
        </div>
        <div className="card1Experience">
          <p>{Experience} </p>
        </div>
      </div>
    </>
  );
};

const Card2 = ({ icon, heading, detail }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="card2Container"
      >
        <div className="card2ImgArea">{icon}</div>
        <div className="card2ImgArea">
          <h3>{heading}</h3>
        </div>
        <div className="card2ImgArea">
          <h6>{detail}</h6>
        </div>
      </div>
    </>
  );
};

const Card3 = ({
  card3greadentBox,
  btn,
  heading,
  price,
  time,
  desheading,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  point1,
  point2,
  point3,
  point4,
  point5,
  card3Container,
  card3greadentArea,
  card3Btn,
  classBtn2,
  card3DetailContainer,
  card3Detail1,
  card3Detailtext,
  card3_D_C_Area,
  card3haeding,
  card3SalaryValue,
  card3TimeValue,
  disImgScr1,
  disImgScr2,
  disImgScr3,
  disImgScr4,
  disImgScr5,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="card3Container">
        <div className={card3greadentBox}>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="card3greadentArea"
          >
            <h5>{heading}</h5>
            <h1>{price}</h1>
            <h5>{time}</h5>
            <div className="card3Btn">
              <Button2 value={btn} />
            </div>
          </div>
        </div>
        <div className="card3DetailContainer">
          <div className="card3_D_C_Area">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className="card3Detail1"
            >
              {/* <img src={disImgScr1} /> */}
              {/* <AiOutlineCheck color="#fff" fontSize={20}/> */}
              {icon1}
              <div className="card3Detailtext">
                <p>{point1}</p>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className="card3Detail1"
            >
              {/* <img src={disImgScr2} /> */}
              {/* <AiOutlineCheck color="#fff" fontSize={20}/> */}
              {icon2}
              <div className="card3Detailtext">
                <p>{point2}</p>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className="card3Detail1"
            >
              {/* <img src={disImgScr3} /> */}
              {/* <AiOutlineCheck color="#fff" fontSize={20}/> */}
              {icon3}
              <div className="card3Detailtext">
                <p>{point3}</p>
              </div>
            </div>
          </div>
          <div className="card3_D_C_Area">
            <h2
              data-aos="flip-down"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              {desheading}
            </h2>
            <div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className="card3Detail1"
            >
              {/* <img src={disImgScr4} /> */}
              {/* <AiOutlineCheck color="#fff" fontSize={20}/> */}
              {icon4}
              <div className="card3Detailtext">
                <p>{point4}</p>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className="card3Detail1"
            >
              {/* <img src={disImgScr5} /> */}
              {/* <AiOutlineCheck color="#fff" fontSize={20}/> */}
              {icon5}
              <div className="card3Detailtext">
                <p>{point5}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Card4 = ({ src, value }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="card4Container">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="card4ContantArea"
        >
          <div className="card4Img">
            <img src={src} />
          </div>
          <div className="card4detail">
            <h6>{value}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

const Card5 = ({ src, detail }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
        className="card5Container"
      >
        <div className="card5Img">
          <div className="card5Video"></div>
          <img src={src} />
        </div>
        <div className="card5detail">
          <h6>{detail}</h6>
        </div>
      </div>
    </>
  );
};

const Card6 = ({ heading, detail, sno, step }) => {
  return (
    <>
      <div className="card6Main" id="card6">
        <div className="card6FontArea">
          <AiOutlineCheck fontSize={30} />
        </div>
        <div className="card6Container">
          <div className="card6Haeding">
            <div className="title1Heading">
              <div className="title1HeadingContant min-w-7">
                <div className="contantValueContainer leter-s-none">
                  {step}{" "}
                </div>
                <div className="contantNocontainer ml-5">{sno}</div>
              </div>
              <div className="title1HeadingLineholder">
                <LineHolder lineHolderColor="lineHolderDesign lineHolderColor" />
              </div>
            </div>
          </div>

          <div className="card6MainJHaeding">
            <h1>{heading}</h1>
          </div>
          <div className="card6MainJHaeding">
            <p>{detail}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Card7 = ({ detail, heading, sno, points }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
        className="Card7Main"
      >
        <div className="card7Status">
          <div className="card7Heading">
            <div className="card7HeadingContant">
              <div className="card7Nocontainer">{sno}</div>
              <div className="card7ValueContainer">{heading}</div>
            </div>
            <div className="card7HeadingStatus">
              <div className="card7Nocontainer">
                <span className="card7span">Join</span>
              </div>
            </div>
            <div className="title1HeadingLineholder">
              <LineHolder />
            </div>
          </div>
        </div>

        <div className="card7detail">
          <div className="card7Divider">
            <p>{detail}</p>
            <div className="card7Btn">
              <Button3 value="Hire now" />
            </div>
          </div>

          <div className="card7Divider">
            {points.map((value, index) => (
              <div key={index} className="card7Points">
                {value.icons}
                <div className="card7PointD">
                  <p>{value.point1}</p>
                </div>
              </div>
            ))}
            {/* <div className="card7Points">
              <AiOutlineCheck color="#3aecba" />
              <div className="card7PointD">
                <p>5 years of development experience</p>
              </div>
            </div> */}
            {/* <div className="card7Points">
              <AiOutlineCheck color="#3aecba" />
              <div className="card7PointD">
                <p>5 years of development experience</p>
              </div>
            </div> */}
            {/* <div className="card7Points">
              <AiOutlineCheck color="#3aecba" />
              <div className="card7PointD">
                <p>5 years of development experience</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export { Card, Card1, Card2, Card3, Card4, Card5, Card6, Card7 };
