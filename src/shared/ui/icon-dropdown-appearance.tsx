export default function IconDropdownAppearance({ isRotate }: { isRotate?: boolean }) {
  return (
    <svg
      className={isRotate ? 'rotate-180' : ''}
      xmlns="http://www.w3.org/2000/svg"
      width="0.8em"
      height="0.8em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m12.37 15.835l6.43-6.63C19.201 8.79 18.958 8 18.43 8H5.57c-.528 0-.771.79-.37 1.205l6.43 6.63c.213.22.527.22.74 0"
      ></path>
    </svg>
  );
}
