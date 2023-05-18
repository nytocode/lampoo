import { useState } from "react";
import Icon from "./atoms/icon";
import Select from "./atoms/select";

interface Props {
  product: Product;
  onRemove?: () => void;
}

const ProductCard = ({ product, onRemove }: Props) => {
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <div className="relative flex flex-col items-center w-1/2 md:w-1/4 lg:w-1/5 px-3 mb-20">
      <button onClick={onRemove} className="absolute z-10  top-0 right-0">
        <Icon name="close" />
      </button>
      <span className="absolute z-0  text-center text-xs font-semibold text-yellow-500 w-full top-0 left-1/2 -translate-x-1/2">
        {product.is_new_with_tag ? "NEW WITH TAG" : ""}
      </span>
      <img
        className="pt-6 px-8 w-full h-auto"
        src={product.image}
        alt={`${product.name} image`}
      />
      <div className="flex flex-col items-center my-4 w-full px-8">
        <span className="text-xs font-bold mb-1 text-center">
          {product.designer}
        </span>
        <span className="text-sm text-center">{product.name}</span>
        <span className="text-sm text-center text-gray-400 mt-1">
          {product.sizes && product.sizes.length
            ? "More sizes available"
            : product.size}
        </span>
        <span className="text-xs mt-1 font-semibold text-center">
          € {product.price}
        </span>
        {product.retail && (
          <span className="text-xs text-gray-400">
            Est. Retail: € {product.retail}
          </span>
        )}
      </div>
      {product.sizes && product.sizes.length ? (
        <Select
          options={product.sizes.map((s) => ({
            value: s.id.toString(),
            label: s.name,
          }))}
          onSelect={setSelectedSize}
          value={selectedSize}
          palaceholder="SELECT SIZE"
        />
      ) : null}
      <button
        disabled={
          product.sizes !== undefined &&
          product.sizes.length !== 0 &&
          !selectedSize
        }
        className="mt-auto border border-black w-full font-bold text-xs py-3 px-4 hover:bg-black hover:text-white transition duration-300 disabled:text-gray-400 disabled:border-gray-400 disabled:bg-white"
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductCard;
