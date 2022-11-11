import fs from 'fs';
import Link from 'next/link';

export default async function RSCTest() {
  const text = await fs.promises.readFile('public/rsc-test.txt', 'utf-8');
  return (
    <>
      <header>
        <Link href="">« Home</Link>
      </header>
      {text}
    </>
  );
}
