import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.svg';
import styles from '../styles/Utilities.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={`${styles.grayish} text-white text-fonts`}>
      <div className='container m-auto py-4 flex justify-evenly'>
        <section>
          <h2 className='uppercase font-bold mb-3'>Quick Links</h2>
          <nav className={`${styles.nav} text-sm`}>
            <Link href='#'>
              <a
                className='block py-1 hover:text-primary-400'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  className='pr-2 inline-block'
                  src='/images/facebook.svg'
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
                  src='/images/twitter.svg'
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
                  src='/images/instagram.svg'
                  alt='Instagram'
                />
                Instagram
              </a>
            </Link>
          </nav>
        </section>
        <section>
          <h2 className='uppercase font-bold mb-3'>Quick Links</h2>
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
        <section className='hidden md:block'>
          <h2 className='uppercase font-bold mb-3'>Top Selling</h2>
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
      <section className='text-center py-4'>
        <nav className='flex justify-center'>
          <Link href='#'>
            <a className='p-2 m-1' target='_blank' rel='noopener noreferrer'>
              <img src='/images/youtube.svg' alt='Youtube' />
            </a>
          </Link>
          <Link href='#'>
            <a className='p-2 m-1' target='_blank' rel='noopener noreferrer'>
              <img src='/images/facebook.svg' alt='Facebook' />
            </a>
          </Link>
          <Link href='#'>
            <a className='p-2 m-1' target='_blank' rel='noopener noreferrer'>
              <img src='/images/instagram.svg' alt='Instagram' />
            </a>
          </Link>
          <Link href='#'>
            <a className='p-2 m-1' target='_blank' rel='noopener noreferrer'>
              <img src='/images/twitter.svg' alt='Twitter' />
            </a>
          </Link>
        </nav>
        {/* <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
          className='p-1'
        >
          Powered by AKUAFULINK
        </a> */}
        <p className='text-sm p-1'>
          &copy; {new Date().getFullYear()} AkuafuLink. All rights reserved.
        </p>
      </section>
    </footer>
  );
};
export default Footer;
