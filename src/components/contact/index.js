import Loader from 'react-loaders'
import './index.scss'
import React, { useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('gmail', '', refForm.current, '').then(
      () => {
        alert('Message successfuly sent ! ')
        window.location.reload(false)
      },
      () => {
        alert('failed to send message  , please try again...')
      }
    )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            Feel free to reach out to me for any web development inquiries or
            collaboration opportunities. Let's work together to create
            outstanding digital experiences!
          </p>
          <div className="contact-form">
            <form action="" ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li classname="half">
                  <input type="text" name="name" placeholder="name" required />
                </li>

                <li classname="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          The Lakshay Vaishnav,
          <br />
          India, jaipur
          <br />
          PIET GS-3 boys hostel <br />
          near moonlight cafe...
          <br />
          <span>thelakshayvaishnav@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[26.7669624722431, 75.84980249675996]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
            <Marker position={[26.7669624722431, 75.84980249675996]}>
              <Popup>Lxsh lives here, come here for a cup of coffee...</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Contact
