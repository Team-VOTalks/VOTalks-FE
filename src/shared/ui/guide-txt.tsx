type GuideColor = 'red' | 'yellow' | 'green' | 'blue' | 'gray';

const colorStyles: { [color in GuideColor]: string } = {
  red: 'text-red-500',
  yellow: 'text-yellow-500',
  green: 'text-green-500',
  blue: 'text-blue-500',
  gray: 'text-gray-500',
};

export default function GuideTxt({ content, color }: { content: string; color?: GuideColor }) {
  return (
    <p
      className={`${colorStyles[color ?? 'gray']} relative mt-1 break-keep px-1 text-lg leading-4`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        className="mr-1 inline-block"
      >
        <path
          fill="currentColor"
          d="M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
        ></path>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5"
          clipRule="evenodd"
        ></path>
      </svg>
      <span className="text-sm">{content}</span>
    </p>
  );
}
