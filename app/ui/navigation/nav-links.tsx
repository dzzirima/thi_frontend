'use client';

import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import BarChartIcon from '@mui/icons-material/BarChart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';


const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Orders',
    href: '/dashboard/orders',
    icon: ReceiptIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: PersonIcon },
  { name: 'Discounts', href: '/dashboard/customers', icon: LocalOfferIcon },
  { name: 'Analytics', href: '/dashboard/customers', icon: BarChartIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}