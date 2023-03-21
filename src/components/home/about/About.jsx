import React from "react"

const About = () => {
  const data = [
    {
      title: "Who I Am And What I Do",
      desc1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde possimus quaerat quam dolorum ipsa laboriosam, repudia illum amet inventore facilis, eius libero.",
      desc2: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      desc3: "Lorem ipsum dolor sit amet, consectetur ",
      cover: "./assets/viniabout.jpg",
    },
  ]
  return (
    <>
      <section className='about topMarign'>
        <div className='container flex'>
          {data.map((value) => {
            return (
              <>
                <div className='left mtop'>
                  <div className='heading'>
                    <h3>About Me</h3>
                    <h1>{value.title}</h1>
                  </div>

                  <p>{value.desc1}</p>
                  <p>{value.desc2}</p>
                  <p>{value.desc3}</p>
                  <a href="./assets/vinaydeep_singh_cv.pdf" target="_blank"><button className='primary-btn'>Download CV</button></a>
                </div>
                <div className='right'>
                  <div className='img'>
                    <img src={value.cover} alt='' />
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default About