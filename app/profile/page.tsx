"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Profile = () => {
  const {data: session} = useSession()

  return (
    <section className="profile_page">
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
                  <Image src={session?.user.image || ""} alt="Dashboard Profile Image" width={100} height={100}></Image>
                </div>
              </div>
              <div className="profile_data">
                <p className="profile_data_text">{session?.user.name}</p>
                <p className="profile_data_text">{session?.user.email}</p>
              </div>
            </div>

            <Link href="/" className="go_back_button">Go Back</Link>
          </>
        ) : (
          <>
            <div className="profile_image_container error">
              <p className="profile_data_error">Oops!</p>
              <p className="description"><span className="auth_guard">Auth Guardian</span>: Sign In to view your profile!</p>
            </div>
          </>
        )
      }
          
    </section>
  )
}

export default Profile