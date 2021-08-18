import Head from 'next/head';
import Image from 'next/image';
import logo from '../public/logo.svg';

const Home = () => {
  return (
    <>
      <Head>
        <title>Admin Login - AkuafuLink</title>
      </Head>
      <div className='bg-gray-50 w-full h-screen fixed'>
        <div className={`flex justify-center py-16 px-5`}>
          <section className='border border-gray-50 rounded-lg shadow-lg px-8 pt-16 pb-8 bg-white max-w-screen-xs w-full'>
            <div className='text-center'>
              <Image src={logo} alt='AkufuLink Logo'></Image>
            </div>
            <hr className='my-6' />
            <form className='mb-14'>
              <fieldset className='mb-4'>
                <label htmlFor='email' className='text-xs block mb-2'>
                  Email address
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='block border border-gray-200 w-full rounded-md p-2 text-sm'
                />
              </fieldset>
              <fieldset className='mb-2'>
                <label htmlFor='password' className='text-xs block mb-2'>
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  className='block border border-gray-200 w-full rounded-md p-2 text-sm'
                />
              </fieldset>
              <div className='text-xs mb-6 underline'>
                Forgot your password?
              </div>
              {/* <Button text='Login' extraStyles='w-full' /> */}
              <a
                className={`py-2 rounded-lg bg-primary-500 text-white hover:bg-primary-300`}
              >
                <button className='w-full'>Login</button>
              </a>
            </form>
            <div className='text-xs text-center'>
              {"Don't have an account?"}{' '}
              <span className='text-primary-500 cursor-pointer'>Sign up</span>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
