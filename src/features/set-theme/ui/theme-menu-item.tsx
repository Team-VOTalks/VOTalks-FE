import React from 'react';

export default function ThemeMenuItem({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}) {
  return (
    <li className="block" role="listitem">
      <button
        type="button"
        className="flex w-full items-center justify-start gap-1 rounded bg-gray-000 p-2 active:bg-gray-100 sm:gap-2 sm:text-lg sm:hover:bg-gray-100 sm:active:bg-gray-000"
        onClick={onClick}
      >
        <span className="flex h-5 w-5 items-center justify-center">{icon}</span>
        <span className="text-sm sm:text-base">{label}</span>
      </button>
    </li>
  );
}
