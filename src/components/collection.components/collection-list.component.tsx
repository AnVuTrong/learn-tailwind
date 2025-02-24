import { Monster, MONSTER_DATA } from '../../types/monster.types';
import { useState } from 'react';

export const CollectionList = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Get unique tags from all monsters
  const TAGS = Array.from(new Set(MONSTER_DATA.flatMap(monster => monster.tags)));

  // Filter monsters based on selected tag
  const filteredMonsters = selectedTag 
    ? MONSTER_DATA.filter(monster => monster.tags.includes(selectedTag))
    : MONSTER_DATA;

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  return (
    <div className='flex min-h-screen w-full items-center justify-center bg-[#E6EFFA] py-20'>
      <div className='flex w-[50rem] rounded-lg bg-white p-12 flex-col shadow-2xl'>
        <h1 className='text-2xl font-bold'>Promete Collections</h1>
        
        {/* Tags Section */}
        <div className='mt-6 flex flex-row flex-wrap gap-2'>
          {TAGS.map((tag: string) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`flex items-center rounded-lg px-5 py-2 transition-colors ${
                selectedTag === tag 
                  ? 'bg-[#8222ff] text-white' 
                  : 'bg-[#f0f0f0] text-[#5d7c7a] hover:bg-[#e0e0e0]'
              }`}
            >
              <span>{tag}</span>
            </button>
          ))}
        </div>

        {/* Monsters Grid */}
        <div className='grid grid-cols-3 gap-4 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          {filteredMonsters.map((monster: Monster) => (
            <div key={monster.id} className='bg-white p-4 rounded-lg shadow-md'>
              <img 
                src={monster.imageUrl} 
                alt={monster.name} 
                className='w-full h-auto rounded-lg'
              />
              {/* Cats Section */}
              <div className='flex justify-between mt-4 gap-2'>
                {monster.cats.map(cat => (
                  <img 
                    key={cat.id}
                    src={cat.imageUrl}
                    alt={`Cat ${cat.id}`}
                    className='w-1/3 h-auto rounded-lg'
                  />
                ))}
              </div>
              <h2 className='text-lg font-medium mt-2'>{monster.name}</h2>
              {monster.description && (
                <p className='text-sm text-gray-600 mt-1'>{monster.description}</p>
              )}
              <div className='flex flex-wrap gap-1 mt-2'>
                {monster.tags.map(tag => (
                  <span key={tag} className='text-xs bg-[#f0f0f0] px-2 py-1 rounded'>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
