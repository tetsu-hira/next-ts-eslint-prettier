import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Page: NextPage = () => {
  const [count, setCount] = useState<number>(8);

  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item1 = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -1000 },
  };
  const item2 = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -1000 },
  };
  const item3 = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -1000 },
  };
  const item4 = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -1000 },
  };

  return (
    <motion.div
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      exit={{ y: -1000 }}
      transition={{ duration: 1.5, times: [0, 0.5, 1] }}
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
          <div className='m-auto w-full'>
            <div className='mb-20 text-7xl text-center'>６．清潔・躾状況</div>
            <motion.ul
              initial='hidden'
              animate='visible'
              variants={list}
              className='m-auto w-5/6 list-disc'
            >
              <motion.li variants={item1} className='my-10 text-5xl' transition={{ duration: 2 }}>
                維持管理ルールの作成に着手している
              </motion.li>
            </motion.ul>
          </div>
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
