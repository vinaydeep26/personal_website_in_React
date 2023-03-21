import React from 'react';

const Home = () => {
  return (
    <>
    <section className="home">
        <div className="container flex">
            <div className="left">
            <div className="img"><img src="./assets/vinay.png" alt="" /></div>
            </div>

            {/* PROVIDE LINKS TO SOCIALS */}
            <div className="right topMarign">
                <h1>I AM A SOFTWARE <br />ENGINEER </h1>
                <div className="SocialIcon">
                  <a href='https://www.facebook.com/vinaydeep26'><i className='fab fa-facebook facebook'></i></a>
                    <a href='https://www.instagram.com/vinaydeepsinghvds/'><i className='fab fa-instagram instagram'></i></a>
                    <a href='https://www.linkedin.com/in/vinaydeep26/'><i className='fab fa-linkedin linkedin'></i></a>
                    <a href='https://github.com/vinaydeep26?tab=repositories'><i className='fab fa-github github'></i></a>
                </div>
                <p> Master of Computer Science Student dedicated to improving skills through hands-on learning and
development work. Proficient in Python, C++, java, and desktop as well as cloud development environments. Adept at using HTML5, JavaScript, ReactJs and other programming languages to produce clean code. Looking for Full-time opportunities in Software Development possessing strong communication and analytical abilities.</p>
<button className="primary-btn">Contact me!</button>
            </div>
        </div>
    </section>
    
    
    
    
    
    
    </>
  )
}

export default Home