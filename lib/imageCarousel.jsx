'use client';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

const imageByIndex = (index) => images[index % images.length];

const TWEEN_FACTOR = 1.2;

const EmblaCarousel = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`/api/products`);
      const productsData = await response.json();
      setProducts(productsData);
      setLoading(false);
    }

    fetchProducts();
  }, []);

  const productIndices = [5, 2, 3, 7, 10];

  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [tweenValues, setTweenValues] = useState([]);
  const [loading, setLoading] = useState(true);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      return diffToTarget * (-1 / TWEEN_FACTOR) * 100;
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll();
    emblaApi.on('scroll', () => {
      flushSync(() => onScroll());
    });
    emblaApi.on('reInit', onScroll);
  }, [emblaApi, onScroll]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {productIndices.map((index) => (
            <div className="embla__slide " key={index}>
              <div className="embla__parallax">
                <div
                  className="embla__parallax__layer"
                  style={{
                    ...(tweenValues.length && {
                      transform: `translateX(${tweenValues[index]}%)`
                    })
                  }}
                >
                  <Link href={`/product/${products?.[index]?.handle}`} className="group max-w-5xl">
                    <div className="ml-36 mt-20 flex flex-col">
                      <p className="text-white">
                        {new Date(products?.[index]?.updatedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit'
                        })}
                      </p>
                      <h1 className="transition-color mt-5 max-w-2xl cursor-pointer text-6xl font-semibold text-white duration-300 group-hover:text-red-500">
                        {products?.[index]?.title}
                      </h1>
                      <Image
                        alt="marble"
                        className="ml-48"
                        src={products?.[index]?.featuredImage?.url}
                        width={400}
                        height={400}
                      ></Image>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
