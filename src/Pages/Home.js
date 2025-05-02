import '../styles.css';

function Home() {
  return (
    <>
      <div className="container">
    
      {/* Introduction Section */}
      <section className="intro-section">
        <h2 className="intro-heading">Welcome to Evan Wells' Page!</h2>
        <p className="intro-text">
        This site is a personal hub where I showcase my projects, achievements, and interests.
            Use the logo in the top-left corner as a home button. Explore the <strong>Projects</strong> page to see what I’ve been building,
            complete with GitHub links, presentations, and research papers. The <strong>Resume</strong> and <strong>About</strong> pages give you a quick look into who I am.
            <br /><br />
            Scroll down to check out the latest from <em>Wells Weekly</em>, where I share milestones and updates!
          
        </p>
      </section>
    
      {/* Post Section */}
      <section id="projects" className="projects-section">
        <h3 className="intro-heading"><u>Wells Weekly - Latest Post</u></h3>
        <div className="post-box">
          <h2 className="post-title">Evan's Research Opportunity II</h2>
          <p className="post-meta">By Evanth Wells · April 29, 2025</p>
          <div class="post-image-wrapper">
            <img src="usra.jpg" alt="Post" class="post-image" />
          </div>
          <p className="post-content">
          Evan Wells is excited to spend another summer as a Research Assistant, having once again been selected 
          for the Undergraduate Student Research Awards (USRA). This year, he will work under the mentorship of Dr.
          Haibin Zhu, where he plans to apply the knowledge and skills he has gained over the past year to make a meaningful impact on society.
          The research focuses on modelling, solving and optimizing complex systems through the E-CARGO model and its associated Role-Based
          Collaboration framework. 
          </p> 
          <br />
          <p className="post-content">
          When asked about the opportunity, Evan shared his enthusiasm, saying: "I am truly honored to have been chosen again. I'm eager to contribute 
          to my field and am excited to see where my ambition can take me."
          We are all looking forward to seeing the exciting developments Evan will
          make this summer and the strides he will take in his research journey.
          </p>
        </div>
        <div class="post-button-container">
          <a href="/posts" class="post-button">View All</a>
        </div>
      </section>

    
    </div>
   
  </>
  );
}

export default Home;