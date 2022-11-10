import Link from 'next/link';

export default async function RSCTest() {
  const text = await fetch('/rsc-test.txt').then(response => response.text());
  return (
    <>
      <header>
        <Link href="">« Home</Link>
      </header>
      {text}
    </>
  );
}
