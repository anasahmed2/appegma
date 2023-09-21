import {
  Card,
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
  Card7,
} from "./component/Cards";
import Person from "./asset/icons8-person-64.png";
import Modal from "./component/Modal";
import { Button1, Button2, Button3 } from "./component/Button";
import { TitlePrimary, TitleSecondary } from "./component/Title";
import fingerImg from "./asset/fingerprint.png";
import "./App.css";
import Footer from "./component/Footer";
import { useRef, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./component/NavBar";
import {
  Skills,
  Founder,
  telentedPerson,
  HireStatus,
  ModalData,
  pricing,
  Vetting,
  startHire,
  cardTalent,
} from "./data";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="mainContainer">
        <Navbar>
          <Modal {...ModalData} />
          {/* <Modal
            modalMainBody="modalMainBody ModalBackDesign modalBackDesigncolor"
            btn="Hire Now!"
            modalHeadingGreadent1="textgreadent4"
            modalHeadingGreadent2="textgreadent4"   
            imageCircle1="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/avatar-closeup-woman-03-p-500.jpeg"
            imageCircle2="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/testimonial-01-bright-webflow-uikit-p-500.jpeg"
            imageCircle3="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/avatar-03.jpg"
            imageCircle4="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/avatar-closeup-woman-02.jpg"
            imageCircle5="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/avatar-landscape-03-p-500.jpeg"
            imageCircle6="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/avatar-02_1.jpg"
            imageCircle7="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/avatar-02-p-500.jpeg"
            imageCircle8="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/avatar-01-p-500.jpeg"
            imageCircle9="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/avatar-01_1.jpg"        
            modalValue1="Hire"
            modalValueG1="Remote"
            modalValueG2="Unicorn"
            modalValue2="Devs"
            modalValueDetal="Get matched with our elite group of hand-selected & rigorously vetted Unicorn Devs, assigned to you in 24 hours."
          /> */}
          <div className="section">
            <TitlePrimary
              titleHeadingH1G="textgreadent4"
              src={fingerImg}
              sno="01"
              title="Get Start"
              headingPrimary="Steps to Hire"
              headingSecondary="Talent"
              detail="We provide a simple & straightforward hiring process to help you find highly-skilled remote tech talent in record time."
            />

            <div className="sectionA">
              {cardTalent.map((value, index) => (
                <Card {...value} key={index} />
              ))}
              {/* <Card
                cardImageContainer="cardImageContainer boxGreadent2"
                textgreadent1="textgreadent1"
                src="https://www.florin-pop.com/static/580a39549812457188f2acf1b8459d3f/47cd0/profile-card-design.png"
                heading="Tell Us What"
                headingGradient="You Need"
                detail="Let us know your development needs, whether it's an individual developer or an entire tech team, we're here to help! A consultant will reach out to you to understand your requirements better prior to sourcing your talent."
              />

              <Card
                cardContainer="cardContainer"
                layoutCard="layoutCard right"
                cardImageContainer="cardImageContainer boxGreadent3"
                imageSource="https://www.florin-pop.com/static/580a39549812457188f2acf1b8459d3f/47cd0/profile-card-design.png"
                cardDataContainer="cardDataContainer"
                heading="cardheading"
                textgreadent1="textgreadent2"
                headingvalue="Tell Us What"
                headingvalueG="You Need"
                paragvalue="Let us know your development needs, whether it's an individual developer or an entire tech team, we're here to help! A consultant will reach out to you to understand your requirements better prior to sourcing your talent."
              />
              <Card
                cardContainer="cardContainer"
                layoutCard="layoutCard left"
                cardImageContainer="cardImageContainer boxGreadent4"
                imageSource="https://www.florin-pop.com/static/580a39549812457188f2acf1b8459d3f/47cd0/profile-card-design.png"
                cardDataContainer="cardDataContainer"
                heading="cardheading"
                textgreadent1="textgreadent1"
                headingvalue="Tell Us What"
                headingvalueG="You Need"
                paragvalue="Let us know your development needs, whether it's an individual developer or an entire tech team, we're here to help! A consultant will reach out to you to understand your requirements better prior to sourcing your talent."
              /> */}
            </div>

            <TitlePrimary
              titleHeadingH1G="textgreadent5"
              imageNone
              sno="01"
              title="Get Start"
              headingPrimary="Steps to Hire"
              headingSecondary="Talent"
              detail="We provide a simple & straightforward hiring process to help you find highly-skilled remote tech talent in record time."
            />
          </div>

          <div className="section1">
            <div className="section1A">
              <div className="section2Divider">
                <div className="divider1">
                  <Card3 {...pricing} />

                  {/* <Card3
                  btn="Hire Here"
                  card3greadentBox="card3greadentBox boxGreadent1"
                    card3haeding="Flat"
                    card3SalaryValue="$40/hour"
                    card3TimeValue="Per hour"
                    disImgScr1={Person}
                    disImgScr2={Person}
                    disImgScr3={Person}
                    disImgScr4={Person}
                    disImgScr5={Person}
                    disPoint1="Senior talent with minimum 5 years experience"
                    disPoint2="Talent pool consists of experts covering all areas of programming languages"
                    disPoint3="Fully-vetted talents to ensure quality of service"
                    disPoint4="7-day risk-free trial!"
                    disPoint5="Flexible contracts"
                    disheading="Includes"
                  /> */}
                </div>
                <div className="divider2">
                  <div className="divider2container">
                    <div
                      data-aos="fade-right"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="1000"
                      className="divider2heading"
                    >
                      <h6>Flat, simple pricing for all</h6>
                      <h1>Simple Pricing to Suit Businesses of all Sizes.</h1>
                    </div>
                    <div className="divider2card">
                      {HireStatus.map((value, index) => (
                        <Card2 key={index} {...value} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section2 ModalBackDesign bg-3">
            <TitleSecondary
              title1HeadingH1G="textgreadent2  "
              sno="03"
              title="TALENT"
              headingPrimary="Some of Our "
              headingSecondary="Talents."
            />

            <div className="sectionDividerA">
              {telentedPerson.map((value, index) => (
                <Card1 key={index} {...value} />
              ))}
            </div>
          </div>

          <div className="section2 ModalBackDesign bg-4">
            <TitleSecondary
              title1HeadingH1A="title1HeadingH1A textreadent2"
              title1HeadingH1G1="textgreadent4"
              sno="04"
              title="PODCAST"
              headingPrimary="Founder Story"
              headingSecondary=" Podcast."
            />

            <div className="sectionDividerA">
              {Founder.map((value, index) => (
                <Card5 key={index} {...value} />
              ))}
            </div>
            <div className="sectionABtn1">
              <Button3
                classBtn3="classBtn3"
                value="Visit FounderStory Podcast Site"
              />
            </div>
          </div>

          <div className="section bg-Image1 bg-1">
            <TitleSecondary
              title1HeadingH1A="title1HeadingH1A textreadent2"
              title1HeadingH1G1="textgreadent4"
              sno="04"
              title="PODCAST"
              headingPrimary="Skills"
              headingSecondary="  We Offer."
            />

            <div className="sectionAContainer">
              <div className="sectionDividerA">
                {Skills.map((value, index) => (
                  <Card4 key={index} {...value} />
                ))}
              </div>
            </div>
          </div>

          <div className="section bg-5">
            <TitleSecondary
              fontMax
              title1HeadingH1G="textgreadent7 "
              sno="06"
              title="VETTING"
              headingPrimary="Our"
              headingSecondary="Vetting Process:"
            />

            <div className="CardlineSection">
              {Vetting.map((value, index) => (
                <Card6 key={index} {...value} />
              ))}

              {/* <div>
                <Card6
                  heading="coding "
                  detail="A timed live coding challenge that helps evaluate"
                  sno="02"
                  step="step"
                />

                <Card6
                  headingValue="coding "
                  card6DetailValue="A timed live coding challenge that helps evaluate"
                  card6Sno="02"
                  card6SnoHeading="step"
                />

                <Card6
                  headingValue="coding "
                  card6DetailValue="A timed live coding challenge that helps evaluate"
                  card6Sno="02"
                  card6SnoHeading="step"
                />
              </div> */}
            </div>
          </div>

          <div className="section bg-5">
            <TitleSecondary
              fontMax
              title1HeadingH1G="textgreadent7 "
              sno="06"
              title="VETTING"
              headingPrimary="Ready to Get"
              headingSecondary=" Started?"
            />

            <div className="cardDivider">
              {startHire.map((value, index) => (
                <Card7 key={index} {...value} />
              ))}

              {/* <Card7 detail="We will help you hire exceptional people for advanced engineering
              and design roles." sno="02" heading="Hire Talent"  lineHolderColor="lineHolderDesign lineHolderColor bg-2" />
              <Card7 lineHolderColor="lineHolderDesign lineHolderColor bg-2" /> */}
            </div>
          </div>

          <div className="section bg-5">
            <Footer />
          </div>
        </Navbar>
      </div>
    </>
  );
};
export default App;
