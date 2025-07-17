import { FaCalendarAlt } from 'react-icons/fa';

const experienceData = [
  {
    date: 'June 2025 - Aug 2025',
    role: 'Mentor at Social Summer of Code',
    company: '',
    details: [
      'Reviewed code and ideas to ensure quality, originality, and relevance of the project.',
      'Mentored on topics related to frontend/backend development, APIs, and database management.',
      'Evaluated submissions based on accuracy and hardness of work.',
    ],
  },
  {
    date: 'June 2025 - July 2025',
    role: 'Full Stack Developer Intern',
    company: 'R.Infotel Pvt. Ltd.',
    details: ['Tested some admin panel features and implemented new features.'],
  },
  {
    date: 'Sept 2024 - Feb 2025',
    role: 'IEEE : Web Development Team Member',
    company: 'IEEE',
    details: [],
  },
];

export default function Experience() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <h2 className="text-5xl font-['Saira_Stencil_One'] text-center underline mb-16">
        Experience
      </h2>

      <div className="relative pl-6 ml-4 border-l-2 border-gray-600">
        {experienceData.map((exp, idx) => (
          <div key={idx} className="relative mb-10">
            {/* Timeline Dot */}
            <div className="absolute w-4 h-4 bg-white rounded-full border-2 border-black -left-[32px] top-1"></div>

            {/* Date */}
            <div className="flex items-center gap-2 text-gray-400 text-lg mb-2">
              <FaCalendarAlt className="text-gray-500" />
              {exp.date}
            </div>

            {/* Role */}
            <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
            <p className="text-lg text-gray-400 mb-3">{exp.company}</p>

            {/* Bullet Points */}
            {exp.details.length > 0 && (
              <ul className="list-disc pl-5 text-md text-gray-300 space-y-1">
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
