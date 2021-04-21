import React , { useRef ,useEffect} from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import { gsap } from 'gsap'


  const query = graphql`
        {
          file(relativePath: {eq: "george2.png"}) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
  `

  

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    gsap.from(heroRef.current , {
      scale:0.5,
      x: -2000,
      autoAlpha: 0,
      ease:'ease',
      duration:1.2
    });
},[]);




  const {file:{childImageSharp:{fluid}}} = useStaticQuery(query)


  return (
    <header className="hero" ref={heroRef}>
        <div className="section-center hero-center">
            <article className="hero-info">
              <div>
                <div className="underline"> </div>
                  <h1> Hello, I'm <br />
                    George Nikoglou</h1>
                  <h4>freelance React and GatsbyJS Developer</h4>
                  <Link to="/contact" className="btn">
                    Contact Me
                  </Link>
                  <SocialLinks />
              </div>
            </article>
              {/* <Image fluid={fluid} className="hero-img"/> */}
        </div>
    </header>

  )
}

export default Hero
