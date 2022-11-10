'use client';

import Link from 'next/link';
import { use } from 'react';

export default function RCCUseTest() {
  const text = use(fetch('/rcc-use-test.txt').then(response => response.text()));

  return (
    <>
      <header>
        <Link href="">« Home</Link>
      </header>
      {text}
    </>
  );
}
