import { useEffect, useState } from 'react';
import Card from './Card';
import type { ProjectType, Project, ProjectRole } from './types';

function Portfolio(){
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  return(
    <main className="h-full p-8 flex justify-center items-center">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <p className="text-2xl">Loading projects...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projects.map(project => (
            <Card key={project.title} {...project} />
          ))}
        </div>
      )}
    </main>
  )
}

export default Portfolio;