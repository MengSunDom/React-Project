import { UserOutlined } from '@ant-design/icons'
import { useState,useEffect } from 'react';
import Link from 'next/link';

export default function PersonalBar() {
    
    const [isPersonalBarVisible, setIsPersonalBarVisible] = useState(false);
    
    const togglePersonalBar = () => {
        setIsPersonalBarVisible((prev) => !prev);
    };

    return (
        <div className='float-right mr-5' onMouseEnter={togglePersonalBar} onMouseLeave={togglePersonalBar}>
            <UserOutlined />
            {
                isPersonalBarVisible&&(
                <div className="absolute border border-solid border-gray-400 personalBar boxContent">
                    <div className='p-3 text-center font-bold'>My Account</div>
                    <hr className="border-t border-gray-400"/>
                    {/* <div className='p-1 text-center cursor-pointer'><a>Settings</a></div> */}
                    <div className='p-1 text-center cursor-pointer'>
                        <Link href="/"> <span>Settings</span>  </Link>
                    </div>
                </div>
                )
            }
        </div>
    );
}