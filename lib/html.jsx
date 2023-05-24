/* eslint-disable react/no-unescaped-entities */
'use client';
import { Player } from '@lottiefiles/react-lottie-player';
import { Html } from '@react-three/drei';
import 'animate.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Page2 from '../lib/card';
// import { CarouselNew } from '../lib/carouselNew';
// import EmblaCarousel from '../lib/imageCarousel';
import { useScrollAnimation, useScrollAnimationTwo } from './Animations';

gsap.registerPlugin(ScrollTrigger);

export const PageContent = (props) => {
  const [products, setProducts] = useState('title');

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`/api/products`);
      const productsData = await response.json();
      setProducts(productsData);
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    async function fetchCollectionProducts() {
      const handle = 'automated-collection';
      const response2 = await fetch(`/api/collection-products?handle=${handle}`);
      const products2 = await response2.json();
    }

    fetchCollectionProducts();
  }, []);

  const myElement1 = useRef(null);
  const myElement2 = useRef(null);
  const myElement3 = useRef(null);

  const { ref: ref1 } = useScrollAnimation();
  const { ref: ref2 } = useScrollAnimation();
  const { ref: ref3 } = useScrollAnimation();
  const { ref: ref4 } = useScrollAnimation();
  const { ref: ref5 } = useScrollAnimation();
  const { ref: ref6 } = useScrollAnimation();
  const { ref: ref7 } = useScrollAnimationTwo();
  const { ref: ref8 } = useScrollAnimationTwo();
  const { ref: ref9 } = useScrollAnimationTwo();
  const { ref: ref10 } = useScrollAnimationTwo();
  const { ref: ref11 } = useScrollAnimation();
  const { ref: ref12 } = useScrollAnimation();
  // const OPTIONS = { inViewThreshold: 0, dragFree: true, loop: false };
  // const SLIDE_COUNT = 5;
  // const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  useEffect(() => {
    setTimeout(() => {
      gsap.from([myElement1.current, myElement2.current, myElement3.current], {
        autoAlpha: 0,
        duration: 1,
        rotation: 20,
        x: -10,
        transformOrigin: 'left bottom',
        y: 10,
        scale: 0.8,
        opacity: 0,
        ease: 'power2.out',
        stagger: 0.3
      });
    }, 500);
  }, []);

  return (
    <Html className="left-[-600px] top-[-200px] w-screen">
      <div className="flex flex-col ">
        <div className="-mb-10 w-full">
          <h1 className="invisible text-[130px] font-semibold text-white" ref={myElement1}>
            WE WORK
          </h1>
        </div>
        <div className="">
          <h2 className="invisible text-[130px] font-semibold text-white" ref={myElement2}>
            FOR PEOPLE
          </h2>
        </div>
        <div className="pt-10">
          <h2 className="header invisible text-lg font-light italic text-gray-400" ref={myElement3}>
            WE MAKE{' '}
            <span
              className="text-xl font-bold not-italic text-white"
              style={{ borderBottom: '1px solid red' }}
            >
              {' '}
              DIGITAL PRODUCTS
            </span>{' '}
            & AWESOME{' '}
            <span
              className="text-xl font-bold not-italic text-white"
              style={{ borderBottom: '1px solid red' }}
            >
              BRANDS
            </span>
          </h2>
        </div>

        <div className="">
          <Player
            className=""
            autoplay
            loop
            src="/svgs/down-arrow-w.json"
            style={{
              height: '80px',
              width: '80px',
              margin: 'inherit',
              marginLeft: '-15px',
              marginBottom: '150px'
            }}
          ></Player>
        </div>
        <div ref={ref1} className="invisible">
          <div className="flex items-center">
            <Player
              className=""
              autoplay
              loop
              src="/svgs/13152-minus.json"
              style={{
                height: '80px',
                width: '80px',
                margin: 'inherit'
              }}
            ></Player>
            <p className="scroll-trigger text-sm font-light text-zinc-400 ">
              We design and build the digital services our clients need. And we are pretty good at
              it.
            </p>
          </div>
        </div>
        <div ref={ref3} className="invisible">
          <h2 className="mt-10 text-7xl text-white ">
            WORKS <br /> THAT WORK
          </h2>
        </div>
        <div className="">
          <Page2 />
        </div>
        <div className="mt-">
          {/* <Suspense>
            <CarouselNew />
          </Suspense> */}
        </div>
        <div ref={ref2} className="invisible">
          <p className="text-md mt-20 italic text-zinc-400">
            {' '}
            VIEW ALL{' '}
            <Link href="/search" className="hover:cursor-pointer">
              <span
                className="text-lg not-italic text-white"
                style={{ borderBottom: '1px solid red' }}
              >
                {' '}
                PRODUCTS
              </span>
            </Link>
          </p>
        </div>
        <div className="mt-20 flex justify-around">
          <div>
            <Player
              className=""
              autoplay
              loop
              src="/svgs/down-arrow-w.json"
              style={{
                height: '80px',
                width: '80px',
                margin: 'inherit',
                marginLeft: '-15px',
                marginBottom: '150px'
              }}
            ></Player>
          </div>
          <div className="invisible max-w-xl" ref={ref9}>
            <p className="text-md mr-48 font-light text-white ">
              FOR +17 YEARS WE’VE BEEN WORKING WITH STARTUPS AND BIG COMPANIES, HELPING THEM
              RE-DISCOVER THEIR ESSENCE AND LEVERAGE THEIR BUSINESS. WE’RE BUILT FOR FACING
              CHALLENGES AND WE BELIEVE THE THE ONLY WAY TO ACHIEVE SUCCESS IS THROUGH
              COLLABORATION. OUR COMPROMISE IS TO ALWAYS DRIVE A POSITIVECHANGE IN PEOPLE, COMPANIES
              AND ORGANIZATIONS.
            </p>
          </div>
        </div>
        <div ref={ref4} className="invisible">
          <div className="mb-5 flex items-center">
            <Player
              className=""
              autoplay
              loop
              src="/svgs/13152-minus.json"
              style={{
                height: '80px',
                width: '80px',
                margin: 'inherit'
              }}
            ></Player>
            <p className="text-md text-zinc-400 ">We’re pretty good at what we do…</p>
          </div>
          <div>
            <h1 className="text-6xl text-white">
              100+ AWARDS <br /> THAT PROVE WE’RE <br /> ALL ABOUT MAKING <br />
              <span className="flex">
                <Player
                  className=""
                  autoplay
                  loop
                  src="/svgs/happy.json"
                  style={{
                    height: '120px',
                    width: '120px',
                    margin: 'inherit',
                    marginTop: '-30px'
                  }}
                ></Player>
                HAPPY CLIENTS.
              </span>
            </h1>
          </div>
        </div>
        <div>
          <h2 className="text-md mt-20 italic text-zinc-400">
            LEARN MORE{' '}
            <span
              className="text-lg not-italic text-white"
              style={{ borderBottom: '1px solid red' }}
            >
              {' '}
              ABOUT US
            </span>
          </h2>
        </div>
        <div className="mt-20 flex justify-around">
          <div>
            <Player
              className=""
              autoplay
              loop
              src="/svgs/down-arrow-w.json"
              style={{
                height: '80px',
                width: '80px',
                margin: 'inherit',
                marginLeft: '-15px',
                marginBottom: '150px'
              }}
            ></Player>
          </div>
          <div className="invisible max-w-xl" ref={ref10}>
            <p className="text-md mr-48 font-light text-white ">
              OUR SERVICES ARE RESULT ORIENTED AND WE OFFER FREE MAINTENANCE FOR ONE MONTH.
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <Player
            className=""
            autoplay
            loop
            src="/svgs/13152-minus.json"
            style={{
              height: '80px',
              width: '80px',
              margin: 'inherit'
            }}
          ></Player>
          <h3 className="text-md text-zinc-400">Our services.</h3>
        </div>
        <div ref={ref5} className="invisible mb-20 mt-10">
          <h2 className="text-6xl text-white">
            WE DESIGN TO <br />
            MAKE YOUR
            <br />
            BUSINESS GROW
          </h2>
        </div>
        <div className="flex justify-around">
          <div className="invisible flex max-w-sm flex-col" ref={ref7}>
            <div className="group flex flex-col">
              <Link
                key={`${products?.[4].handle}`}
                href={`/product/${products?.[4].handle}`}
                className=""
              >
                <Image
                  alt="white"
                  src={products?.[4].featuredImage?.url}
                  width={350}
                  height={350}
                  className="group"
                ></Image>
                <h1 className="-mt-5 text-5xl text-gray-200 duration-500 group-hover:text-red-600 ">
                  {products?.[4].title}
                </h1>
              </Link>
            </div>
            <div className="max-w-sm">
              <p className=" mt-20 text-white">
                WE CREATE WEBSITES, APPS, CUSTOM PLATFORMS AND E-COMMERCE THAT ALLOW COMPANIES TO
                HAVE A GLOBAL IMPACT AND SHARE MEANINGFUL CONNECTIONS WITH THEIR AUDIENCE.
              </p>
            </div>
          </div>
          <div className="invisible mr-36 mt-20 flex max-w-sm flex-col" ref={ref8}>
            <Link
              key={`${products?.[3].handle}`}
              href={`/product/${products?.[3].handle}`}
              className="group"
            >
              <div className="flex flex-col">
                <Image
                  alt="white"
                  src={products?.[3].featuredImage?.url}
                  width={350}
                  height={350}
                  className="group"
                ></Image>
                <h1 className="-mt-5 text-5xl text-gray-200 duration-500 group-hover:text-red-600 ">
                  {products?.[3].title}
                </h1>{' '}
              </div>
              <div className="max-w-sm">
                <p className=" mt-20 text-white">
                  WE DEVELOP DISRUPTIVE BRANDS AND HELP COMPANIES RE-DISCOVER THEIR IDENTITY. WE
                  HELP OUR CLIENTS REALIZE THEIR FULL POTENTIAL AND SET THEM APART FROM THEIR
                  COMPETITION.
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex-flex-col">
          <p className="text-md mt-20 italic text-zinc-400">
            MORE INFORMATION ABOUT{' '}
            <span
              className="text-lg not-italic text-white"
              style={{ borderBottom: '1px solid red' }}
            >
              {' '}
              OUR SERVICES
            </span>
          </p>
          <p className="mt-20 text-white">-Whats new?</p>
        </div>
        {/* <section className="sandbox__carousel invisible " ref={ref6}>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </section> */}
        <div>
          <p className="mt-36 text-white">5/13/23</p>
        </div>
        <div className="mt-20 flex">
          <div className="invisible flex flex-col" ref={ref11}>
            <Link
              key={`${products?.[13]?.handle}`}
              href={`/product/${products?.[13]?.handle}`}
              className="group"
            >
              <div className="flex flex-col">
                <h1 className="transition-color z-10 -mt-5 max-w-md cursor-pointer text-4xl text-gray-200 duration-500 group-hover:text-red-600">
                  {products?.[13]?.title}
                </h1>
                <Image
                  alt="white"
                  src={products?.[13]?.featuredImage?.url}
                  className="-mt-4 ml-10"
                  width={300}
                  height={300}
                ></Image>
              </div>
            </Link>
          </div>
          <div className="invisible ml-48 mt-20 flex flex-col" ref={ref12}>
            <Link
              key={`${products?.[5]?.handle}`}
              href={`/product/${products?.[5]?.handle}`}
              className="group"
            >
              <div className="flex flex-col">
                <h1 className="transition-color z-10 -mt-5 max-w-md cursor-pointer text-4xl text-gray-200 duration-500 group-hover:text-red-600">
                  {products?.[5]?.title}
                </h1>
                <Image
                  alt="white"
                  className="-mt-4 ml-10"
                  src={products?.[5]?.featuredImage?.url}
                  width={300}
                  height={300}
                ></Image>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <p className="mt-20 text-white">READ ALL NEWS</p>
        </div>
        <div className="mt-36 max-w-5xl" style={{ borderBottom: '1px solid white' }}></div>
        <div>
          <p className="mt-20 text-white">-Whats next</p>
        </div>
        <div>
          <h1 className="text-semibold text-[200px] text-white">STUDIO</h1>
        </div>
        <div className="mt-5 flex">
          <div>
            <h2 className="text-lg text-white ">WE'D LOVE TO HEAR FROM YOU</h2>
            <h2 className="text-semibold mt-10 text-5xl text-white">EMAIL@EMAIL.COM</h2>
          </div>
          <div className="mx-auto flex">
            <div className="flex flex-col">
              <h1 className="text-xs text-white">ABOUT US</h1>
              <h2 className="mt-4 text-xs text-zinc-400">STUDIO</h2>
              <h2 className="mt-4 text-xs text-zinc-400">CULTURE</h2>
              <h2 className="mt-4 text-xs text-zinc-400">AWARDS</h2>
              <h2 className="mt-4 text-xs text-zinc-400">CLIENTS</h2>
            </div>
            <div className="mx-20 flex flex-col">
              <h1 className="text-xs text-white">OUR WORK</h1>
              <h2 className="mt-4 text-xs text-zinc-400">STUDIO</h2>
              <h2 className="mt-4 text-xs text-zinc-400">CULTURE</h2>
              <h2 className="mt-4 text-xs text-zinc-400">AWARDS</h2>
              <h2 className="mt-4 text-xs text-zinc-400">CLIENTS</h2>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xs text-white">STAY IN TOUCH</h1>
              <h2 className="mt-4 text-xs text-zinc-400">STUDIO</h2>
              <h2 className="mt-4 text-xs text-zinc-400">CULTURE</h2>
              <h2 className="mt-4 text-xs text-zinc-400">AWARDS</h2>
              <h2 className="mt-4 text-xs text-zinc-400">CLIENTS</h2>
            </div>
          </div>
        </div>
        <div className="mb-20 mt-48 flex justify-around">
          <div className="flex  max-w-lg justify-around">
            <h1 className="text-lg text-white">M.A. - 2003-2023 </h1>
            <h1 className="text-lg text-white">Privacy</h1>
            <h1 className="text-lg text-white">Legals</h1>
          </div>
          <div>
            <p className="text-xs text-white">Subscribe to our newsletter</p>
            <input
              className="-ml-1 mt-3 h-12 w-[250px] rounded-full border border-zinc-600 bg-zinc-700 p-2 pl-3 placeholder:text-xs"
              placeholder="e.g. stevejobs@gmail.com"
            />
          </div>
        </div>
      </div>
    </Html>
  );
};
