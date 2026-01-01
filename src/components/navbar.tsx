import Link from 'next/link';
import React from 'react';
import './styles.css';

const Navbar = () => {
    return(
        <div className='Navbar'>
            <ul className='flex justify-between py-4 px-6'>
                <div>
                    <Link href="/"><li>Home</li></Link>
                </div>
            </ul>
        </div>
    )
}