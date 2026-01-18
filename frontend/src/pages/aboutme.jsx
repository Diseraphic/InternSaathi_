import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CreatorCard = ({ photo, name, role, bio, link }) => (
  <div className="max-w-sm mx-auto text-center p-6 bg-white rounded-2xl shadow-md">
    <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-100">
      <img
        src={photo}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
    <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
    <p className="text-sm text-gray-600 mt-1">{role}</p>
    <p className="text-sm text-gray-600 mt-3">{bio}</p>
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-sm font-medium underline text-teal-600"
      >
        View profile
      </a>
    )}
  </div>
);

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <Navbar />

      {/* Hero */}
      <header className="pt-24 pb-10 px-6 text-center bg-gradient-to-r from-white to-orange-50">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
          InternSaathi
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          InternSaathi is a student-focused project that helps learners bridge
          the gap between classroom learning and industry readiness. Built as
          a college project to demonstrate product thinking, frontend design,
          and internship-matching workflows.
        </p>
      </header>

      {/* What we do */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            What InternSaathi Does
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">Verified Internships</h3>
              <p className="text-sm text-gray-600">
                Curated internship listings designed to give practical exposure
                and hands-on learning opportunities.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">Mentorship Pathways</h3>
              <p className="text-sm text-gray-600">
                Guidance snippets and interview tips tailored for students
                preparing for technical and non-technical roles.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">Skill-friendly Matching</h3>
              <p className="text-sm text-gray-600">
                A simple matching idea that pairs students’ skills and interests
                with internship roles they can learn from.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Approach */}
      <section className="py-10 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            InternSaathi’s mission is to make meaningful internship opportunities
            discoverable and accessible to students. The project focuses on
            transparency, practical learning, and building confidence for the
            early-career journey.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-800">Student first</h4>
              <p className="text-sm text-gray-600">Design choices prioritize learning outcomes over monetization.</p>
            </div>
            <div className="p-5 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-800">Practical focus</h4>
              <p className="text-sm text-gray-600">Internships and resources that teach real, usable skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Creator (single-person, no team name) */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Project Creator</h3>

          <CreatorCard
            photo="/team-pic/dilseerat.png"
            name="Dilseerat Kaur"
            role="Student • B.Tech (Information Technology)"
            bio="This project was built as a college assignment to demonstrate web design, React development, and an understanding of internship workflows. It showcases UI design, component structure, and thoughtful UX for student users."
            link="https://www.linkedin.com/in/dilseerat-kaur-9502702b0/"
          />
        </div>
      </section>

      {/* Contact / Use for demo */}
      <section className="py-8 px-6 bg-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Use & Demo</h4>
          <p className="text-sm text-gray-700">
            This page and the project are intended for demonstration and academic
            evaluation. You can adapt the layout, copy, and images for your demo
            presentation or prototype walkthrough.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
