import google from "../../assets/icons/google.svg";
import apple from "../../assets/icons/apple.svg";
import meta from "../../assets/icons/meta.svg";

const Experience = () => {
  return (
    <div id="experience">
      <p data-aos="zoom-in" className="text-center mb-[57px] text-[35px] font-bold bg-gradient-to-b text-transparent bg-clip-text from-[#5BADFF] to-[#0a3f74]">
        EXPERIENCE
      </p>
      <div data-aos="zoom-out" className="max-w-[810px] mx-auto mb-[50px] px-3">
        <div className="block md:flex justify-between mb-[23px]">
          <div className="flex gap-2 items-start md:items-center">
            <img src={google} alt="" />
            <p className="text-[20px] text-white font-semibold">
              Lead Software Engineer at Google
            </p>
          </div>
          <p className="text-[#8491A0] text-[14px]">Nov 2019 - Present</p>
        </div>
        <p className="text-[#8491A0] text-justify">As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
      </div>
      <div data-aos="zoom-out" className="max-w-[810px] mx-auto mb-[50px] px-3">
        <div className="block md:flex justify-between mb-[23px]">
          <div className="flex gap-2 items-start md:items-center">
            <img src={apple} alt="" />
            <p className="text-[20px] text-white font-semibold">
            Junior Software Engineer at Apple
            </p>
          </div>
          <p className="text-[#8491A0] text-[14px]">Jan 2016 - Dec 2017</p>
        </div>
        <p className="text-[#8491A0] text-justify">As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
      </div>
      <div data-aos="zoom-out" className="max-w-[810px] mx-auto mb-[50px] px-3">
        <div className="block md:flex justify-between mb-[23px]">
          <div className="flex gap-2 items-start md:items-center">
            <img src={meta} alt="" />
            <p className="text-[20px] text-white font-semibold">
            Software Engineer at Meta
            </p>
          </div>
          <p className="text-[#8491A0] text-[14px]">Jan 2017 - Oct 2019</p>
        </div>
        <p className="text-[#8491A0] text-justify">As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
      </div>
    </div>
  );
};

export default Experience;
