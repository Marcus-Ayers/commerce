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

  // useEffect(() => {
  //   async function fetchProducts() {
  //     const handle = 'automated-collection';
  //     const response2 = await fetch(`/api/collection-products?handle=${handle}`);
  //     const products2 = await response2.json();
  //     setProducts(products2);
  //   }

  //   fetchProducts();
  // }, []);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const handle = 'automated-collection';
        const response2 = await fetch(`/api/collection-products?handle=${handle}`);
        if (!response2.ok) throw new Error('Network response was not ok');
        const products2 = await response2.json();
        if (!Array.isArray(products2)) throw new Error('Data is not an array');
        setProducts(products2);
      } catch (error) {
        console.error('Error fetching products: ', error);
        // Handle or display error appropriately
      }
    }

    fetchProducts();
  }, []);

  if (!products) return null;

  return (
    <div className="relative -ml-32 h-36 overflow-hidden rounded-md bg-black md:w-[110vw] 2xl:w-full">
      <div className="flex animate-carousel">
        {[...products, ...products].map((product, i) => (
          <Link
            key={`${product.handle}${i}`}
            href={`/product/${product.handle}`}
            target="blank"
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
              <div className="inline-flex bg-black p-4 text-xs font-semibold text-black dark:bg-black dark:text-white md:text-xl">
                {product.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
