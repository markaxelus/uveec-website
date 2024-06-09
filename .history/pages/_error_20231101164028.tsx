// _error.tsx

import { NextPage } from 'next';

const Custom404: NextPage = () => {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="flex items-center justify-center mb-8">
            <img
              className="h-20 w-20 rounded-full mr-4"
              src="/images/uveec4.png" // Replace with your actual logo path
              alt="Club Logo"
            />
            <h1 className="text-6xl font-bold text-gray-800">404</h1>
          </div>
          <p className="text-2xl text-gray-600">Page Not Found</p>
        </div>
      </div>
    );
  };

export default Custom404;
