import React from 'react';
import {
  Calendar, Clipboard, Cog, DollarSign, HeartPulse,
  Hospital, Shield, User, Users, Clock, ChartBar, Globe
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Button = ({ children, primary, onClick, ...props }) => (
  <button
    className={`inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-md shadow-md transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
      primary
        ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:ring-blue-500'
        : 'text-gray-800 bg-white hover:bg-gray-100 focus:ring-blue-500'
    }`}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

const Card = ({ icon: Icon, title, description, primary }) => (
  <div
    className={`rounded-xl p-6 transition-all duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:rotate-[1deg] ${
      primary ? 'bg-white shadow-lg' : 'bg-gray-100 shadow-md'
    }`}
  >
    <Icon className="w-10 h-10 text-blue-600 mb-4 animate-pulse" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Button primary>Explore</Button>
  </div>
);

const Section = ({ children, bg, height }) => (
  <section className={`${height || 'py-20'} ${bg} content-center transition-all duration-500`}>
    <div className="container mx-auto px-4 h-full">{children}</div>
  </section>
);

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = (route) => {
    navigate(route);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <Hospital className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold">Hospital Management System</span>
        </div>
        <nav className="flex items-center gap-4">
          <Button primary onClick={() => handleButtonClick('/login')}>Login</Button>
          <Button onClick={() => handleButtonClick('/signup')}>Sign Up</Button>
        </nav>
      </header>

      <main className="flex-1">
        <Section bg="bg-blue-600" height="min-h-[30rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
            <div>
              <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in">
                Streamline Your Hospital Management
              </h1>
              <p className="text-xl text-white mb-10">
                Our comprehensive hospital management system helps you optimize patient care,
                streamline operations, and improve overall efficiency.
              </p>
              <div className="flex gap-4">
                <Button primary onClick={() => handleButtonClick('/login')}>Explore Features</Button>
                <Button onClick={() => handleButtonClick('/login')}>Appointments</Button>
              </div>
            </div>
            <div className="w-full h-full min-h-[20rem] rounded-xl overflow-hidden transform transition-transform hover:scale-105">
              <img src="home-1.jpeg" alt="Hospital Overview" className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: User, title: "Patient Management", description: "Efficiently manage patient records, appointments, and medical history." },
              { icon: Hospital, title: "Doctor Management", description: "Manage doctor profiles, schedules, and patient assignments." },
              { icon: Calendar, title: "Appointment Scheduling", description: "Streamline appointment booking and management for patients and doctors." }
            ].map((card, index) => (
              <Card key={index} {...card} primary />
            ))}
          </div>
        </Section>

        <Section bg="bg-gray-100" height="min-h-[25rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="w-full h-64 rounded-xl overflow-hidden transform transition-all duration-500 hover:rotate-1 hover:scale-105">
              <img src="home-2.jpeg" alt="Modern System" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Modernize Your Hospital Operations</h2>
              <p className="text-xl text-gray-700 mb-8">
                Our hospital management system provides cutting-edge features to streamline your workflows, improve
                patient satisfaction, and drive better outcomes.
              </p>
              <div className="flex gap-4">
                <Button primary onClick={() => handleButtonClick('/login')}>Explore Features</Button>
                <Button onClick={() => handleButtonClick('/login')}>Appointments</Button>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Choose Our Hospital Management System?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Clipboard, title: "Improved Efficiency", description: "Streamlines admin tasks and reduces paperwork." },
              { icon: Users, title: "Enhanced Patient Care", description: "Centralized patient data and intelligent scheduling." },
              { icon: DollarSign, title: "Cost Savings", description: "Reduces overhead costs and improves ROI." },
              { icon: HeartPulse, title: "Patient Outcomes", description: "Streamlined care leads to higher satisfaction." },
              { icon: Shield, title: "Secure Data", description: "Encrypted and access-controlled patient information." },
              { icon: Cog, title: "Customizable", description: "Highly configurable for your hospital's workflows." },
              { icon: Clock, title: "Time-Saving", description: "Automates routine tasks and processes." },
              { icon: ChartBar, title: "Analytics", description: "Gain insights with powerful reporting tools." },
              { icon: Globe, title: "Scalable", description: "Supports growth, multiple branches, and users." }
            ].map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </Section>
      </main>

      <footer className="bg-white py-6 border-t mt-10">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <p className="text-gray-600">&copy; 2025 Ayush Jaiswal Hospital Management. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
