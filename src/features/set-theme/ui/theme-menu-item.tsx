import React from 'react';

export default function ThemeMenuItem({
  icon: Icon,
  label,
  onClick,
}: {
  icon: React.FC;
  label: string;
  onClick: () => void;
}) {
  return (
    <li>
      <button type="button" onClick={onClick}>
        <Icon />
        <span>{label}</span>
      </button>
    </li>
  );
}
