import LineHolder from "../Line Holder";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const TitlePrimary = ({
  imageNone,
  sno,
  title,
  headingPrimary,
  headingSecondary,
  titleHeadingH1G,
  detail,
  src,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="title1ContainerMainContainer">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="title1Heading"
        >
          <div className="title1HeadingContant">
            <div className="contantNocontainer">{sno}</div>
            <div className="contantValueContainer">· {title}</div>
          </div>
          <div className="title1HeadingLineholder">
            <LineHolder />
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="title1DetailContainer"
        >
          <div className={`${imageNone && "display-none"} title1Image`}>
            <img src={src} />
          </div>
          <div className="title1MainHeading">
            <h1 className="title1HeadingH1">
              {headingPrimary}
              <span className={titleHeadingH1G}>{headingSecondary}</span>.
            </h1>
            <div className="title1Detail">
              <p>{detail}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TitleSecondary = ({
  fontMax,
  sno,
  title,
  headingPrimary,
  headingSecondary,
  title1HeadingH1G,
  title1HeadingH1G1,
}) => {
  return (
    <>
      <div className="title1ContainerMainContainer2">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="title1Heading"
        >
          <div className="title1HeadingLineholder2">
            <LineHolder revers />
          </div>
          <div className="title1HeadingContant">
            <div className="contantNocontainer">{sno}</div>
            <div className="contantValueContainer">· {title}</div>
          </div>
          <div className="title1HeadingLineholder2">
            <LineHolder />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="title1DetailContainer2"
        >
          <div className="title1MainHeading">
            <h1 className={`${fontMax && "fontSizeMax"} title1HeadingH1A`}>
              <span className={title1HeadingH1G1}>{headingPrimary}</span>
              <span className={title1HeadingH1G}>{headingSecondary}</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export { TitlePrimary, TitleSecondary };
