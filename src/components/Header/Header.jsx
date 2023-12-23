import avatar from "../../assets/Avatar.png";

import vs from '../../assets/icons/vs.svg'
import c from '../../assets/icons/c.svg'
import cp from '../../assets/icons/cpp.svg'
import java from '../../assets/icons/java.svg'
import py from '../../assets/icons/py.svg'
import cs from '../../assets/icons/cs.svg'
import js from '../../assets/icons/js.svg'


const Header = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-2">
      <img className="mx-auto mt-[106px] mb-[42px]" src={avatar} alt="" />
      <p className="text-[55px] text-center text-white font-extrabold">I do code and </p>
      <p className="text-[55px] text-center text-white font-extrabold mb-[39px]">make content <span className="text-transparent bg-clip-text bg-gradient-to-br hover:bg-gradient-to-bl duration-1000 from-[#9A33FF] to-[#FF8660]">about it!</span> </p>
      <p className="text-center text-[#C5C5C5] mb-[54px]">I am a seasoned full-stack software engineer with over <br /> 8 years of professional experience, specializing in backend development. <br /> My expertise lies in crafting robust and scalable SaaS-based <br /> architectures on the Amazon AWS platform.</p>
      <div className="flex justify-center gap-5 mb-[88px]">
        <button className="bg-white text-black py-4 px-7 rounded-full font-bold active:scale-95 duration-300">Get In Touch</button>
        <button className="border-white border-2 text-white hover:bg-gradient-to-br from-[#9A33FF] to-[#FF8660] duration-500 hover:border-black  py-4 px-7 rounded-full font-bold active:scale-95 ">Download CV</button>
      </div>
      <p className="text-[#C5C5C5] text-center text-xl mb-[48px]">EXPERIENCE WITH</p>
      <div className="flex justify-center gap-5 mb-[100px] flex-wrap">
        <img height={43} width={42} src={c} alt="" />
        <img height={43} width={42} src={cp} alt="" />
        <img height={43} width={42} src={cs} alt="" />
        <img height={43} width={42} src={java} alt="" />
        <img height={43} width={42} src={py} alt="" />
        <img height={43} width={42} src={js} alt="" />
        <img height={43} width={42} src={vs} alt="" />
      </div>
    </div>
  );
};

export default Header;
