import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Page: NextPage = () => {
  const [count, setCount] = useState<number>(7);

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
      initial={{ x: 1500 }}
      animate={{ x: 0 }}
      exit={{ x: -1500 }}
      transition={{ duration: 1, times: [0, 0.2, 1] }}
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
            <div className='mb-20 text-7xl text-center'>５．整頓状況</div>
            <motion.ul
              initial='hidden'
              animate='visible'
              variants={list}
              className='m-auto w-5/6 list-disc'
            >
              <motion.li variants={item1} className='my-10 text-5xl' transition={{ duration: 3 }}>
                対象物の３定不具合の改善を分担し（定位置、定量、定時）終了している
              </motion.li>
              <motion.li variants={item2} className='my-10 text-5xl' transition={{ duration: 4 }}>
                共用書類、本類のロケーション不具合の改善もされている
              </motion.li>
              <motion.li variants={item3} className='my-10 text-5xl' transition={{ duration: 5 }}>
                ロケーション毎の責任者は明示されており、責任者の任務が実施されている
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
