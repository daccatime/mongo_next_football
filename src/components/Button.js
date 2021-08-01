import React from 'react';

import Link from 'next/link'

export function Button() {
  return (
    <Link href='sign-up' passHref>
      <button className="uppercase px-8 py-2 rounded-full border border-red-600 text-red-600 max-w-max shadow-sm hover:shadow-lg">button</button>
    </Link>
  );
}

 export default Button;