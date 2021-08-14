import Link from 'next/link';
import styles from '../styles/Utilities.module.css';

const Footer: React.FC = () => {
  return (
    <>
      <svg
        width='100%'
        viewBox='0 0 1152 63'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M843.466 26.823C787.786 32.2097 733.872 41.865 678.346 47.7211C599.251 56.0684 516.883 56.5726 437.914 47.9158C361.171 39.5236 281.597 19.0548 205.766 8.65565C138.518 -0.570279 65.0976 -4.36949 0 7.15794V63H1152V41.3458C1053.63 21.9483 946.931 16.9258 843.466 26.823Z'
          fill='#EAE7E7'
        />
      </svg>

      <footer className={`${styles.grayish} text-white text-fonts pt-`}>
        <section className={`${styles.nav} text-center py-4`}>
          <p className='text-sm p-1'>
            &copy; {new Date().getFullYear()}{' '}
            <Link href='/'>
              <a className='hover:text-primary-400'>AkuafuLink.</a>
            </Link>{' '}
            All rights reserved.
          </p>
        </section>
      </footer>
    </>
  );
};
export default Footer;
