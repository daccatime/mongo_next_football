import React from 'react';

import Link from 'next/link'

export function Button() {
  return (
    <Link href='sign-up' passHref>
      <button className="p-2 my-2 bg-blue-500 text-white rounded-md focus:outline-none focus:ring-2 ring-blue-300 ring-offset-2">Sign Up</button>
     </Link>
  );
}

 export default Button;