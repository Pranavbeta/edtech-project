import React from "react";
import LatestCourses from "./LatestCourses";
import AboutSection from "./AboutSection";

import Footer from "./Footer";
import SignUpForm from "./SignUpForm";

function HomePage() {
    return (
      <div className="flex flex-col min-h-screen bg-black">
        <div className="flex flex-col md:flex-row flex-grow">
          {/* Left side: Sign-up & About */}
          <div className="flex flex-col w-full md:w-1/2">
            <SignUpForm />
            <AboutSection />
          </div>
  
          {/* Right side: Latest 5 courses and Explore More button */}
          <LatestCourses />
        </div>
  
        {/* Footer */}
        <Footer />
      </div>
    );
}
export default HomePage;
