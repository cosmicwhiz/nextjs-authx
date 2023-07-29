"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

const Profile = () => {
  const { data: session } = useSession()
  const loadTime = 500;

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, loadTime);
  }, [])

  return (
    <section className="profile_page">
      {
        isLoading ? 
        <div className="loading_container">
          <div className="profile_heading_loading"></div>
          <div className="profile_data_loading"></div>
        </div> : 
        <>
          {
            session?.user ? (
              <>
                <div className="profile_heading_container">
                  <p className="profile_heading">Welcome to your</p> 
                  <h1 className="nanoscape"> NanoScape</h1>
                </div>

                {/* Display Profile Data */}
                <div className="profile_data_container">
          
                  <div className="profile_image_container">
                    <div className="profile_img">
                      <Image src={session?.user.image || ""} alt="Dashboard Profile Image" fill></Image>
                    </div>
                  </div>
                  <div className="profile_data">
                    <p className="profile_data_text">{session?.user.name}</p>
                    <p className="profile_data_text">{session?.user.email}</p>
                  </div>
                </div>
              </>
            ) : (
                <div className="profile_error_container">
                  <p className="profile_data_error">Oops!</p>
                  <div className="chat_desc">
                    <div className="character_chat">
                      <span className="character auth_guard">Auth Guardian</span>
                      <span>:&nbsp;&nbsp;</span>
                      <span>Nothing to show here!</span>
                    </div>
                    <div className="character_chat">
                      <span className="character coordinator">Coordinator</span>
                      <span>:&nbsp;&nbsp;</span>
                      <span>It seems that you haven&apos;t signed in</span>
                    </div>
                </div>
              </div>
            )
          }
          <Link href="/" className="go_back_button">Go Back</Link>
        </>
      }
          
    </section>
  )
}

export default Profile