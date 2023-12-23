import html from '../../assets/code2.jpg'
import css from '../../assets/code.jpg'
import arrow from '../../assets/icons/arrow.svg'

const Projects = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-2">
      <p className="text-center mb-[27px] text-[35px] font-bold bg-gradient-to-b text-transparent bg-clip-text from-[#FF8660] to-[#933112]">PROJECTS</p>
      <div className="flex justify-center gap-7">
        <div className="bg-[#2A2A2A] w-[390px] rounded-2xl overflow-hidden">
          <img className='h-[250px] w-full object-cover' src={html} alt="" />
          <div className="flex items-center justify-between px-6 py-3">
            <div className=" font-bold">
              <p className='text-[10px] text-[#C5C5C5]'>CLICK HERE TO VISIT</p>
              <p className='text-white text-[19px]'>JAVA PROJECT</p>
            </div>
            <img src={arrow} alt="" />
          </div>
        </div>
        <div className="bg-[#2A2A2A] w-[390px] rounded-2xl overflow-hidden">
          <img className='h-[250px] w-full object-cover' src={css} alt="" />
          <div className="flex items-center justify-between px-6 py-3">
            <div className=" font-bold">
              <p className='text-[10px] text-[#C5C5C5]'>CLICK HERE TO VISIT</p>
              <p className='text-white text-[19px]'>C# PROJECT</p>
            </div>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;