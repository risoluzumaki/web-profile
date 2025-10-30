import { FaGithub} from 'react-icons/fa';
import { SiNotion } from "react-icons/si";

function Home(){
  return (
    <main className="h-full flex justify-center items-center">
      <div className='p-8 flex flex-col gap-8'>
        <div className='flex flex-col gap-4'>
          <h1 className="text-6xl font-semibold">Fullstack & Devops Engineer</h1>
          <p>Hi there, Iam a Fullstack dev and Devops Engineer</p>
        </div>
        <div className='flex justify-between'>
          <button className='btn btn-primary btn-shadow-base text-xl px-6'>Hired Me</button>
          <div className='flex items-center gap-4'>
            <a href='https://github.com' className='btn btn-neutral btn-shadow-primary'>
              <FaGithub className='text-2xl'/>
              Github
            </a>
            <a href='https://notion.so' className='btn btn-neutral btn-shadow-secondary'>
              <SiNotion className='text-2xl'/>
              My Notion
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home;