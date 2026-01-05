

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const parts = pathname?.split('/') || ['','pl'];
  const currentPath = '/' + parts.slice(2).join('/');

  return (
    <div className="flex gap-2 ml-4 text-xs opacity-70">
      <Link href={'/pl' + currentPath} className="hover:underline">PL</Link>
      <Link href={'/en' + currentPath} className="hover:underline">EN</Link>
      <Link href={'/de' + currentPath} className="hover:underline">DE</Link>
    </div>
  );
}
