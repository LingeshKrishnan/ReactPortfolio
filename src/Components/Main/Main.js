import React from 'react'
import Particles from 'react-particles-js'
import Contact from '../Contact/Contact'
import Documents from '../Documents/Documents'
import Header from '../Header/Header'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'

function Main() {
  return (
    <div className='main'>
      <Particles
        params={
          {
            particles: {
              number: {
                value: 50,
                density: {
                  enable: true,
                  value_area: 900
                }
              },
              color: {
                value: '#ffff'
              },
              opacity: {
                value: 0.5,
                anim: {
                  enable: true,
                }
              },
              size: {
                value: 2,
                random: true,
                anim: {
                  enable: true,
                  speed: 3
                }
              },
              move: {
                speed: 5
              }

            }
          }
        }
      />

      <Navbar />
      <Header />

      <Home />

      <Contact />
      <Documents />

    </div>
  )
}

export default Main
