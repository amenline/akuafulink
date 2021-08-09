import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.svg';
import styles from '../styles/Utilities.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={`${styles.grayish} text-white text-fonts`}>
      <div className='container m-auto py-4 flex justify-evenly'>
        <section className='hidden md:block'>
          {/* <h2 className='uppercase font-bold mb-3'></h2> */}
          <Image src={logo} alt='AkuafuLink logo' />
          <nav className={`${styles.nav} text-sm`}>
            <Link href='#'>
              <a
                className='block py-1 hover:text-primary-400'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  className='pr-2 inline-block'
                  src='/icons/facebook.svg'
                  alt='Facebook'
                />
                Facebook
              </a>
            </Link>
            <Link href='#'>
              <a
                className='block py-1 hover:text-primary-400'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  className='pr-2 inline-block'
                  src='/icons/twitter.svg'
                  alt='Twitter'
                />
                Twitter
              </a>
            </Link>
            <Link href='#'>
              <a
                className='block py-1 hover:text-primary-400'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  className='pr-2 inline-block'
                  src='/icons/instagram.svg'
                  alt='Instagram'
                />
                Instagram
              </a>
            </Link>
          </nav>
        </section>
        <section>
          <h2 className={`uppercase font-bold mb-3 ${styles.heading}`}>
            Quick Links
          </h2>
          <nav className={`${styles.nav} text-sm`}>
            <Link href='#'>
              <a className='block py-1 hover:text-primary-400'>Wholesale</a>
            </Link>
            <Link href='#'>
              <a className='block py-1 hover:text-primary-400'>City Market</a>
            </Link>
            <Link href='#'>
              <a className='block py-1 hover:text-primary-400'>Contact Us</a>
            </Link>
            <Link href='#'>
              <a className='block py-1 hover:text-primary-400'>Signup</a>
            </Link>
          </nav>
        </section>
        <section>
          <h2 className={`uppercase font-bold mb-3 ${styles.heading}`}>
            Top Selling
          </h2>
          <nav className={`${styles.nav} text-sm`}>
            <Link href='/'>
              <a className='block py-1 hover:text-primary-400'>Vegetables</a>
            </Link>
            <Link href='/news'>
              <a className='block py-1 hover:text-primary-400'>Fruits</a>
            </Link>
            <Link href='/fixtures'>
              <a className='block py-1 hover:text-primary-400'>Grains</a>
            </Link>
          </nav>
        </section>
      </div>
      <section className={`${styles.nav} text-center py-4`}>
        <nav className='flex justify-center md:hidden'>
          <Link href='#'>
            <a className='p-2 m-1' target='_blank' rel='noopener noreferrer'>
              <img src='/icons/facebook.svg' alt='Facebook' />
            </a>
          </Link>
          <Link href='#'>
            <a className='p-2 m-1' target='_blank' rel='noopener noreferrer'>
              <img src='/icons/instagram.svg' alt='Instagram' />
            </a>
          </Link>
          <Link href='#'>
            <a className='p-2 m-1' target='_blank' rel='noopener noreferrer'>
              <img src='/icons/twitter.svg' alt='Twitter' />
            </a>
          </Link>
        </nav>
        <p className='text-sm p-1'>
          &copy; {new Date().getFullYear()}{' '}
          <Link href='/'>
            <a className='hover:text-primary-400'>AkuafuLink.</a>
          </Link>{' '}
          All rights reserved.
        </p>
      </section>
    </footer>
  );
};
export default Footer;
