import { FaGithub, FaReact, FaAws, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiNotion,
  SiTypescript,
  SiExpress,
  SiVuedotjs,
  SiPrometheus,
  SiGo,
  SiAnsible,
  SiTerraform,
  SiKubernetes,
  SiDocker,
  SiGitlab,
  SiJenkins,
} from 'react-icons/si';
import type { ProjectType, ProjectRole } from './types';

interface CardProps {
  title: string;
  projectType: ProjectType;
  projectUrl: string;
  projectRole: ProjectRole;
  technologies: string[];
}

const technologyIconMap: { [key: string]: React.ComponentType<any> } = {
  react: FaReact,
  typescript: SiTypescript,
  docker: SiDocker,
  javascript: IoLogoJavascript,
  aws: FaAws,
  node: FaNodeJs,
  express: SiExpress,
  vue: SiVuedotjs,
  prometheus: SiPrometheus,
  go: SiGo,
  ansible: SiAnsible,
  terraform: SiTerraform,
  kubernetes: SiKubernetes,
  gitlab: SiGitlab,
  jenkins: SiJenkins,
  github: FaGithub,
};

const getShadowClass = (role: ProjectRole) => {
  switch (role) {
    case 'Frontend':
      return 'c-shadow-primary';
    case 'Backend':
      return 'c-shadow-secondary';
    case 'Devops':
      return 'c-shadow-error';
    case 'Fullstack':
      return 'c-shadow-accent';
    default:
      return 'c-shadow-base';
  }
};

const getTechnologyIcon = (tech: string) => {
  const IconComponent = technologyIconMap[tech.toLowerCase()];
  return IconComponent ? <IconComponent className="text-2xl" /> : null;
};

export default function Card({ title, projectType, projectUrl, projectRole, technologies }: CardProps) {
  const shadowClass = getShadowClass(projectRole);
  const maxIcons = 4;
  const displayedTech = technologies.slice(0, maxIcons);
  const remainingTechCount = technologies.length - displayedTech.length;

  return (
    <a href={projectUrl} target="_blank" rel="noopener noreferrer" className={`card bg-base-300 shadow-xl hover:bg-base-200 ${shadowClass}`}>
      <div className="card-body">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="card-title">{title}</h2>
            <p>{projectRole}</p>
          </div>
          {projectType === "GITHUB" ? <FaGithub className="text-3xl" /> : <SiNotion className="text-3xl" />}
        </div>
        <div className="card-actions justify-start mt-4">
          <div className="flex gap-4 items-center">
            {displayedTech.map(tech => (
              <div key={tech} title={tech}>
                {getTechnologyIcon(tech)}
              </div>
            ))}
            {remainingTechCount > 0 && (
              <div className="badge badge-outline">
                +{remainingTechCount}
              </div>
            )}
          </div>
        </div>
      </div>
    </a>
  );
}
