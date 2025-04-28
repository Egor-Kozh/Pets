const SvgEditButtonComponent = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={36} height={36}>
    <rect width={35} height={35} x={0.5} y={0.5} fill="#FCFCFC" rx={17.5} />
    <rect width={35} height={35} x={0.5} y={0.5} stroke="#BDBDBD" rx={17.5} />
    <path
      stroke="#BDBDBD"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m22.051 12.364 1.407-1.406a1.563 1.563 0 0 1 2.21 2.21l-8.85 8.848a3.75 3.75 0 0 1-1.58.943L13 23.625l.666-2.237a3.75 3.75 0 0 1 .943-1.582l7.442-7.442Zm0 0 2.199 2.198M23 20.293v3.958c0 1.035-.84 1.875-1.875 1.875h-8.75A1.875 1.875 0 0 1 10.5 24.25V15.5c0-1.036.84-1.875 1.875-1.875h3.958"
    />
  </svg>
);
export default SvgEditButtonComponent;
