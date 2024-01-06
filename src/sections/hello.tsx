import arrowLeft from '../assets/arrow-left.svg';

const HelloSection = () => {
  return (
    <section className="h-[90vh] container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
        <div className="flex flex-col items-start justify-center space-y-12">
          <h1>
            Hello, <br />
            I'm Harley - Quyen
            <br />
            <span id="typed-strings">
              <b>UX/UI Designer</b>
              {/* <b>IT Business Analyst</b>
                      <b>Project Manager</b>
                      <b>Designer Quèn</b>
                      <b>Video Maker</b> */}
            </span>
            <span id="typed"></span>
          </h1>
          <div className="space-x-12">
            <button className="btn bg-white btn-ghost rounded-3xl">
              GET IN TOUCH
              <img src={arrowLeft} alt="arrow left" />
            </button>
            <button className="btn btn-outline rounded-3xl">
              VIEW ALL WORK
            </button>
          </div>
        </div>
        <div className="bg-[#ACBDFF]"></div>
      </div>
    </section>
  );
};

export default HelloSection;
