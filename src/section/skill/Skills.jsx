import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, FaBootstrap, FaGitAlt } from "react-icons/fa";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "PHP", icon: <FaPhp className="text-purple-500" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-500" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-indigo-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
];

function Skills() {
  return (
    <section className="bg-gray-900 text-white py-10 px-6 rounded-xl shadow-lg max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Skills</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform">
            <span className="text-4xl">{skill.icon}</span>
            <p className="mt-2 font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
