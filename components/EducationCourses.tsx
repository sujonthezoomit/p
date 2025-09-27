// EducationCourses.tsx
import React from "react";

// ------------------------
// Type Definitions
// ------------------------
type Education = {
  id: number;
  institution: string;
  degree: string;
  location: string;
  duration: string;
  gpa?: string;
  relevantCoursework?: string[];
};

type Certification = {
  id: number;
  name: string;
  platform: string;
  duration: string;
  credentialUrl?: string; // Certificate link
};

// ------------------------
// Sample Data
// ------------------------
const educationData: Education[] = [
  {
    id: 1,
    institution: "Kurigram Polytechnic Institute",
    degree: "Diploma in Engineering (Computer)",
    location: "Kurigram, Bangladesh",
    duration: "2019 - 2023",
    gpa: "3.23/4.00",
    relevantCoursework: [
      "Programming Fundamentals",
      "Database Management Systems",
      "Web Design & Development",
      "Software Engineering",
    ],
  },
];

const certificationsData: Certification[] = [
  {
    id: 1,
    name: "Complete Web Development",
    platform: "Programming Hero – Jhankar Mahbub",
    duration: "2023",
    credentialUrl: "https://www.programming-hero.com/certificate/complete-web-dev",
  },
  {
    id: 2,
    name: "Level 2 Web Development",
    platform: "Programming Hero",
    duration: "2023",
    credentialUrl: "https://www.programming-hero.com/certificate/level-2-web-dev",
  },
  {
    id: 3,
    name: "Web Design & Development with WordPress",
    platform: "Self/WordPress",
    duration: "2023",
    credentialUrl: "https://www.programming-hero.com/certificate/wordpress-web-design",
  },
];

// ------------------------
// Reusable Components
// ------------------------
const EducationCard: React.FC<{ edu: Education }> = ({ edu }) => (
  <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl shadow-lg border border-cyan-900 p-6 hover:shadow-cyan-900/20 hover:border-cyan-700 transition-all duration-300">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
      <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-900 text-cyan-100 border border-cyan-700">
        {edu.duration}
      </span>
    </div>
    <div className="mb-3">
      <p className="font-semibold text-cyan-100">
        {edu.institution}
        <span className="text-cyan-300 font-normal"> • {edu.location}</span>
      </p>
      {edu.gpa && (
        <p className="text-sm text-cyan-400 font-medium">GPA: {edu.gpa}</p>
      )}
    </div>
    {edu.relevantCoursework && edu.relevantCoursework.length > 0 && (
      <div>
        <h5 className="font-semibold text-cyan-100 mb-2">Relevant Coursework:</h5>
        <div className="flex flex-wrap gap-2">
          {edu.relevantCoursework.map((course, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-lg text-sm bg-gradient-to-r from-cyan-900/30 to-cyan-800/40 text-cyan-200 border border-cyan-700/50 hover:border-cyan-500 transition-colors duration-200"
            >
              📖 {course}
            </span>
          ))}
        </div>
      </div>
    )}
  </div>
);

const CertificationCard: React.FC<{ cert: Certification }> = ({ cert }) => (
  <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-lg border border-cyan-900 p-5 hover:shadow-cyan-900/20 hover:border-cyan-700 transition-all duration-300">
    <h4 className="font-bold text-lg text-white mb-2">{cert.name}</h4>
    <p className="text-cyan-200 text-sm">
      <span className="font-medium text-cyan-300">Platform:</span> {cert.platform}
    </p>
    <span className="text-cyan-300">{cert.duration}</span>
    {cert.credentialUrl && (
      <div className="mt-3">
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 underline hover:text-cyan-300 transition-colors duration-200"
        >
          View Certificate
        </a>
      </div>
    )}
  </div>
);

// ------------------------
// Main Component
// ------------------------
const EducationCourses: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 mt-20 lg:min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Education & Certifications
        </h2>
        <p className="mt-3 text-lg text-cyan-200">
          Academic background and professional certifications
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Education Section */}
        <div className="lg:col-span-1">
          <h3 className="text-2xl font-semibold text-white mb-6 pb-2 border-b-2 border-cyan-500">
            📚 Education
          </h3>
          <div className="space-y-6">
            {educationData.map((edu) => (
              <EducationCard key={edu.id} edu={edu} />
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="lg:col-span-1">
          <h3 className="text-2xl font-semibold text-white mb-6 pb-2 border-b-2 border-cyan-500">
            🖥️ Certifications
          </h3>
          <div className="space-y-6">
            {certificationsData.map((cert) => (
              <CertificationCard key={cert.id} cert={cert} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-10 text-center">
        <p className="text-cyan-200 text-sm bg-cyan-900/20 px-4 py-3 rounded-lg border border-cyan-800">
          💡 <strong className="text-cyan-100">Note:</strong> Certifications and coursework can be verified through their respective platforms.
        </p>
      </div>
    </section>
  );
};

export default EducationCourses;
