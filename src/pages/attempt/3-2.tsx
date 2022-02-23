import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Page: NextPage = () => {
  const [count, setCount] = useState<number>(13);

  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

  const thumbnailVariants = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    animate: { opacity: 1, duration: 1 },
    exit: {
      scale: 0.1,
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

        <main className='items-center m-auto w-full h-screen bg-slate-100'>
          <motion.div className='h-full' variants={thumbnailVariants}>
            <motion.div
              className='pt-16 pb-12 m-auto mt-0 w-4/5 text-5xl font-bold leading-relaxed text-center underline underline-offset-4'
              initial={{ scale: 0.1, opacity: 0 }}
              animate={{ opacity: 1, y: [300, 300, 0], scale: [0.3, 1, 1], color: [] }}
              transition={{ duration: 2, times: [0.1, 0.6, 1] }}
            >
              定期的な不具合の発見、改善が継続して行われている
            </motion.div>
            <motion.div
              className='m-auto text-5xl text-center rotate-90'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              ➡
            </motion.div>
            <motion.div
              className='pt-12 m-auto text-5xl font-bold leading-relaxed text-center text-red-500 underline underline-offset-4'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              月に一度、5Sパトロールをパトロール当番と一緒に実施し
              <br />
              問題があった場合には次月の5S活動にて対策を行っている
            </motion.div>
            <div className='flex'>
              <motion.div
                className='block m-auto mt-16 w-full text-center'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, duration: 1 }}
              >
                <Image src='/3-2-1.jpg' width={600} height={450} alt='test' />
              </motion.div>
              <motion.div
                className='block m-auto mt-16 w-full text-center'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5, duration: 1 }}
              >
                <Image src='/3-2-2.jpg' width={600} height={450} alt='test' />
              </motion.div>
            </div>
          </motion.div>
        </main>

        <Link href={'/' + (count + 1)}>
          <a className='flex right-0 items-center h-screen text-9xl text-slate-100 bg-slate-100'>
            ▸
          </a>
        </Link>
      </div>
    </motion.div>
  );
};

export default Page;
