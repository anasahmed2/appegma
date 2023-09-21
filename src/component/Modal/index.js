import { Button1 } from "../Button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Modal = ({
  modalMainBody,
  modalHeadingGreadent1,
  modalHeadingGreadent2,
  btn,
  src1,
  src2,
  src3,
  src4,
  src5,
  src6,
  src7,
  src8,
  src9,
  headingPrimary,
  headingSecondary,
  headingTertiary,
  headingQuaternary,
  detail,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="modalMainConatiner">
        <div className="modalRelative">
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            src={src1}
            alt="ModalCircleImage"
            className="modalCircleImage1"
          />
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            src={src2}
            alt="ModalCircleImage"
            className="modalCircleImage2"
          />
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            src={src3}
            alt="ModalCircleImage"
            className="modalCircleImage3"
          />
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            src={src4}
            alt="ModalCircleImage"
            className="modalCircleImage4"
          />
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            src={src5}
            alt="ModalCircleImage"
            className="modalCircleImage5"
          />
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            src={src6}
            alt="ModalCircleImage"
            className="modalCircleImage6"
          />
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            src={src7}
            alt="ModalCircleImage"
            className="modalCircleImage7"
          />
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            src={src8}
            alt="ModalCircleImage"
            className="modalCircleImage8"
          />
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            src={src9}
            alt="ModalCircleImage"
            className="modalCircleImage9"
          />

          <div className={modalMainBody}>
            <div
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="modalContantContainer"
            >
              <div className="modalHeadingMain">
                <div className="modalHeading">
                  <h1>
                    {headingPrimary}
                    <span className={modalHeadingGreadent1}>
                      {headingSecondary}
                    </span>
                    <span className={modalHeadingGreadent2}>
                      {headingTertiary}
                    </span>
                    {headingQuaternary}.
                  </h1>
                </div>
              </div>
              <div className="modalDetail">
                <p>{detail}</p>
              </div>
              <div className="btnContainer">
                <Button1 value={btn} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
