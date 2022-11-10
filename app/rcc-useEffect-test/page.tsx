'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function About() {
  const [text, setText] = useState('');
  useEffect(() => {
    void async function () {
      const response = await fetch('/rcc-useEffect-test.txt');
      const text = await response.text();
      setText(text);
    }()
  }, []);

  return (
    <>
      <header>
        <Link href="">« Home</Link>
      </header>
      {text}
    </>
  );
}
