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
      <div className="h-[40vh] w-[50vw] flex flex-col items-center">
        <p className="text-center text-5xl capitalize font-medium">
          Empower Your Learning Journey <br /> at o.p jindal university
        </p>
        <p className="capitalize text-center my-5 text-xl text-gray-700">
          Welcome to our Learning Management System <br />
          your gateway to a seamless educational experience.
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
