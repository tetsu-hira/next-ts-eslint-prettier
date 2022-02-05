import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Page: NextPage = () => {
  const [count, setCount] = useState<number>(7);

  const itemTitle: string = '５．整頓状況';
  const itemList: string[] = [
    '対象物の３定不具合の改善を分担し（定位置、定量、定時）終了している',
    '共用書類、本類のロケーション不具合の改善もされている',
    'ロケーションごとの責任者は明示されており、責任者の任務が実施されている',
  ];
  console.log(itemList);

  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

  const thumbnailVariants = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    animate: { opacity: 1, duration: 1 },
    exit: {
      // scale: 0.1,
      opacity: 0,
      transition: { ...transition, duration: 1.5 },
    },
  };

  const frameVariants = {
    hover: { scale: 0.95 },
  };

  const imageVariants = {
    hover: { scale: 1.1 },
  };

  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const num = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -1000 },
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ x: 0 }}
      exit='exit'
      transition={{ duration: 1 }}
    >
      <Head>
        <title>5S活動発表</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex w-full'>
        <Link href={'/' + (count - 1)}>
          <a className='flex items-center h-screen text-9xl text-blue-400 bg-slate-100'>◂</a>
        </Link>
        <main className='flex items-center w-full h-screen bg-slate-100'>
          <motion.div
            className='pt-48 m-auto mt-0 w-full'
            variants={thumbnailVariants}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 1 },
            }}
          >
            <div className='mb-20 text-7xl'>{itemTitle}</div>
            <motion.ul
              initial='hidden'
              animate='visible'
              variants={list}
              className='m-auto w-5/6 list-disc'
            >
              {itemList.map((item, index) => (
                <motion.li
                  key={item}
                  variants={num}
                  className='my-10 text-5xl'
                  transition={{ duration: 1, delay: index * 2 + 2 }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </main>
        <Link href={'/' + (count + 1)}>
          <a className='flex right-0 items-center h-screen text-9xl text-blue-400 bg-slate-100'>
            ▸
          </a>
        </Link>
      </div>
    </motion.div>
  );
};

export default Page;
