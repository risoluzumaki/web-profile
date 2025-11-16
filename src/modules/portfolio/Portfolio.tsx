import { useEffect, useState } from 'react';
import Card from './Card';
import type { Project} from './types';

function Portfolio(){
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const apiGithub = "https://raw.githubusercontent.com/ebayouth/data-json/refs/heads/main/data.json"
  // const apiLocal = "/projects.json"
  useEffect(() => {
    setTimeout(() => {
      fetch(apiGithub)
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      });
    }, 500);

  }, []);

  return(
    <main className="h-full p-8 flex justify-center items-center">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <p className="text-2xl p-4 text-center c-shadow-error">Wait a moment...</p>
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