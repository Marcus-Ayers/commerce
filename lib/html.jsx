/* eslint-disable react/no-unescaped-entities */
'use client';
import { Player } from '@lottiefiles/react-lottie-player';
import { Html } from '@react-three/drei';
import 'animate.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense, useEffect, useRef, useState } from 'react';
import { CarouselNew } from '../lib/carousel';
import Page2 from '../lib/flip-models';
import EmblaCarousel from '../lib/image-carousel';
import { useScrollAnimation, useScrollAnimationTwo } from './gsap-animations';

gsap.registerPlugin(ScrollTrigger);

export const PageContent = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sending');
    const data = {
      name,
      email,
      message
    };
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received');
      if (res.status === 200) {
        console.log('Response succeeded!');
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
      }
    });
  };

  const [products, setProducts] = useState('title');

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`/api/products`);
      const productsData = await response.json();
      setProducts(productsData);
      console.log(productsData);
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
  const OPTIONS = { inViewThreshold: 0, dragFree: true, loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

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
    }, 800);
  }, []);

  return (
    <Html className="left-[-170px] top-[-200px] w-screen md:left-[-600px] md:top-[-300px]">
      <div className="flex max-w-7xl flex-col">
        <div className="w-full ">
          <h1
            className="invisible text-5xl font-semibold text-white md:text-[130px]"
            ref={myElement1}
          >
            WE WORK
          </h1>
        </div>
        <div className="">
          <h2
            className="invisible text-5xl font-semibold text-white md:text-[130px]"
            ref={myElement2}
          >
            FOR PEOPLE
          </h2>
        </div>
        <div className="pt-10">
          <h2
            className="header invisible max-w-xs text-sm font-light italic text-gray-400 md:max-w-none md:text-lg"
            ref={myElement3}
          >
            CRAFTING PREMIUM{' '}
            <span
              className="test-lg font-bold not-italic text-white md:text-xl"
              style={{ borderBottom: '1px solid red' }}
            >
              SNOWBOARDS{' '}
            </span>
            WITH UNIQUE{' '}
            <span
              className="text-lg font-bold not-italic text-white md:text-xl"
              style={{ borderBottom: '1px solid red' }}
            >
              STYLE
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
          <div className="-ml-10 flex items-center md:ml-0">
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
            <p className="scroll-trigger max-w-[240px] text-sm font-light text-zinc-400 md:max-w-none">
              We design and build the snowboards our clients need. And we are pretty good at it.
            </p>
          </div>
        </div>
        <div ref={ref3} className="invisible">
          <h2 className="mt-10 text-4xl text-white md:text-7xl">
            UNIQUE <br /> CUSTOM STYLE
          </h2>
        </div>
        <div className="">
          <Page2 />
        </div>
        <div className="">
          <Suspense>
            <CarouselNew />
          </Suspense>
        </div>
        <div ref={ref2} className="invisible">
          <p className="text-md mt-20 italic text-zinc-400">
            VIEW ALL{' '}
            <Link href="/search" target="blank" className="hover:cursor-pointer">
              <span
                className="text-lg not-italic text-white"
                style={{ borderBottom: '1px solid red' }}
              >
                PRODUCTS
              </span>
            </Link>
          </p>
        </div>
        <div className="mt-16 flex flex-col justify-around md:flex-row">
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
          <div className="invisible max-w-2xl" ref={ref9}>
            <p className=" font-base mr-10 max-w-xl text-xs text-white md:mr-48 md:text-sm">
              FOR OVER 17 YEARS, WE'VE BEEN PARTNERING WITH STARTUPS AND ESTABLISHED COMPANIES IN
              THE SNOWBOARDING INDUSTRY, HELPING THEM UNLEASH THEIR TRUE POTENTIAL AND ELEVATE THEIR
              BUSINESS. BUILT TO CONQUER MOUNTAINS AND CHALLENGES ALIKE, WE BELIEVE THAT THE ONLY
              WAY TO ACHIEVE SUCCESS IS THROUGH COLLABORATION. OUR COMMITMENT IS TO CONTINUALLY
              DRIVE POSITIVE CHANGE IN PEOPLE, COMPANIES, AND THE GLOBAL SNOWBOARDING COMMUNITY.
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
            <p className="md:text-md max-w-md text-sm text-zinc-400 md:max-w-none">
              We’re pretty good at what we do…
            </p>
          </div>
          <div>
            <h1 className=" text-2xl text-white md:mr-0 md:text-6xl">
              100+ 5 STAR REVIEWS <br /> THAT PROVE WE’RE <br /> ALL ABOUT MAKING <br />
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
          <h2 className="text-md mt-10 italic text-zinc-400">
            LEARN MORE{' '}
            <span
              className="text-lg not-italic text-white"
              style={{ borderBottom: '1px solid red' }}
            >
              ABOUT US
            </span>
          </h2>
        </div>
        <div className="mt-10 flex flex-col justify-around md:flex-row">
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
                marginLeft: '-15px'
                // marginBottom: '120px'
              }}
            ></Player>
          </div>
          <div className="invisible max-w-2xl" ref={ref10}>
            <p className=" md:text-md mr-10 text-sm font-light text-white md:mr-48">
              Each collection represents a distinct style, design philosophy, and performance focus,
              allowing riders to choose the snowboard that aligns with their individual riding style
              and terrain preferences. By offering different collections, the company aims to
              provide a range of options that suit various skill levels, riding preferences, and
              aesthetics.
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
          <h3 className="text-md text-zinc-400">Our collections.</h3>
        </div>
        <div ref={ref5} className="invisible mb-20 mt-10">
          <div className="text-6xl text-white">
            <h2 className="max-w-xl text-4xl text-white md:text-6xl">VIEW OUR COLLECTIONS</h2>
          </div>
        </div>
        <div className="flex flex-col justify-around md:flex-row">
          <div className="invisible flex flex-col" ref={ref7}>
            <div className="group mr-36 flex flex-col md:mr-0">
              <Link key={`${products?.[4].handle}`} href={`/search/hydrogen`} className="group">
                <Image
                  alt="white"
                  src="/images/snowboarder.jpeg"
                  width={450}
                  height={450}
                  className="group "
                ></Image>
              </Link>
              <Link href={`/search/hydrogen`} className="group z-50">
                <h1 className=" -mt-5 text-4xl text-gray-300 duration-500 group-hover:text-red-600 md:text-5xl">
                  HYDROGEN
                </h1>
              </Link>
            </div>
            <div className=" max-w-xs md:ml-0 md:max-w-md">
              <p className="md:text-md mt-10 text-sm text-gray-200 md:mt-20">
                The Hydrogen collection is an embodiment of{' '}
                <span
                  className="text-md text-white md:text-lg"
                  style={{ borderBottom: '1px solid red' }}
                >
                  PURE ELEGANCE{' '}
                </span>
                and refined craftsmanship. Inspired by the pristine beauty of the Arctic landscapes,
                these snowboards are designed for riders who seek both style and performance on the
                slopes.
              </p>
            </div>
          </div>
          <div className="group invisible mr-[5rem] mt-20 flex flex-col md:mr-36" ref={ref8}>
            <Link
              key={`${products?.[3].handle}`}
              href={`/search/automated-collection`}
              className="group"
            >
              <Image
                alt="white"
                src="/images/mountain.jpeg"
                width={450}
                height={450}
                className="group"
              ></Image>
            </Link>
            <Link href={`/search/automated-collection`} className="group z-50">
              <h1 className="-mt-5 max-w-sm text-4xl text-gray-200 duration-500 group-hover:text-red-600 md:text-5xl">
                AUTOMATED COLLECTION
              </h1>
            </Link>
            <div className="max-w-sm">
              <p className="md:text-md mt-10 text-sm text-gray-200">
                The Automated Collection represents the{' '}
                <span
                  className="text-md text-white md:text-lg"
                  style={{ borderBottom: '1px solid red' }}
                >
                  SPIRIT OF ADVENTURE{' '}
                </span>
                and the thrill of conquering the majestic alpine peaks. These snowboards are
                specially crafted for riders who crave adrenaline and seek the ultimate performance
                on challenging terrains.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-flex-col">
          <p className="text-md mt-20 italic text-zinc-400">
            MORE INFORMATION ABOUT{' '}
            <span
              className="text-lg not-italic text-white"
              style={{ borderBottom: '1px solid red' }}
            >
              OUR SERVICES
            </span>
          </p>
          <p className="mt-20 text-white">-Whats new?</p>
        </div>
        <section className="sandbox__carousel invisible  overflow-hidden md:-ml-36" ref={ref6}>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </section>
        <div>
          <p className="mt-36 text-white">5/13/23</p>
        </div>
        <div className="-ml-10 mt-20 flex flex-col md:ml-0 md:flex-row">
          <div className="invisible flex flex-col" ref={ref11}>
            <Link
              key={`${products?.[4]?.handle}`}
              href={`/product/${products?.[4]?.handle}`}
              className="group"
            >
              <div className="flex flex-col">
                <h1 className="transition-color z-10 -mt-5 ml-10 max-w-md cursor-pointer text-3xl text-gray-200 duration-500 group-hover:text-red-600 md:ml-0 md:text-4xl">
                  {products?.[4]?.title}
                </h1>
                {products?.[4]?.featuredImage?.url ? (
                  <Image
                    alt="white"
                    src={products[4].featuredImage.url}
                    className="-mt-4 ml-10"
                    width={300}
                    height={300}
                  />
                ) : (
                  <div>Loading...</div> // or any other loading placeholder
                )}
              </div>
            </Link>
          </div>
          <div className="invisible mt-20 flex flex-col md:ml-48" ref={ref12}>
            <Link
              key={`${products?.[14]?.handle}`}
              href={`/product/${products?.[14]?.handle}`}
              className="group"
            >
              <div className="flex flex-col">
                <h1 className="transition-color z-10 -mt-5 ml-10 max-w-md cursor-pointer text-3xl text-gray-200 duration-500 group-hover:text-red-600 md:ml-0 md:text-4xl">
                  {products?.[14]?.title}
                </h1>
                {products?.[14]?.featuredImage?.url ? (
                  <Image
                    alt="white"
                    src={products[14].featuredImage.url}
                    className="-mt-4 ml-10"
                    width={300}
                    height={300}
                  />
                ) : (
                  <div>Loading...</div> // or any other loading placeholder
                )}
              </div>
            </Link>
          </div>
        </div>
        <div>
          <p className="mt-20 text-white">READ ALL NEWS</p>
        </div>
        <div className="mt-36 max-w-5xl" style={{ borderBottom: '1px solid white' }}></div>
        <div>
          <h1 className="text-semibold text-7xl text-white md:text-[200px]">ALPINE</h1>
        </div>
        <div className="mb-20 mt-20  flex flex-col md:mt-5 md:flex-row">
          <div className="mr-36 flex flex-col justify-between">
            <div>
              <h2 className="text-md text-white md:text-lg">WE'D LOVE TO HEAR FROM YOU</h2>
            </div>
            <div>
              <div className="flex">
                <div>
                  <p className="text-xs text-white">Subscribe to our newsletter</p>
                  <input
                    className="-ml-1 mt-3 h-12 w-[250px] rounded-full border border-zinc-600 bg-zinc-700 p-2 pl-3 placeholder:text-xs"
                    placeholder="e.g. stevejobs@gmail.com"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="mx-auto w-full max-w-lg">
              <h1 className="text-4xl font-medium">Contact us</h1>
              <p className="mt-3">Email us at alpinesnow@gmail.com or message us here:</p>
              <form action="" className="mt-10">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="relative z-0">
                    <input
                      type="text"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      name="name"
                      className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent px-0 py-2.5 text-sm text-white focus:border-red-600 focus:outline-none focus:ring-0"
                      placeholder=""
                    />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600 peer-focus:dark:text-red-500">
                      Your name
                    </label>
                  </div>
                  <div className="relative z-0">
                    <input
                      type="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      name="email"
                      className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent px-0 py-2.5 text-sm text-white focus:border-red-600 focus:outline-none focus:ring-0"
                      placeholder=""
                    />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600 peer-focus:dark:text-red-500">
                      Your email
                    </label>
                  </div>
                  <div className="relative z-0 col-span-2">
                    <textarea
                      type="message"
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                      name="message"
                      rows="5"
                      className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent px-0 py-2.5 text-sm text-white focus:border-red-600 focus:outline-none focus:ring-0"
                      placeholder=""
                    ></textarea>
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600 peer-focus:dark:text-red-500">
                      Your message
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                  className="mt-5 rounded-md bg-black px-5 py-2 text-white hover:bg-gray-800 hover:text-gray-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Html>
  );
};
