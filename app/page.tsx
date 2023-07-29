import Upvote from "@/components/Upvote"

const Home = () => {
  return (
    <section className="auth_container">
      <h1 className="heading">AuthX</h1>
      <div className="chat_desc">
        <div className="character_chat">
          <span className="character auth_guard">Auth Guardian</span>
          <span>:&nbsp;&nbsp;</span>
          <span>I&apos;ll do the required Authentication!</span>
        </div>
        <div className="character_chat">
          <span className="character coordinator">Coordinator</span>
          <span>:&nbsp;&nbsp;</span>
          <span>Sign In and then click on the profile icon to view your profile</span>
        </div>
      </div>
      <Upvote color="#26ff17" upvoteHeading="Exo-Upvote"></Upvote>
    </section>
  )
}

export default Home