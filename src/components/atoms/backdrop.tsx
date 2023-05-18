interface Props {
  show: boolean;
  onClick?: () => void;
}

const Backdrop = ({ show, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`fixed z-20  top-0 left-0 w-screen h-screen bg-black/60 ${
        !show && "hidden"
      } `}
    />
  );
};

export default Backdrop;
