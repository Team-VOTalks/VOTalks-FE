import React from 'react';

export default function ThemeMenuItem({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <li role="listitem">
      <button type="button" onClick={onClick}>
        {icon}
        <span>{label}</span>
      </button>
    </li>
  );
}
