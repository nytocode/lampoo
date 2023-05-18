export interface LinkProps {
  text: string;
  to: string;
  className?: string;
  borderClass?: string;
}

const Link = ({
  text,
  to,
  className,
  borderClass = "bg-yellow-500",
}: LinkProps) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        console.log(to);
      }}
      className={`flex flex-col font-medium px-3 py-2 cursor-pointer group ${className}`}
    >
      <span>{text}</span>
      <span
        className={`w-0 group-hover:md:w-full h-[2px] transition-all ${borderClass}`}
      />
    </a>
  );
};

export default Link;
