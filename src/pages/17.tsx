import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Page: NextPage = () => {
  const [count, setCount] = useState<number>(17);

  const itemTitle: string = '４．清掃状況';
  const itemList: string[] = [
    '銅賞をとってからも生産管理室の整理整頓はずっと維持され続けております。',
    'また、銀賞をとるために新たに必要な条件はおおよそ満たしている、と思われます。',
    'しかし全く手つかずの項目もあるため、これから対応する必要がある点については早急に対応を行い、',
    '今年度末には銀賞獲得のための申請をさせていただければ幸いです。',
  ];

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
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 1, x: -2000 },
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
            className='m-auto w-full'
            variants={thumbnailVariants}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 1 },
            }}
          >
            <motion.ul
              initial='hidden'
              animate='visible'
              variants={list}
              className='m-auto w-5/6 list-none'
            >
              {itemList.map((item, index) => (
                <motion.li
                  key={item}
                  variants={num}
                  className='my-20 text-6xl'
                  transition={{ duration: 2, delay: index * 3 }}
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
