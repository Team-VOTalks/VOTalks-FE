import IconDanger from './icon/icon-danger';

export default function EmptyResult({ content }: { content: string }) {
  return (
    <p className="flex flex-col items-center justify-start p-3 text-4xl text-gray-400">
      <IconDanger />
      <span className="mt-2 break-keep text-base font-medium">{content}</span>
    </p>
  );
}
