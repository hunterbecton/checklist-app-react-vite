export const PlusIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#add__a)'>
        <path
          d='M14.4 14.4V8h3.2v6.4H24v3.2h-6.4V24h-3.2v-6.4H8v-3.2h6.4ZM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16Zm0-3.2a12.8 12.8 0 1 0 0-25.6 12.8 12.8 0 0 0 0 25.6Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='add__a'>
          <path fill='#fff' d='M0 0h32v32H0z' />
        </clipPath>
      </defs>
    </svg>
  );
};
