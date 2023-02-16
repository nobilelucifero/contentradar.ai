export function Wrapper(props) {
  const { children, className } = props;

  return (
    <div
      className={`mx-auto w-full max-w-7xl max-sm:px-6 px-12 lg:px-16 ${
        className || null
      }`}
    >
      {children}
    </div>
  );
}
