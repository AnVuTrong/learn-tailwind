import React from 'react';

interface Company {
  id: number;
  name: string;
  logo: string;
  accountCount: number;
  description: string;
}

const COMPANIES_DATA: Company[] = [
  {
    id: 1,
    name: 'Samsung',
    logo: 'https://images.samsung.com/is/image/samsung/assets/vn/about-us/brand/logo/mo/360_197_1.png?$720_N_PNG$',
    accountCount: 150,
    description: 'Global technology leader in electronics and digital solutions'
  },
  {
    id: 2,
    name: 'Apple',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    accountCount: 200,
    description: 'Innovative technology company known for premium devices and services'
  },
  {
    id: 3,
    name: 'Google',
    logo: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
    accountCount: 300,
    description: 'Leading internet technology and software development company'
  }
];

export const CompanyAccount = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#E6EFFA] py-20">
      <div className="w-[48rem] rounded-lg bg-white p-12 shadow-xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Company Accounts</h1>
          <p className="mt-2 text-gray-600">Overview of registered accounts by company</p>
        </div>

        <div className="space-y-6">
          {COMPANIES_DATA.map((company) => (
            <div 
              key={company.id} 
              className="flex items-center justify-between rounded-lg border border-gray-200 p-6 transition-all hover:border-blue-200 hover:shadow-md"
            >
              <div className="flex items-center space-x-6">
                <div className="h-16 w-16 flex-shrink-0">
                  <img 
                    src={company.logo} 
                    alt={`${company.name} logo`} 
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{company.name}</h2>
                  <p className="mt-1 text-sm text-gray-600">{company.description}</p>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{company.accountCount}</div>
                <div className="text-sm text-gray-600">Accounts</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <button className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700">
            View All Companies
          </button>
        </div>
      </div>
    </div>
  );
};
