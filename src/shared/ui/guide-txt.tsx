import IconDanger from './icon/icon-danger';

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
      <IconDanger className="mr-1 inline-block" />
      <span className="text-sm">{content}</span>
    </p>
  );
}
