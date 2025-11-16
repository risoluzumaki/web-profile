import { FaGithub} from 'react-icons/fa';
import { SiNotion } from "react-icons/si";

function Home(){
  
  return (
    <main className="h-full flex justify-center items-center">
      <div className='p-8 flex flex-col gap-8'>
        <div className='flex flex-col gap-4'>
          <h1 className=" text-3xl sm:text-5xl xl:text-6xl font-semibold ">
            <span className='bg-green-500 text-base-100'>FULLSTACK</span> & DEVOPS ENTHUSIAST 
            </h1>
          <p className='text-md md:text-lg font-semibold'>Hi there, i'm a Fullstack developer and Devops Enthusiast </p>
        </div>
        <div className='flex justify-between'>
          <a className='btn btn-primary c-shadow-base text-xl md:text-2xl px-6' href='https://mail.google.com/mail/?view=cm&fs=1&to=rizkybayupasena2002@gmail.com' target='_blank' >Hired Me</a>
          <div className='flex items-center gap-4'>
            <a href='https://github.com/risoluzumaki' className='btn btn-neutral c-shadow-primary text-xl'>
              <FaGithub className=''/>
              Github
            </a>
            <a href='https://www.notion.so/Welcome-to-Notion-243f56c5e71580f18674d5134e83eb5f?source=copy_link' className='btn btn-neutral c-shadow-secondary text-xl'>
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