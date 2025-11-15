import React from "react";
import Herobg from "../../assets/hero-bg.png";
import Feature1 from "../../assets/illustration-features-tab-1.png";
import Feature2 from "../../assets/illustration-features-tab-2.png";
import Feature3 from "../../assets/illustration-features-tab-3.png";
import ChromeLogo from "../../assets/logo-chrome.svg";
import FirefoxLogo from "../../assets/logo-firefox.svg";
import OperaLogo from "../../assets/logo-opera.svg";

const Home = () => {
  return (
    <>
      <section className="relative">
        {/* hero section common div */}
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
          {/* content part left side */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="text-bookmark-purple font-Raleway text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6">
              A simple Bookmark Manager
            </h2>
            <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
              Bookmarks Extension for Google is a minimal, clean Chrome
              Extension for Google Bookmarks. Open a new browser tab and see
              your sites load instantly. Try it for free.
            </p>
            {/* button part */}
            <div className="flex justify-center flex-wrap gap-6">
              <button
                type="button"
                className="shadow-md py-3 px-6 rounded-md transition duration-300 bg-bookmark-blue text-white hover:bg-white hover:text-black"
              >
                Get it on chrome
              </button>
              <button
                type="button"
                className="shadow-md py-3 px-6 rounded-md transition duration-300 bg-bookmark-white text-black hover:bg-bookmark-blue hover:text-white"
              >
                Get it on firefox
              </button>
            </div>
          </div>
          {/* content/ image part right side */}
          <div className="flex justify-center flex-1 mb-8 md:mb-14 lg:mb-0 z-10">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src={Herobg}
              alt="hero"
            />
          </div>
        </div>
        {/* background rectangle part */}
        <div className="hidden lg:block overflow-hidden bg-bookmark-blue rounded-l-full absolute h-96 w-2/4 top-52 right-0" />
      </section>

      <section className="bg-bookmark-white py-20 mt-20 lg:mt-50">
        {/* heading & features Intro */}
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 className="text-4xl text-center text-bookmark-purple">
            Features
          </h1>
          <p className="text-center text-bookmark-grey mt-4">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        {/* features base div */}
        <div className="relative mt-20 lg:mt-24">
          {/* feature1 */}
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            {/* image */}
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
              <img
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                src={Feature1}
                alt="features"
              />
            </div>
            {/* content */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-bookmark-purple">
                Bookmark in one click
              </h1>
              <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites.
              </p>
              <button
                type="button"
                className="shadow-md py-3 px-6 rounded-md transition duration-300 bg-bookmark-blue text-white hover:bg-white hover:text-black"
              >
                More Info
              </button>
            </div>
          </div>
          {/* rounded rectangle background */}
          <div className="hidden lg:block overflow-hidden bg-bookmark-blue rounded-r-full absolute h-80 w-2/4 -bottom-24 -left-36" />
        </div>
        {/* feature 1 ends */}
        <div className="relative mt-20 lg:mt-52">
          {/* feature2 */}
          <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
            {/* image */}
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
              <img
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                src={Feature2}
                alt="features"
              />
            </div>
            {/* content */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-bookmark-purple">
                Intelligent search
              </h1>
              <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Our powerful search feature will help you find saved sites in no
                time at all. No need to crawl through all of your bookmarks.
              </p>
              <button
                type="button"
                className="shadow-md py-3 px-6 rounded-md transition duration-300 bg-bookmark-blue text-white hover:bg-white hover:text-black"
              >
                More Info
              </button>
            </div>
          </div>
          {/* rounded rectangle background */}
          <div className="hidden lg:block overflow-hidden bg-bookmark-blue rounded-l-full absolute h-96 w-2/4 top-60 right-0" />
        </div>
        {/* feature 2 ends */}
        <div className="relative mt-20 lg:mt-24">
          {/* feature3 */}
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            {/* image */}
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
              <img
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                src={Feature3}
                alt="features"
              />
            </div>
            {/* content */}
            <div className="flex flex-1 flex-col items-center lg:items-start lg:mt-10">
              <h1 className="text-3xl text-bookmark-purple">
                Share your bookmarks
              </h1>
              <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Easily share your bookmarks and collections with others. Create
                a shareable link that you can send at the click of a button.
              </p>
              <button
                type="button"
                className="shadow-md py-3 px-6 rounded-md transition duration-300 bg-bookmark-blue text-white hover:bg-white hover:text-black"
              >
                More Info
              </button>
            </div>
          </div>
          {/* rounded rectangle background */}
          <div className="hidden lg:block overflow-hidden bg-bookmark-blue rounded-r-full absolute h-80 w-2/4 -bottom-24 -left-36" />
        </div>
        {/* feature 3 ends */}
      </section>

      <section className="py-20 mt-20">
        <div className="sm:w-3/4 lg:w-5/12 px-2 mx-auto">
          <h1 className="text-3xl text-center text-bookmark-purple">
            Download the Extension
          </h1>
          <p className="text-center text-bookmark-grey mt-4">
            We've got more browsers in the pipeline.Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </div>
        {/* cards part */}
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
          {/* card1 starts */}
          <div className="flex flex-col rounded-md shadow-lg lg:mb-16">
            {/* card1 first part */}
            <div className="p-6 flex flex-col items-center">
              <img src={ChromeLogo} alt="chrome" />
              <h3 className="mt-5 mb-2 text-bookmark-purple text-lg">
                Add to Chrome
              </h3>
              <p className="text-bookmark-grey font-light mb-2">
                Minimum Version 32
              </p>
            </div>
            {/* card1 second part */}
            <hr className="border-b border-bookmark-white" />
            <div className="flex p-6">
              <button
                type="button"
                className="flex-1 shadow-md py-3 px-6 rounded-md transition duration-300 bg-bookmark-blue text-white hover:bg-white hover:text-black"
              >
                Add &amp; Install Extension
              </button>
            </div>
          </div>
          {/* card1 ends */}
          {/* card2 starts */}
          <div className="flex flex-col rounded-md shadow-lg lg:my-8">
            {/* card2 first part */}
            <div className="p-6 flex flex-col items-center">
              <img src={FirefoxLogo} alt="firefox" />
              <h3 className="mt-5 mb-2 text-bookmark-purple text-lg">
                Add to FireFox
              </h3>
              <p className="text-bookmark-grey font-light mb-2">
                Minimum Version 32
              </p>
            </div>
            {/* card2 second part */}
            <hr className="border-b border-bookmark-white" />
            <div className="flex p-6">
              <button
                type="button"
                className="flex-1 shadow-md py-3 px-6 rounded-md transition duration-300 bg-bookmark-blue text-white hover:bg-white hover:text-black"
              >
                Add &amp; Install Extension
              </button>
            </div>
          </div>
          {/* card2 ends */}
          {/* card3 starts */}
          <div className="flex flex-col rounded-md shadow-lg lg:mt-16">
            {/* card3 first part */}
            <div className="p-6 flex flex-col items-center">
              <img src={OperaLogo} alt="opera" />
              <h3 className="mt-5 mb-2 text-bookmark-purple text-lg">
                Add to Opera
              </h3>
              <p className="text-bookmark-grey font-light mb-2">
                Minimum Version 32
              </p>
            </div>
            {/* card3 second part */}
            <hr className="border-b border-bookmark-white" />
            <div className="flex p-6">
              <button
                type="button"
                className="flex-1 shadow-md py-3 px-6 rounded-md transition duration-300 bg-bookmark-blue text-white hover:bg-white hover:text-black"
              >
                Add &amp; Install Extension
              </button>
            </div>
          </div>
          {/* card3 ends */}
        </div>
      </section>

      <section className="bg-bookmark-white py-20">
        {/* base div */}
        <div className="container">
          {/* Header part starts */}
          <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
            <h1 className="text-3xl text-center text-bookmark-purple">
              Frequently Asked Questions
            </h1>
            <p className="text-center text-bookmark-grey mt-4">
              Here are some of our FAQs. If you have any other questions you'd
              lik answered please feel free to reach out us.
            </p>
          </div>
          {/* Header part Ends */}
          {/* FAQ Items part start */}
          <div className="flex flex-col sm:w-3/4 lg:w-5/12 mx-auto mt-12">
            {/* FAQ Item 1  start */}
            <div className="flex items-center border-b py-4">
              <span className="flex-1">What is a Bookmark?</span>
              <i className="fas fa-chevron-down text-bookmark-purple" />
            </div>
            {/* FAQ Item 1 Ends */}
            {/* FAQ Item 2  start */}
            <div className="flex items-center border-b py-4">
              <span className="flex-1">How Can I Request a new Browser?</span>
              <i className="fas fa-chevron-down text-bookmark-purple" />
            </div>
            {/* FAQ Item 2 Ends */}
            {/* FAQ Item 3  start */}
            <div className="flex items-center border-b py-4">
              <span className="flex-1">Is there a Mobile-App ?</span>
              <i className="fas fa-chevron-down text-bookmark-purple" />
            </div>
            {/* FAQ Item 3 Ends */}
            {/* FAQ Item 4  start */}
            <div className="flex items-center border-b py-4">
              <span className="flex-1">What About Chromium Browsers?</span>
              <i className="fas fa-chevron-down text-bookmark-purple" />
            </div>
            {/* FAQ Item 4 Ends */}
          </div>
        </div>
      </section>

      <section className="bg-bookmark-blue text-white py-20">
        <div className="container">
          <div className="sm:w-3/4 lg:w-5/12 mx-auto">
            <p className="font-light uppercase text-center mb-8">
              50,000+ Users Already Joined
            </p>
            <h1 className="text-3xl text-center">
              Stay Up-To-Date with what We're Doing
            </h1>
            <div className="flex flex-col sm:flex-row gap-6 mt-10">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="focus:outline-none text-black flex-1 px-3 py-3 rounded-md bg-white"
              />
              <button
                type="button"
                className="shadow-md px-6 py-3 rounded-md transition duration-300 bg-bookmark-red text-white hover:bg-white hover:text-black"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
