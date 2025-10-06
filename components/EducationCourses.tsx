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
    duration: "2024",
    credentialUrl: "https://drive.google.com/file/d/1lx06sc9uTRzkjgXNXvU_TS0N1K1lexXj/view?usp=sharing",
  },
  {
    id: 2,
    name: "Level 2 Web Development",
    platform: "Programming Hero",
    duration: "2024",
    credentialUrl: "https://drive.google.com/file/d/17kbBS_18-x9E-_a1vGN31-Q5IilaTVc2/view?usp=sharing",
  },
  {
    id: 3,
    name: "Web Design & Development with WordPress",
    platform: "Self/WordPress",
    duration: "2023",
    credentialUrl: "https://drive.google.com/file/d/1JOcn4cu_nF5nEq0Qau_6IkxdmOjdYTa8/view?usp=sharing",
  },
];

// Define strict color classes
const TEXT_COLOR = 'text-white';
const ACCENT_TEXT_COLOR = 'text-cyan-600'; // Using 800 for links/Gpa
const BORDER_COLOR = 'border-cyan-950';
const SHADOW_COLOR = 'shadow-cyan-900/40';
const HOVER_BORDER_COLOR = 'hover:border-cyan-800';


// ------------------------
// Reusable Components
// ------------------------
const EducationCard: React.FC<{ edu: Education }> = ({ edu }) => (
  <div className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl ${SHADOW_COLOR} ${BORDER_COLOR} p-6 ${HOVER_BORDER_COLOR} transition-all duration-300`}>
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
      <h4 className={`text-xl font-bold ${TEXT_COLOR}`}>{edu.degree}</h4>
      {/* Duration Badge: Solid Cyan-900 background */}
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-900 ${TEXT_COLOR} border border-cyan-800`}>
        {edu.duration}
      </span>
    </div>
    <div className="mb-3">
      {/* Institution: White, Location: Cyan-800 accent */}
      <p className={`font-semibold ${TEXT_COLOR}`}>
        {edu.institution}
        <span className={`font-normal ${ACCENT_TEXT_COLOR}`}> • {edu.location}</span>
      </p>
      {edu.gpa && (
        // GPA: Cyan-800 accent
        <p className={`text-sm font-medium ${ACCENT_TEXT_COLOR}`}>GPA: {edu.gpa}</p>
      )}
    </div>
    {edu.relevantCoursework && edu.relevantCoursework.length > 0 && (
      <div>
        {/* Title: White */}
        <h5 className={`font-semibold ${TEXT_COLOR} mb-2`}>Relevant Coursework:</h5>
        <div className="flex flex-wrap gap-2">
          {edu.relevantCoursework.map((course, index) => (
            // Course Badges: Cyan-900/30 background, White text, Cyan-800 border
            <span
              key={index}
              className={`inline-flex items-center px-3 py-1 rounded-lg text-sm bg-cyan-900/30 ${TEXT_COLOR} border border-cyan-800/50 hover:border-cyan-800 transition-colors duration-200`}
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
  <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl ${SHADOW_COLOR} ${BORDER_COLOR} p-5 ${HOVER_BORDER_COLOR} transition-all duration-300`}>
    {/* Certification Name: White */}
    <h4 className="font-bold text-lg text-white mb-2">{cert.name}</h4>
    {/* Platform: White text, Cyan-800 accent for "Platform" label */}
    <p className={`text-sm ${TEXT_COLOR} mb-1`}>
      <span className={`font-medium ${ACCENT_TEXT_COLOR}`}>Platform:</span> {cert.platform}
    </p>
    {/* Duration: Cyan-800 accent */}
    <span className={`${ACCENT_TEXT_COLOR}`}>{cert.duration}</span>
    {cert.credentialUrl && (
      <div className="mt-3">
        {/* View Certificate link: Cyan-800 accent, White hover */}
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${ACCENT_TEXT_COLOR} underline hover:${TEXT_COLOR} transition-colors duration-200`}
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
    // Assuming this section is on a dark background, hence text-white is used throughout
    <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 mt-20 lg:min-h-screen bg-gray-950/50">
      
      {/* Header */}
      <div className="text-center mb-12">
        {/* Main Title: White */}
        <h2 className={`text-3xl font-bold ${TEXT_COLOR} sm:text-4xl`}>
          Education & Certifications
        </h2>
        {/* Subtitle: Cyan-800 accent */}
        <p className={`mt-3 text-lg ${ACCENT_TEXT_COLOR}`}>
          Academic background and professional certifications
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Education Section */}
        <div className="lg:col-span-1">
          {/* Section Title: White, Cyan-800 underline */}
          <h3 className={`text-2xl font-semibold ${TEXT_COLOR} mb-6 pb-2 border-b-2 border-cyan-800`}>
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
          {/* Section Title: White, Cyan-800 underline */}
          <h3 className={`text-2xl font-semibold ${TEXT_COLOR} mb-6 pb-2 border-b-2 border-cyan-800`}>
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
        {/* Footer Note: White text, Cyan-900/20 background, Cyan-800 border */}
        <p className={`${TEXT_COLOR} text-sm bg-cyan-900/20 px-4 py-3 rounded-lg border border-cyan-800`}>
          💡 <strong className={ACCENT_TEXT_COLOR}>Note:</strong> Certifications and coursework can be verified through their respective platforms.
        </p>
      </div>
    </section>
  );
};

export default EducationCourses;