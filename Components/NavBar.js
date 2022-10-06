import Link from 'next/link';

const NavBar = () => {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninja">
        <a>Ninja</a>
      </Link>
    </>
  );
};

export default NavBar;
