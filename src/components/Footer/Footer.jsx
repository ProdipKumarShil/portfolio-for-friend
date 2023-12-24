import mail from '../../assets/icons/mail.svg'
import x from '../../assets/icons/x.svg'
import tube from '../../assets/icons/tube.svg'
import insta from '../../assets/icons/insta.svg'

const Footer = () => {
  return (
    <div id='contact' className="bg-[#191919]">
      <div className="max-w-screen-xl mx-auto pt-20 px-3">
        <div className="max-w-[800px] mx-auto">
          <p className="text-[23px] mt-20 text-white font-semibold mb-[34px]">
            Contact
          </p>
          <p className=" text-[#C5C5C5] mb-[22px]">
            Seasoned Full Stack Software Engineer with over 8 years of hands-on
            experience in designing and implementing robust, scalable, and
            innovative web solutions. Adept at leveraging a comprehensive skill
            set encompassing front-end and back-end technologies
          </p>
          <div className="flex gap-2 mb-[42px]">
            <img src={mail} alt="" />
            <p className='text-[#C5C5C5]'>abmcodehub@gmail.com</p>
          </div>
          <div className="flex gap-2 pb-[103px] items-center">
            <img src={x} alt="" />
            <img src={tube} alt="" />
            <img src={insta} alt="" />
            {/* <p className='text-[#C5C5C5] text-[7px] ml-auto'>Develop by <a className='italic' href="">Prodip</a></p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
