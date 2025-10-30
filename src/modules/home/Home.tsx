import { FaGithub} from 'react-icons/fa';
import { SiNotion } from "react-icons/si";

function Home(){
  return (
    <main className="h-full flex justify-center items-center">
      <div className='p-8 flex flex-col gap-8'>
        <div className='flex flex-col gap-4'>
          <h1 className=" text-4xl sm:text-6xl xl:text-7xl font-semibold ">
            <span className='bg-error'>Fullstack</span> & Devops Engineer
            </h1>
          <p className='text-md md:text-lg font-semibold'>Hi there, Iam a Fullstack dev and Devops Engineer</p>
        </div>
        <div className='flex justify-between'>
          <button className='btn btn-primary c-shadow-base text-xl md:text-2xl px-6'>Hired Me</button>
          <div className='flex items-center gap-4'>
            <a href='https://github.com' className='btn btn-neutral c-shadow-primary text-xl'>
              <FaGithub className=''/>
              Github
            </a>
            <a href='https://notion.so' className='btn btn-neutral c-shadow-secondary text-xl'>
              <SiNotion className=''/>
              My Notion
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home;