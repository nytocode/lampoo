import { useCallback, useEffect, useState } from "react";
import ProductCard from "../components/product-card";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    getWishlist();
  }, []);

  const onRemoveProduct = useCallback((index: number) => {
    setWishlist((prev) => prev.filter((_v, i) => i !== index));
  }, []);

  const getWishlist = async () => {
    try {
      const res = await fetch("data/data.json");
      const { data } = await res.json();
      setWishlist(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="px-4 py-6 lg:container mx-auto">
      <h3 className="text-center font-medium text-2xl mb-6 md:text-left">
        Wishlist
      </h3>
      <div className="flex flex-wrap">
        {wishlist.map((product, i) => (
          <ProductCard
            key={i}
            product={product}
            onRemove={() => onRemoveProduct(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
