import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="h-[50vh] w-[50vw]">
        <div className="flex flex-col justify-center items-center">
          <p className="text-center text-4xl capitalize font-medium">
            Empower Your Learning Journey <br /> at o.p jindal university
          </p>
          <p className="capitalize text-center my-5 text-lg">
            Welcome to our Learning Management System <br />
            your gateway to a seamless educational experience.
          </p>
          <Button>Explore features</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
