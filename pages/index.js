import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import NeuralBackground from '../components/NeuralBackground';
import Image from 'next/image';

export default function Home() {
  const [activeSection, setActiveSection] = useState('main');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            entry.target.classList.remove('section-hidden');
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // Section is considered active when 50% is visible
      }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.classList.add('section-hidden');
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with real-time inventory management, secure payment processing, and an intuitive admin dashboard. Features include user authentication, product search, and order tracking.",
      image: "/assets/images/project1.jpg",
      skills: ["Node.js", "React", "MongoDB", "Express", "Redux", "Stripe API"],
      link: "#"
    },
    {
      title: "Task Management System",
      description: "A collaborative task management system with real-time updates, team collaboration features, and progress tracking. Includes drag-and-drop interface, deadline management, and team chat functionality.",
      image: "/assets/images/project2.jpg",
      skills: ["Python", "Django", "PostgreSQL", "WebSocket", "Redis", "Docker"],
      link: "#"
    },
    {
      title: "API Gateway Service",
      description: "A scalable API gateway service handling authentication, rate limiting, and request routing. Implements microservices architecture with load balancing and service discovery.",
      image: "/assets/images/project3.jpg",
      skills: ["Go", "gRPC", "Kubernetes", "Redis", "JWT", "Prometheus"],
      link: "#"
    }
  ];

  const skills = {
    frontend: ['React', 'Angular', 'Next.js'],
    backend: ['Node.js', 'Express.js', 'Python'],
    database: ['MongoDB', 'SQL'],
    other: ['Responsive Design', 'Clean Code']
  };

  const SkillTag = ({ skill }) => (
    <span className="inline-block px-3 py-1 mx-1 my-1 bg-gray-800 text-yellow-400 rounded-full text-sm border border-yellow-400/30 hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 cursor-default transform hover:scale-105 hover:shadow-[0_0_10px_rgba(234,179,8,0.3)]">
      {skill}
    </span>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <NeuralBackground />
      <div className="relative z-10">
        <Navbar activeSection={activeSection} />
        <main className="container mx-auto px-4">
          {/* Hero Section */}
          <section id="main" className="flex flex-col items-center justify-center min-h-screen">
            <div className="w-48 h-48 mb-8 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg">
              <Image
                src="/assets/images/photo.jpg"
                alt="Ehap Mohmad"
                width={192}
                height={192}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-center transform transition-all duration-300 hover:scale-110 hover:text-yellow-400 hover:drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]">
              Stwart Tom
            </h1>
            <p className="text-xl text-gray-300 mb-4 text-center max-w-2xl">
              Full Stack Developer | System Architecture Enthusiast | Problem Solver
            </p>
            <div className="text-lg text-gray-400 mb-8 text-center max-w-2xl">
              <p className="mb-4">
                I'm a web developer specializing in the{' '}
                <span className="text-yellow-400 font-semibold">MERN stack</span> with expertise in{' '}
                <span className="text-yellow-400 font-semibold">Angular</span>,{' '}
                <span className="text-yellow-400 font-semibold">Next.js</span>,{' '}
                <span className="text-yellow-400 font-semibold">Python</span>, and{' '}
                <span className="text-yellow-400 font-semibold">SQL</span>.
              </p>
              <p className="mb-6">
                I craft scalable, user-friendly web solutions with a focus on clean code and responsive design.
                I thrive on problem-solving and collaborating with clients to bring ideas to life.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="flex flex-wrap justify-center">
                    {skillList.map((skill) => (
                      <SkillTag key={skill} skill={skill} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="group relative px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(234,179,8,0.5)]"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </a>
              <a
                href="#contact"
                className="group relative px-6 py-3 border border-yellow-400 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]"
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-yellow-400/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </a>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="min-h-screen py-20">
            <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
            <div className="grid grid-cols-1 gap-12">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] transition-all duration-300"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative h-64 md:h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-4 text-yellow-400">{project.title}</h3>
                      <p className="text-gray-300 mb-6">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gray-700 text-yellow-400 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        className="inline-block px-6 py-2 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition-colors duration-300"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="min-h-screen py-20">
            <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}