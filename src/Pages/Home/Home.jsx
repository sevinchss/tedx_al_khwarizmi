import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import emailjs from "@emailjs/browser";
import Typical from "react-typical";
import * as yup from "yup";
import SpeakersSectionSpeakersSection from "./Speakers";
import { Link } from "react-router-dom";
import img7 from "../../assets/7.png";
import img6 from "../../assets/6.png";
import img5 from "../../assets/5.png";
import img4 from "../../assets/4.png";
import img3 from "../../assets/3.png";
import img2 from "../../assets/ted back_6.png";
import bg from "../../assets/bgted.png";
import img1 from "../../assets/1.png";
import SpeakersSection from "./Speakers";
const Home = () => {
  useEffect(() => {
    const loadAOS = async () => {
      const AOS = await import("aos");
      AOS.init({
        duration: 600,
        once: true,
        disable: function () {
          var maxWidth = 500;
          return window.innerWidth < maxWidth;
        },
      });
    };
    loadAOS();
  }, []);
  const scrollToContent = () => {
    document
      .getElementById("content-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  
  const { t } = useTranslation("Home");
  const form = useRef();
  const validation = yup.object().shape({
    user_name: yup.string().required("First Name is required"),
    message: yup.string().required("message is required"),
    user_email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validation) });

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_bhveb0a",
        "template_qi34zqs",
        form.current,
        "KY8Eg2a2f3f4V8MZi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <main className="bg-primary text-secondary font-forum duration-300 ">
      <video
        className=" w-full rounded-lg"
        controls={false}
        autoPlay
        muted
        loop
        pla
      >
        <source
          src="https://ik.imagekit.io/sardorovnasss/tedx/Main%20video.mp4?updatedAt=1736353651560"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <section className="relative bg-black py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-0 flex flex-col lg:flex-row justify-center items-center">
          {/* Video Section */}
          <div className="w-full lg:w-2/3">
            <video
              className="w-full h-auto rounded-lg shadow-lg"
              autoPlay
              loop
              muted
            >
              <source
                src="https://ik.imagekit.io/sardorovnasss/tedx/tedx.mp4?updatedAt=1737056869431"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Text Content */}
          <div className="mt-8 lg:mt-0 lg:ml-12 text-center lg:text-left">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
              data-aos="fade-right"
            >
              What is <span className="text-red-600">TED?</span>
            </h1>
            <p
              className="mt-6 text-lg text-gray-100 sm:text-xl lg:text-lg xl:text-xl lg:w-2/3 w-full"
              data-aos="fade-up"
            >
              TED is a global platform where groundbreaking ideas meet
              creativity and innovation. Our mission is to inspire, empower, and
              spark meaningful conversations that change the world.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="px-8 py-3 bg-red-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-red-700 transition-all"
                data-aos="zoom-in" onClick={scrollToContent}
              >
                Learn More
              </button>
              <button
                className="px-8 py-3 bg-gray-100 text-red-600 text-lg font-medium rounded-lg shadow-md border border-red-600 hover:bg-gray-200 transition-all"
                data-aos="zoom-in"
              >
                <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe6xChbAdSfkfnt1HIA8G8Lx7yy_NNmM_l39z1q0NQWX5QkmA/viewform?usp=preview"
          target="_blank"
          rel="noopener noreferrer"
        >Join TEDx</a> 
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Circles */}
        <div
          className="absolute -top-10 left-10 w-40 h-40 bg-red-500 opacity-30 rounded-full blur-3xl"
          data-aos="fade-down-right"
        ></div>
        <div
          className="absolute bottom-10 right-10 w-60 h-60 bg-yellow-400 opacity-20 rounded-full blur-3xl"
          data-aos="fade-up-left"
        ></div>
      </section>

      <section id="content-section" className="overflow-hidden py-15 xl:py-20 bg-primary duration-500">
        <div className="container mx-auto">
          <div className="flex flex-wrap flex-col xl:flex-row items-center justify-between -mx-4">
            <div className="w-full px-4 xl:w-[45%]">
              <div className="mt-10 lg:mt-0 flex items-center xl:items-start flex-col text-center xl:text-start">
                <h2 className="mb-4 text-3xl  tracking-tight text-secondary sm:text-6xl sm:leading-none">
                  Why join <b>TED</b>AI?
                </h2>
                <div className="mb-5  text-secondary flex flex-col">
                  <p className="text-3xl"> - Foster meaningful connections</p>
                  <p className="text-base">
                    by joining a curated community of 1000 interdisciplinary AI
                    thinkers and doers from Europe and beyond
                  </p>
                </div>
                <div className="mb-5  text-secondary flex flex-col">
                  <p className="text-3xl"> - See the world with fresh eyes </p>
                  <p className="text-base">
                    through expert-led learning journeys, curated stakeholder
                    meet-ups and exclusive city adventures
                  </p>
                </div>
                <div className="mb-5  text-secondary flex flex-col">
                  <p className="text-3xl"> - Fuel your imagination</p>
                  <p className="text-base">
                    with mind-boggling ideas, bold perspectives and astonishing
                    stories delivered through powerful TED talks
                  </p>
                </div>
                <div className="mb-5  text-secondary flex flex-col">
                  <p className="text-3xl"> - Expand Your Horizons</p>
                  <p className="text-base">
                  Engage with thought leaders from diverse industries, exchange transformative ideas, and build connections that inspire growth and progress.
                  </p>
                </div>
            
              </div>
            </div>
            <div className="w-full !px-4 xl:w-1/2">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div
                  className="w-full px-3 sm:px-4 xl:w-full h-full
               relat"
                >
                  <div className="relative my-4" data-aos="fade-left">
                    <img
                      src="https://ik.imagekit.io/sardorovnasss/tedx/ted1.webp?updatedAt=1736232833973"
                      alt="Happy patient"
                      className="w-full h-1/2 rounded-2xl"
                    />
                    <span className="absolute -right-8 sm:-right-10 -bottom-10 sm:-bottom-14 z-[-1]">
                      <svg
                        width={134}
                        height={106}
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {[...Array(60)].map((_, i) => {
                          const cx = (i % 10) * 15 + 1.67;
                          const cy = Math.floor(i / 10) * 15 + 1.67;
                          return (
                            <circle
                              key={i}
                              cx={cx}
                              cy={cy}
                              r="1.67"
                              fill="#ff0000"
                            />
                          );
                        })}
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 ml-4 xl:w-full">
                  <div className="py-3 sm:py-4" data-aos="fade-right">
                    <img
                      src="https://ik.imagekit.io/sardorovnasss/tedx/ted2.webp?updatedAt=1736232834141"
                      alt="Happy patient"
                      className="w-full h-1/2 rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4" data-aos="fade-right">
                    <img
                      src="https://ik.imagekit.io/sardorovnasss/tedx/ted3.webp?updatedAt=1736232834341"
                      alt="Happy patient"
                      className="w-full h-1/2 rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="relative flex flex-col lg:flex-row-reverse justify-between items-center lg:gap-20">
        <img
          src="/src/assets/portfolio/663a59b0930b60c02f614f9b_TEDAI-speakers-section-p-1600.webp"
          alt=""
          class="h-[300px] w-full object-cover lg:h-[550px] lg:w-1/2"
        />
        <p class="absolute lg:relative text-2xl lg:text-6xl w-full lg:w-1/2 px-6 lg:px-20 top-1/2 lg:top-auto left-1/2 lg:left-auto transform -translate-x-1/2 -translate-y-1/2 lg:transform-none text-center lg:text-left bg-black bg-opacity-60 text-white lg:bg-transparent">
          "A journey into the future in the company of those creating it.”
        </p>
      </section>

      <section
        id="about"
        className="relative bg-[#000000] text-white py-20 px-6 sm:px-12 lg:px-20"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12  gap-12 items-center">
          {/* Left Side - Creative Element */}
          <div className="lg:col-span-6 flex justify-center" data-aos="zoom-in">
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 bg-gradient-to-r from-yellow-500 via-red-500 to-pink-600 rounded-full border-8 border-white shadow-2xl"></div>
              </div>
            </div>
          </div>
          {/* Right Side - Text Content */}
          <div
            className="lg:col-span-6 text-center lg:text-left"
            data-aos="fade-left"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Share Your <span className="text-[#ff0c0c]">TED Speech</span>
              <br />
              <span className="text-[#4a42ba]">With Us!</span>
            </h2>

            <div className="mt-8 text-2xl sm:text-3xl">
              <span className="font-medium">Talk about </span>
              <Typical
                loop={Infinity}
                wrapper="span"
                steps={[
                  "History 🌌",
                  2000,
                  "Innovation 🚀",
                  2000,
                  "Creativity 🎨",
                  2000,
                  "Anything 🌍",
                  2000,
                ]}
                className="text-[#6C63FF] font-semibold"
              />
            </div>

            <p className="mt-6 text-xl text-gray-400">
              Share your ideas on <span className="text-white">technology</span>
              , <span className="text-white">science</span>, or{" "}
              <span className="text-white">society</span>. Together, we can
              spark inspiration. Your voice matters, and your story has the
              power to shape the future. Whether it's a groundbreaking
              innovation, a unique perspective on history, or a vision for a
              better tomorrow, your ideas can ignite change.
            </p>

            <div className="mt-10 flex justify-center lg:justify-start">
              <button className="relative px-12 py-4 text-lg font-semibold rounded-lg transition-all duration-300 group">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-700 via-red-500 to-red-400 opacity-80 group-hover:opacity-100 group-hover:blur-md transition duration-300"></span>
                <span className="relative z-10 text-gray-200 group-hover:text-gray-100 transition-all">
                  Submit Your Idea
                </span>
                <span className="absolute -inset-0.5 rounded-lg border-2 border-gray-700 opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all"></span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="speakers" class=" lg:mt-40  relative flex flex-col lg:flex-row-reverse justify-between items-center lg:gap-20">
        <img
          src="/src/assets/bgted.png"
          alt=""
          class=" opacity-25 h-full  absolute bg-no-repeat object-fill  lg:h-[550px] w-full"
        />
        <div className="flex flex-col justify-center items-center gap-3">
         <h2 className="text-4xl mt-6 lg:mt-0 text-center sm:text-7xl font-bold leading-tight relative">
          Share Your Idea <span className="text-red-600">at TEDx</span>
        </h2>
        {/* Matn */}
        <p className="text-3xl w-10/12 text-center text-gray-100 leading-relaxed relative">
          TEDx is looking for speakers with bold ideas and inspiring stories. 
          This is your opportunity to step into the spotlight and make a difference. 
          Don’t wait—register now and start your journey!
        </p>
        <button
          className="bg-red-600 mb-10 flex items-center justify-center hover:bg-red-700 text-white font-medium py-3 px-10 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          onClick={() => {
            // Register sahifaga o'tish yoki boshqa harakat
          }}
        >
       <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe6xChbAdSfkfnt1HIA8G8Lx7yy_NNmM_l39z1q0NQWX5QkmA/viewform?usp=preview"
          target="_blank"
          rel="noopener noreferrer"
        >Register for Speakers</a>
        </button>
        </div>
      </section>
    {/* <SpeakersSection/> */}
 
    <h2 className="text-4xl font-bold text-center mb-10 font-Raleway lg:mt-56 mt-24">
          Meet Our Core Team
        </h2>
    <section data-aos="fade-in" id="organizers" className="grid grid-flow-row lg:grid-cols-3 gap-10 justify-around px-20 md:grid-cols-2 grid-cols-1">
      
      <img src={img1} alt="" className="w-[700px] rounded-md hover:shadow-lg hover:shadow-gray-800 cursor-pointer"/>
      <img src={img2} alt="" className="w-[700px] rounded-md hover:shadow-lg hover:shadow-gray-800 cursor-pointer"/>
      <img src={img3} alt="" className="w-[700px] rounded-md hover:shadow-lg hover:shadow-gray-800 cursor-pointer"/>
      <img src={img4} alt="" className="w-[700px] rounded-md hover:shadow-lg hover:shadow-gray-800 cursor-pointer"/>
      <img src={img5} alt="" className="w-[700px] rounded-md hover:shadow-lg hover:shadow-gray-800 cursor-pointer"/>
      <img src={img6} alt="" className="w-[700px] rounded-md hover:shadow-lg hover:shadow-gray-800 cursor-pointer"/>
      <img src={img7} alt="" className="w-[700px] rounded-md hover:shadow-lg hover:shadow-gray-800 cursor-pointer"/>
    </section>
    </main>
  );
};

export default Home;
