import Link from 'next/link';

const Header = () => {
    return (
        <nav className='container mx-auto flex justify-between items-center'>
            <Link href='/' className='text-2xl font-bold'>
                Artist Name
            </Link>

            <ul className='flex gap-6'>
                <li>
                    <Link href='/'>Home</Link>
                </li>

                <li>
                    <Link href='/gallery'>Gallery</Link>
                </li>

                <li>
                    <Link href='/about'>About</Link>
                </li>

                <li>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
