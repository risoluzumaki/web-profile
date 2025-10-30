import { FaGithub } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';
import type { ProjectType, ProjectRole } from './types';

interface CardProps {
  title: string;
  projectType: ProjectType;
  projectUrl: string;
  projectRole: ProjectRole;
}

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
      return 'c-shadow-base'; // Default shadow
  }
};

export default function Card({ title, projectType, projectUrl, projectRole }: CardProps) {
  const shadowClass = getShadowClass(projectRole);
  return (
    <a href={projectUrl} target="_blank" rel="noopener noreferrer" className={`card bg-base-300 shadow-xl hover:bg-base-200 ${shadowClass}`}>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title">{title}</h2>
          {projectType === "GITHUB" ? <FaGithub className="text-3xl" /> : <SiNotion className="text-3xl" />}
        </div>
      </div>
    </a>
  );
}
