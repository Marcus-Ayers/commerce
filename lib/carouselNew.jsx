'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function CarouselNew() {
  const [products, setProducts] = useState(null);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     // Collections that start with `hidden-*` are hidden from the search page.
  //     const fetchedProducts = await getCollectionProducts('automated-collection');
  //     if (fetchedProducts?.length) setProducts(fetchedProducts);
  //   };

  //   fetchProducts();
  // }, []);

  useEffect(() => {
    async function fetchProducts() {
      const handle = 'automated-collection';
      const response2 = await fetch(`/api/collection-products?handle=${handle}`);
      const products2 = await response2.json();
      setProducts(products2);
    }

    fetchProducts();
  }, []);

  if (!products) return null;

  return (
    <div className="relative -ml-32 h-36 w-[110vw] overflow-hidden bg-white">
      <div className="flex animate-carousel">
        {[...products, ...products].map((product, i) => (
          <Link
            key={`${product.handle}${i}`}
            href={`/product/${product.handle}`}
            className="relative h-36 w-1/2 flex-none md:w-1/3"
          >
            {product.featuredImage ? (
              <Image
                alt={product.title}
                className="h-36 object-contain"
                fill
                sizes="33vw"
                src={product.featuredImage.url}
              />
            ) : null}
            <div className="absolute inset-y-0 right-0 flex items-center justify-center">
              <div className="inline-flex bg-white p-4 text-xl font-semibold text-black dark:bg-black dark:text-white">
                {product.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
