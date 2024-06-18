import image1 from '../../assets/Clients images/bhoomi logo.png';
import image2 from '../../assets/Clients images/chara.png';
import image3 from '../../assets/Clients images/tata nq.png';
import image4 from '../../assets/Clients images/vecmocon.png';

function Clients() {
  return (
    <div className="bg-gray-900 w-full ">
  <h1 className="sm:text-5xl text-2xl flex justify-center pt-10 font-medium title-font mb-2 text-white" style={{ fontFamily: 'Chivo, sans-serif' }}>
    Our Valuable Clients
  </h1>
  <div className="flex flex-wrap justify-center gap-4 pt-12">
    <div className="h-[10rem] w-[14rem] md:h-[14rem] md:w-[18rem] rounded-lg border border-yellow-500 flex items-center justify-center">
      <img src={image1} className="w-full h-full object-fill rounded-lg" alt="Arihant" />
    </div>
    <div className="h-[10rem] w-[14rem] md:h-[14rem] md:w-[18rem] rounded-lg border-2 border-yellow-500 flex items-center justify-center">
      <img src={image2} className="w-full h-full object-fill rounded-lg" alt="Bhanderi Lab Grown Diamonds" />
    </div>
    <div className="h-[10rem] w-[14rem] md:h-[14rem] md:w-[18rem] rounded-lg border border-yellow-500 flex items-center justify-center">
      <img src={image3} className="w-full h-full object-fill rounded-lg" alt="KEI Wires and Cables" />
    </div>
    <div className="h-[10rem] w-[14rem] md:h-[14rem] md:w-[18rem] rounded-lg border border-yellow-500 flex items-center justify-center">
      <img src={image4} className="w-full h-full object-fill rounded-lg" alt="Tata Chemicals Limited" />
    </div>
  </div>
  <div className="flex justify-center">
    <a 
      smooth={true} 
      duration={500} style={{ fontFamily: 'Chivo, sans-serif' }}
    className='text-white text-xl flex justify-center py-3 px-6 mt-8 mb-10 border-[3px] border-white rounded-2xl shadow-[#F2F625] shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:border-[#F2F625] focus:outline-none' href="/contactus">Be the next</a>
  </div>
</div>
  );
}

export default Clients;

  