export const TrashIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#trash__a)'>
        <path
          d='M24 6.4h8v3.2h-3.2v20.8a1.6 1.6 0 0 1-1.6 1.6H4.8a1.6 1.6 0 0 1-1.6-1.6V9.6H0V6.4h8V1.6A1.6 1.6 0 0 1 9.6 0h12.8A1.6 1.6 0 0 1 24 1.6v4.8Zm1.6 3.2H6.4v19.2h19.2V9.6Zm-7.338 9.6 2.83 2.829-2.263 2.262L16 21.462l-2.829 2.83-2.262-2.263 2.829-2.829-2.83-2.829 2.263-2.262L16 16.938l2.829-2.83 2.262 2.263-2.829 2.829ZM11.2 3.2v3.2h9.6V3.2h-9.6Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='trash__a'>
          <path fill='#fff' d='M0 0h32v32H0z' />
        </clipPath>
      </defs>
    </svg>
  );
};
