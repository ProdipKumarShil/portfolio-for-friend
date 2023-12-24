import html from '../../assets/code2.jpg'
import css from '../../assets/code.jpg'
import arrow from '../../assets/icons/arrow.svg'

const Projects = () => {
  return (
    <div id='project' className="max-w-screen-xl mx-auto px-2 mb-[96px]">
      <p data-aos="zoom-in" className="text-center mb-[27px] text-[35px] font-bold bg-gradient-to-b text-transparent bg-clip-text from-[#FF8660] to-[#933112]">PROJECTS</p>
      <div className="block md:flex  justify-center gap-7">
        <div data-aos="fade-right" className="bg-[#2A2A2A] mb-10 md:mb-0 w-full md:w-[390px] rounded-2xl overflow-hidden">
          <img className='h-[250px] w-full object-cover' src={html} alt="" />
          <div className="flex items-center justify-between px-6 py-3">
            <div className=" font-bold">
              <p className='text-[10px] text-[#C5C5C5]'>CLICK HERE TO VISIT</p>
              <p className='text-white text-[19px]'>JAVA PROJECT</p>
            </div>
            <img src={arrow} alt="" />
          </div>
        </div>
        <div data-aos="fade-left" className="bg-[#2A2A2A] w-full md:w-[390px] rounded-2xl overflow-hidden">
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