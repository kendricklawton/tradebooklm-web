"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { signOut } from "@workos-inc/authkit-nextjs";
import { User } from "@workos-inc/node";

interface HeaderDropdownMenuProps {
  user: User;
}

export default function HeaderDropdownMenu({ user }: HeaderDropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close the dropdown if the user clicks outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const getInitials = () => {
    if (user.firstName && user.lastName) {
      return `${user.firstName[0]}${user.lastName[0]}`;
    }
    return user.email ? user.email[0].toUpperCase() : "U";
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
      >
        <span className="text-lg font-semibold">{getInitials()}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 z-50">
          <div className="px-4 py-2 border-b">
            <p className="text-sm text-gray-700">Signed in as</p>
            <p className="text-sm font-medium text-gray-900 truncate">
              {user.email}
            </p>
          </div>
          <Link href="/dashboard" onClick={() => setIsOpen(false)}>
            <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Dashboard
            </span>
          </Link>
          <Link href="/account" onClick={() => setIsOpen(false)}>
            <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Account
            </span>
          </Link>
          <div>
            <form
              action={async () => {
                await signOut();
              }}
              className="w-full"
            >
              <button
                type="submit"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
