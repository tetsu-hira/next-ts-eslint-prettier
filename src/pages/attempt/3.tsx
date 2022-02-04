import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Page: NextPage = () => {
  const [count, setCount] = useState<number>(11);

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
        <Link href='/'>
          <a className='flex items-center h-screen text-9xl text-blue-400 bg-slate-100'>◂</a>
        </Link>
        <main className='flex items-center w-full h-screen bg-slate-100'>
          <div className='m-auto text-center'>
            <div className='text-6xl text-red-400'>
              職場規律やルールを維持する枠割分担を決めてある（5S責任者の権限)
            </div>
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
