import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import toast from "react-hot-toast";

import { Button } from "./ui/button";
import { MenuCloseIconBuddyIcon, MenuIconBuddyIcon } from "./icons";

const Navigation = () => {
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMobMenuOpen((prev) => !prev);

    if (isMobMenuOpen) {
      showUnderDevelopmentAlert();
    }
  };

  const showUnderDevelopmentAlert = () => {
    toast("The portal is under development...", {
      duration: 2000,
      position: "bottom-center",
      icon: "🚧",
      style: {
        background: "#ffee99",
        color: "#202020",
      },
    });
  };

  return (
    <nav className="fixed top-2 left-[50%] -translate-x-[50%] w-[95%] max-w-[780px] rounded-lg bg-[#252422] min-h-14 z-10">
      <div className="flex items-center justify-between px-3">
        <Link href="/">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              direction="ltr"
              width="55"
              height="55"
              viewBox="977.00 1227.28 153.99 152.43"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <defs />
              <g transform="matrix(1, 0, 0, 1, 1019.28, 1263.07)" opacity="1">
                <path
                  d="M51.4113,0.9373 Q57.9297,1.516 63.55,5.4207 T73.2601,14.7153 79.48,26.6092 81.61,39.8852 79.46,53.1255 73.24,65.0145 63.54,74.2799 51.39,79.9956 38.07,81.5345 24.95,78.787 13.36,72.0457 4.50,61.9741 -0.653,49.6315 -1.6227,36.2834 1.64,23.3212 8.85,12.0553 19.28,3.6191 31.82,-1.0397 45.20,-1.4426 58.05,2.3368 69.00,10.0288 77.00,20.842 81.13,33.5666 79.76,46.7167 77.40,53.1672 77.39,53.1654 77.29,47.0169 76.45,34.9477 73.02,23.6205 66.13,13.8814 56.59,6.8525 45.24,3.2911 33.36,3.4523 22.17,7.3856 12.76,14.7004 6.18,24.5824 3.08,36.0472 3.77,47.9017 8.15,58.927 15.86,67.9631 26.05,74.0978 37.62,76.7241 49.39,75.4981 60.20,70.6079 68.91,62.6036 74.60,52.2143 76.70,40.5519 75.02,28.8051 69.72,18.2177 61.32,9.8673 50.66,3.3572 44.89,0.3682 51.41,0.9373 Z"
                  fill="#e1e1e1"
                />
              </g>
              <g transform="matrix(1, 0, 0, 1, 1007.84, 1268.07)" opacity="1">
                <path
                  d="M76.8351,56.3851 Q75.1566,63.2907 69.98,68.7132 T58.1032,77.401 43.95,81.3704 29.30,80.1841 15.96,74.0352 5.63,63.639 -0.4377,50.2941 -1.5342,35.6625 2.50,21.5469 11.20,9.7484 23.44,1.6528 37.71,-1.7207 52.24,0.1287 65.25,6.911 75.09,17.7517 80.54,31.3435 81.01,45.997 76.32,59.8708 67.11,71.2875 54.57,78.8134 40.17,81.4649 25.74,78.9446 13.04,71.6242 4.74,59.8289 2.15,52.8082 2.16,52.8033 6.36,58.013 15.54,67.5863 26.68,74.3152 39.43,76.7411 52.23,74.6102 63.49,68.1723 71.85,58.2122 76.23,45.9988 76.06,32.9901 71.45,20.8517 62.92,11.0753 51.50,4.8672 38.66,2.999 25.96,5.7164 14.99,12.7029 7.11,23.0214 3.31,35.4361 4.06,48.4096 9.19,60.2986 18.16,69.6227 29.85,75.2665 42.76,76.5636 55.30,73.305 65.93,65.8494 74.54,55.3126 78.50,49.4755 76.83,56.3851 Z"
                  fill="#e1e1e1"
                />
              </g>
              <g transform="matrix(1, 0, 0, 1, 1013, 1259)" opacity="1">
                <path
                  d="M-0.3847,32.9924 Q-0.7167,26.9956 1.97,21.3536 T8.8908,11.113 18.52,3.4079 30.02,-1.0418 42.39,-1.893 54.40,0.9435 65.00,7.2613 73.23,16.472 78.33,27.7105 79.87,39.9528 77.69,52.0547 72.06,62.9686 63.43,71.7449 52.57,77.5508 40.51,79.8692 28.31,78.4537 17.04,73.4863 7.72,65.416 1.27,54.9091 -1.7349,42.9613 -1.0642,30.6432 3.21,19.0729 11.55,10.2338 16.90,6.8459 16.90,6.8532 13.68,11.4763 7.70,20.862 3.68,31.0062 2.92,41.8772 5.44,52.4889 10.94,61.8817 19.05,69.1892 28.96,73.7895 39.73,75.2483 50.45,73.378 60.15,68.3786 67.96,60.7367 73.12,51.1461 75.18,40.4573 73.93,29.6179 69.54,19.6428 62.39,11.4542 53.14,5.7502 42.62,3.0655 31.72,3.6329 21.55,7.3724 12.96,13.9951 6.71,22.9096 2.11,33.4173 -0.0428,38.9907 -0.3847,32.9924 Z"
                  fill="#e1e1e1"
                />
              </g>
              <g transform="matrix(1, 0, 0, 1, 1015.86, 1270)" opacity="1">
                <path
                  d="M54.9455,2.7242 Q61.8143,4.3525 67.19,9.4392 T75.7465,21.2007 79.63,35.1868 78.39,49.5995 72.16,62.6844 61.81,72.7968 48.54,78.6572 34.07,79.4743 20.24,75.1849 8.79,66.3567 1.19,54.0609 -1.6684,39.845 0.58,25.5383 7.69,12.9791 18.75,3.6765 32.36,-1.1689 46.80,-0.9186 60.29,4.3322 71.07,13.9722 77.81,26.7823 79.66,41.1244 76.38,55.1964 67.53,66.3432 61.59,70.7551 61.58,70.7481 65.34,65.308 71.81,53.977 74.93,41.5913 73.53,28.8562 67.80,17.418 58.41,8.713 46.57,3.8104 33.79,3.3093 21.65,7.3531 11.69,15.4167 5.15,26.4175 2.90,39.0572 5.25,51.6927 11.83,62.6415 21.82,70.614 33.94,74.621 46.71,74.1335 58.49,69.1927 67.78,60.433 73.51,49.0267 74.83,36.3635 71.65,23.9855 64.34,13.499 53.88,5.0219 48.07,1.1051 54.94,2.7242 Z"
                  fill="#e1e1e1"
                />
              </g>
            </svg>
            <p className="font-semibold text-gray-100">EduHub</p>
          </div>
        </Link>
        <ul className="items-center space-x-5 mr-5 hidden text-gray-100 md:flex">
          <Link href="/" onClick={showUnderDevelopmentAlert}>
            <li className="hover:text-gray-800 hover:bg-gray-200 rounded-full px-3 py-1">
              Admin
            </li>
          </Link>
          <a
            href="https://opjueduhub-assessment.vercel.app/"
            target="_blank"
            rel="noopener"
          >
            <li className="hover:text-gray-800 hover:bg-gray-200 rounded-full px-3 py-1">
              Assessment
            </li>
          </a>
          <Link href="/" onClick={showUnderDevelopmentAlert}>
            <li className="hover:text-gray-800 hover:bg-gray-200 rounded-full px-3 py-1">
              Student
            </li>
          </Link>
        </ul>
        <Button
          className={`bg-[#252422] hover:bg-gray-900 p-2 md:hidden ${
            isMobMenuOpen
              ? "rounded-full flex items-center justify-center"
              : "rounded-sm"
          }`}
          onClick={handleOpenMenu}
        >
          {isMobMenuOpen ? <MenuCloseIconBuddyIcon /> : <MenuIconBuddyIcon />}
        </Button>
      </div>

      {isMobMenuOpen && (
        <motion.ul
          className="items-end space-x-5 space-y-3 p-5  text-gray-200 flex flex-col md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "easeOut" }}
        >
          <Link href="/" onClick={handleOpenMenu}>
            <li className="hover:text-gray-800 hover:bg-gray-200 rounded-full px-3 py-1">
              Admin
            </li>
          </Link>
          <a
            href="https://opjueduhub-assessment.vercel.app/"
            target="_blank"
            rel="noopener"
          >
            <li className="hover:text-gray-800 hover:bg-gray-200 rounded-full px-3 py-1">
              Assessment
            </li>
          </a>
          <Link href="/" onClick={handleOpenMenu}>
            <li className="hover:text-gray-800 hover:bg-gray-200 rounded-full px-3 py-1">
              Student
            </li>
          </Link>
        </motion.ul>
      )}
    </nav>
  );
};

export default Navigation;
