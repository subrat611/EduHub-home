const Features = () => {
  return (
    <div className="flex flex-col mb-10 px-3 md:px-0">
      <h1
        className="text-xl text-center text-gray-600 font-medium md:text-3xl"
        id="feature-section-heading"
      >
        Elevate Your Learning Experience <br /> with Our Dynamic Features
      </h1>
      <div className="mt-10">
        <div className="shadow-sm border rounded-lg px-4 py-5 my-5 overflow-hidden">
          <div>
            <p className="text-lg md:text-xl font-medium text-gray-800">
              Course Creation and Management
            </p>
            <ol className="px-5 list-disc space-y-1 mt-2">
              <li>
                Easily create and manage courses tailored to your curriculum.
              </li>
              <li>
                Access a variety of courses relevant to your program, each
                crafted to provide comprehensive learning experiences.
              </li>
            </ol>
            <div className="rounded-md overflow-hidden border shadow-sm mt-5">
              <img
                src="/create-course.png"
                alt="create-course-demo"
                className="object-cover object-[-10px_20px] scale-125 -rotate-3"
              />
            </div>
          </div>
        </div>

        <div className="shadow-sm border rounded-lg px-3 py-5 my-5">
          <div>
            <p className="text-lg md:text-xl font-medium text-gray-800">
              Effortless Exam Scheduling
            </p>
            <ol className="px-5 list-disc space-y-1 mt-2">
              <li>
                Schedule exams with just a few clicks, ensuring a smooth and
                organized assessment process.
              </li>
              <li>
                Stay informed about upcoming exams, making it simple to plan and
                prepare.
              </li>
            </ol>
          </div>
        </div>

        <div className="shadow-sm border rounded-lg px-3 py-5 my-5">
          <div>
            <p className="text-lg md:text-xl font-medium text-gray-800">
              Mobile Responsive Design
            </p>
            <ol className="list-none space-y-1 mt-2">
              <li>
                Access the LMS seamlessly from any device, ensuring flexibility
                and convenience in your learning journey.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
