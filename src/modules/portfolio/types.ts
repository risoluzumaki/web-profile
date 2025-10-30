export type ProjectType = 'GITHUB' | 'NOTION';
export type ProjectRole = 'Frontend' | 'Backend' | 'Devops' | 'Fullstack';

export interface Project {
  title: string;
  projectType: ProjectType;
  projectUrl: string;
  projectRole: ProjectRole;
}
