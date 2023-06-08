'use client';

import React from 'react';

import Image from 'next/image';
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import Avatar from 'react-avatar';

function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10">
        <div className="flex items-center pb-5 md:pb-0">
          <Image
            src="/assets/logo.png"
            alt="ai todo logo"
            width={30}
            height={30}
            className="wd-34 md:wd-46 object-contain"
          />
          <span className="text-4xl ml-2 font-bold tracking-wide text-sky-900">AiTodo</span>
        </div>
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2"
            />
            <button
              hidden
              type="submit"
            >
              Search
            </button>
          </form>

          {/* Avatar */}
          <Avatar
            name="Jack Deng"
            round
            size="50"
            color="#0055D1"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
