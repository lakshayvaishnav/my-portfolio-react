import React, { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am a passionate and skilled frontend web developer with a deep
            love for creating visually stunning and user-friendly websites. With
            several years of experience in the industry, I have honed my
            expertise in HTML, CSS, and JavaScript, allowing me to craft
            engaging and responsive web interfaces. My keen eye for design
            aesthetics and intuitive user experiences enables me to bring ideas
            to life and captivate users from the moment they land on a webpage.
          </p>
          <p>
            In my journey as a frontend web developer, I have successfully
            collaborated with cross-functional teams, including designers and
            backend developers, to create seamless and interactive web
            applications. I am well-versed in modern frontend frameworks such as
            React and Vue.js, utilizing their powerful features to develop
            dynamic and efficient websites. My attention to detail,
            problem-solving abilities, and passion for staying up-to-date with
            the latest industry trends enable me to deliver high-quality and
            visually appealing websites that meet the unique needs of clients
            and end users.
          </p>
          <p>
            With a strong foundation in frontend development, I strive to create
            memorable online experiences by blending cutting-edge technologies
            with a user-centered approach. I am proficient in responsive web
            design techniques, ensuring that websites adapt flawlessly to
            various screen sizes and devices. Additionally, I possess a solid
            understanding of web accessibility standards, ensuring that my
            websites are inclusive and usable for all users. Whether it's
            optimizing website performance or implementing intuitive navigation
            systems, I am dedicated to crafting seamless digital experiences
            that leave a lasting impression.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#dd0031" />
            </div>

            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>

            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>

            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>

            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
            </div>

            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
