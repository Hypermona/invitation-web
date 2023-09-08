import { FC, ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600'>
      <div className='w-full max-w-md p-8 bg-white rounded-md shadow-lg'>
        <div className='mb-8 text-center'>
          <h2 className='text-3xl font-extrabold text-gray-900'>Welcome Back!</h2>
          <p className='text-gray-600'>Log in to your account</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;