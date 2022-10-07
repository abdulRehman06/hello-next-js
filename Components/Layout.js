import Navbar from './NavBar';
import Footer from './Footer';
import Image from 'next/image';
const Layout = ({ children }) => {
  return (
    <div className="content">
      <div className="logo">
        <Image src="/logo.png" alt="site logo" width={128} height={77} />
      </div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
