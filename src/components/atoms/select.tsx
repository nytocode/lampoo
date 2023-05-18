import { useCallback, useEffect, useState } from "react";
import Icon from "./icon";

export type Option = {
  value: string;
  label: string;
};

interface Props {
  options: Option[];
  onSelect: (value: string) => void;
  value: string;
  palaceholder?: string;
}

const Select = ({
  options,
  onSelect,
  value,
  palaceholder = "SELECT AN OPTION",
}: Props) => {
  const [showOptions, setShowOptions] = useState(false);
  const [currentValue, setCurrentValue] = useState<Option>();

  useEffect(() => {
    setCurrentValue(options.find((opt) => opt.value === value));
  }, []);

  const onToggle = useCallback(() => {
    setShowOptions((prev) => !prev);
  }, [setShowOptions]);

  const onOptionClick = useCallback(
    (opt: Option) => {
      onSelect(opt.value);
      setCurrentValue(opt);
      setShowOptions(false);
    },
    [onSelect]
  );

  return (
    <div className="block relative w-full my-4">
      <button
        onClick={onToggle}
        className={`flex justify-between w-full border border-black items-center px-4 py-2 ${
          showOptions && "border-b-white"
        }`}
      >
        <span className="text-xs font-bold">
          {currentValue ? currentValue.label : palaceholder}
        </span>
        <Icon
          name={showOptions ? "arrow-up" : "arrow-down"}
          className="h4 w-4"
        />
      </button>
      <ul
        className={`overflow-hidden z-10 absolute bg-white top-full left-0 w-full border-black border border-t-0 ${
          !showOptions && "hidden"
        }`}
      >
        {options.map((opt, i) => (
          <li
            key={i}
            onClick={() => onOptionClick(opt)}
            className="px-4 py-2 cursor-pointer hover:bg-gray-200/40 text-sm text-gray-400"
          >
            {opt.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
