export const BetButton = ({
    onClick,
    children,
    className,
  }: {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <button
        onClick={onClick}
        className={` w-48 px-2 py-2 text-2xl bg-green-600 text-white rounded ${className}`}
      >
        {children}
      </button>
    );
  };