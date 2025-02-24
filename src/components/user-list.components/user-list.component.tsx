import React, { useState } from 'react';
import { USERS_DATA } from '../../constants/users.constants';
import { User } from '../../types/user.types';

export const UserList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredUsers = USERS_DATA.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.jobTitle.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = !selectedTag || user.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

  const allTags = Array.from(new Set(USERS_DATA.flatMap(user => user.tags)));

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#E6EFFA] py-20">
      <div className="w-[36rem] rounded-lg bg-white p-12 shadow-xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">Find Users</h1>
        
        {/* Search Input */}
        <div className="relative mb-6">
          <input
            type="text"
            className="w-full rounded-lg border-2 border-gray-200 p-3 pl-10 focus:border-[#8222ff] focus:outline-none"
            placeholder="Search by name or job title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>

        {/* Tags */}
        <div className="mb-8 flex flex-wrap gap-2">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`rounded-full px-4 py-1 text-sm transition-colors ${
                selectedTag === tag
                  ? 'bg-[#8222ff] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}>
              {tag}
            </button>
          ))}
        </div>

        {/* User List */}
        <div className="space-y-4">
          {filteredUsers.map(user => (
            <div key={user.id} className="flex items-center gap-4 rounded-lg border border-gray-100 p-4 hover:bg-gray-50">
              <img
                src={user.image}
                alt={user.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h2 className="font-semibold text-gray-800">{user.name}</h2>
                <p className="text-sm text-gray-600">{user.jobTitle}</p>
                <div className="mt-1 flex flex-wrap gap-1">
                  {user.tags.map(tag => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};