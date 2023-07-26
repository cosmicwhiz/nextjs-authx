"use client";

import Link from "next/link"
import Image from "next/image"
import { useState,useEffect } from "react"
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import Dropdown from "./Dropdown";


const Nav = () => {
  const { data: session, status } = useSession()

  const [providers, setProviders] = useState<any>(null);
  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);

  useEffect(() => {
    const fetchProviders = async () => {
        const response = await getProviders();
        setProviders(response);
    }
    fetchProviders();
  }, [])

  return (
    <nav className="nav_container">
        <Link href="/" className="navlogo_link">
            <Image src="/images/logo.png" alt="AuthX Logo" width={32} height={32} className='object_contain'></Image>
            <p className="logo_text">AuthX</p>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav_buttons_lg_container">
            {
                status === 'loading' ? 
                <>
                    <div className="nav_buttons">
                        <div className="nav_signin_loading"></div>
                    </div>
                </> 
                : 
                <>
                {
                session?.user ? (
                    <div className="nav_buttons">
                        <button type="button" className="nav_button outline_button" onClick={() => signOut()}>
                            Sign Out
                        </button>

                        <Link href="/profile" className="profile_img">
                            <Image src={session?.user.image || ""} alt="Profile Picture" width={37} height={37}></Image>
                        </Link>
                    </div>
                ) : (
                    <>
                    {
                        providers && Object.values(providers).map((provider: any) => (
                            <button type="button" key={provider.name} 
                            onClick={() => signIn(provider.id)} className="nav_button white_button">
                                Sign In
                            </button>
                        ))
                    }
                    </>
                ) 
            }</>
            }
        </div>

        {/* Mobile Navigation */}
        <div className="nav_buttons_sm_container">
            {
                status === 'loading' ? 
                <>
                    <div className="nav_buttons_sm">
                        <div className="nav_signin_loading"></div>
                    </div>
                </> 
                :
                <>
                    {
                        session?.user ? (
                            <div className="nav_buttons_sm">
                                <div className="profile_img">
                                    <Image src={session?.user.image || ""} alt="Profile Picture" width={37} height={37}
                                    onClick={() => setToggleDropdown((prev) => !prev)}></Image>
                                </div>

                                {
                                    toggleDropdown && (    
                                        <Dropdown setToggleDropdown={setToggleDropdown} signOut={signOut}></Dropdown>
                                    )
                                }
                            </div>
                        ) : (
                            <>
                            {
                                providers && Object.values(providers).map((provider: any) => (
                                    <button type="button" key={provider.name} 
                                    onClick={() => signIn(provider.id)} className="nav_button white_button">
                                        Sign In
                                    </button>
                                ))
                            }
                            </>
                        )
                    }
                </>
            }
        </div>
    </nav>
  )
}

export default Nav
