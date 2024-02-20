import { Button } from "./ui/button";

const HeroSection = () => {
  const navigateToFeaturesSection = () => {
    const featureHeading = document.querySelector("#feature-section-heading");
    const featureHeadingTop =
      featureHeading?.getBoundingClientRect().top! - 100;
    window.scrollTo({
      top: featureHeadingTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="h-[40vh] w-[90vw] md:w-[50vw] flex flex-col items-center">
        <p className="py-1 px-4 bg-gray-950/10 border border-gray-300 text-gray-950 font-medium rounded-full mb-5">
          <span className="rounded-full bg-gray-800 px-4 py-1 border border-gray-500 shadow-sm inline-block mr-3">
            🚧
          </span>
          App is under development
        </p>
        <p className="text-2xl text-center md:text-5xl capitalize font-semibold">
          Empower Your Learning Journey <br /> at o.p jindal university
        </p>
        <p className="capitalize text-center my-5 text-lg md:text-xl text-gray-700">
          Welcome to our Learning Management System. your gateway to a seamless
          educational experience.
        </p>
        <Button
          onClick={navigateToFeaturesSection}
          className="md:text-base md:py-5 md:px-3 "
        >
          Explore features
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
