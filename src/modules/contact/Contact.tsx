import {
  FaDocker, FaNodeJs, FaReact, FaAws, FaGitAlt, FaJenkins, FaPython, FaHtml5, FaCss3Alt, FaFigma, FaLinkedin, FaInstagram, FaGitlab, FaJava, FaVuejs, FaLinux, FaUbuntu
} from 'react-icons/fa';
import { 
  SiAnsible, SiKubernetes, SiTerraform, SiGooglecloud, SiTypescript, SiJavascript, SiVite, SiNextdotjs, SiPostgresql, SiRedis, SiGnubash, SiPrometheus, SiGrafana
} from 'react-icons/si';
import { BiLogoGoLang } from 'react-icons/bi';
import { BsTwitterX } from "react-icons/bs";

const icons = [
  { icon: FaDocker, color: 'text-blue-500', top: '10%', left: '20%', animation: 'animate-float' },
  { icon: FaNodeJs, color: 'text-green-500', top: '25%', left: '70%', animation: 'animate-pulse-slow' },
  { icon: FaReact, color: 'text-blue-400', top: '80%', left: '10%', animation: 'animate-spin-slow' },
  { icon: FaAws, color: 'text-orange-500', top: '50%', left: '50%', animation: 'animate-float' },
  { icon: FaGitAlt, color: 'text-red-500', top: '90%', left: '80%', animation: 'animate-pulse-slow' },
  { icon: FaJenkins, color: 'text-gray-500', top: '5%', left: '85%', animation: 'animate-float' },
  { icon: SiKubernetes, color: 'text-blue-600', top: '60%', left: '30%', animation: 'animate-spin-slow' },
  { icon: SiTerraform, color: 'text-purple-600', top: '40%', left: '10%', animation: 'animate-float' },
  { icon: SiGooglecloud, color: 'text-yellow-500', top: '70%', left: '60%', animation: 'animate-pulse-slow' },
  { icon: SiTypescript, color: 'text-blue-700', top: '15%', left: '45%', animation: 'animate-float' },
  { icon: FaPython, color: 'text-yellow-400', top: '85%', left: '40%', animation: 'animate-spin-slow' },
  { icon: BiLogoGoLang, color: 'text-cyan-500', top: '5%', left: '5%', animation: 'animate-float' },
  { icon: SiJavascript, color: 'text-yellow-300', top: '55%', left: '90%', animation: 'animate-pulse-slow' },
  { icon: FaHtml5, color: 'text-orange-600', top: '35%', left: '80%', animation: 'animate-float' },
  { icon: FaCss3Alt, color: 'text-blue-600', top: '75%', left: '95%', animation: 'animate-float' },
  { icon: SiVite, color: 'text-purple-500', top: '20%', left: '95%', animation: 'animate-pulse-slow' },
  { icon: FaFigma, color: 'text-pink-500', top: '95%', left: '5%', animation: 'animate-spin-slow' },
  { icon: SiNextdotjs, top: '50%', left: '5%', animation: 'animate-float' },
  { icon: SiPostgresql, color: 'text-blue-800', top: '95%', left: '60%', animation: 'animate-pulse-slow' },
  // { icon: SiMongodb, color: 'text-green-600', top: '50%', left: '75%', animation: 'animate-float' },
  { icon: SiRedis, color: 'text-red-600', top: '30%', left: '30%', animation: 'animate-spin-slow' },
  { icon: SiAnsible, top: '5%', left: '60%', animation: 'animate-float' },
  { icon: FaGitlab, color: 'text-orange-400', top: '70%', left: '0%', animation: 'animate-pulse-slow' },
  { icon: FaJava, color: 'text-red-400', top: '90%', left: '25%', animation: 'animate-float' },
  { icon: FaVuejs, color: 'text-green-400', top: '0%', left: '35%', animation: 'animate-spin-slow' },
  { icon: SiGnubash, top: '45%', left: '95%', animation: 'animate-float' },
  { icon: SiPrometheus, color: 'text-orange-700', top: '65%', left: '45%', animation: 'animate-pulse-slow' },
  { icon: SiGrafana, color: 'text-orange-600', top: '85%', left: '70%', animation: 'animate-float' },
  { icon: FaLinux, top: '0%', left: '20%', animation: 'animate-pulse-slow' },
  { icon: FaUbuntu, color: 'text-orange-700', top: '95%', left: '95%', animation: 'animate-float' },
];

function Contact(){
  return (
    <main className="h-full flex flex-col justify-center items-center p-4">
      <h2 className='text-2xl font-bold mb-8'>"Unreligious tech stack use"</h2>
      <div className="flex flex-col lg:flex-row gap-4 w-full max-w-6xl">
        {/* Left side: Tech stack icons */}
        <div className="relative flex-1 min-h-[400px] lg:min-h-[auto]">
          {icons.map((item, index) => {
            const Icon = item.icon;
            return <Icon key={index} className={`absolute text-4xl md:text-5xl lg:text-6xl ${item.color} ${item.animation}`} style={{ top: item.top, left: item.left }} />
          })}
        </div>

        {/* Right side: Photo and social links */}
        <div className="flex flex-col items-center justify-center gap-8 flex-1">
          {/* Placeholder for photo */}
          <div className="w-64 h-64 bg-base-300 rounded-full border-2 border-secondary flex items-center justify-center text-xl">
            Your Photo Here
          </div>
          <div className="flex gap-8 text-4xl">
            <a href="#" className="hover:text-info"><FaLinkedin /></a>
            <a href="#" className="hover:text-blue-900"><BsTwitterX /></a>
            <a href="#" className="hover:text-accent"><FaInstagram /></a>
          </div>
          {/* Download CV Button */}
          <a href="/cv.pdf" download className="btn font-bold text-lg c-shadow-secondary">Download CV</a>
        </div>
      </div>
    </main>
  )
}

export default Contact;