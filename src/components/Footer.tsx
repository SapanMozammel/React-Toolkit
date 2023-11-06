import Link from 'next/link';

const Footer = () => {
  return (
    <div className="w-10/12 mx-auto flex justify-center items-center py-8 text-xl gap-[1ch]">
      Powered by
      <Link href="https://sapan-portfolio.vercel.app" target='_blank' className='text-blue-900 hover:text-blue-700 transition font-semibold'>Sapan Mozammel</Link>
    </div>
  );
};

export default Footer;
