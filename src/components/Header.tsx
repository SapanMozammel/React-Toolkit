interface HeaderProps {
  title: string;
  children?: React.ReactNode; // 👈️ for demo purposes
}
const Header = (props: HeaderProps) => {
  return (
    <div className="w-10/12 mx-auto flex justify-center items-center py-12 text-5xl font-bold">
      {props?.title}
    </div>
  );
};

export default Header;
