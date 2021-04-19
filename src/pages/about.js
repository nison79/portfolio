import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from '../components/SEO'



const About = ({data:{about:{nodes}}}) => {
  const{ title, stack,info,image} =nodes[0]
  return (
    <Layout>
     <SEO title="About" description="Who I am? Learn..."/>
      <section className="about-page">
        {/* put about-center class for the image */}
        <div className="section-center ">  
          {/* <Image fluid={image.childImageSharp.fluid} className="about-img"/> */}
          <article className="about-text">
            <Title title={title}/>
            <p>{info}</p>
            <div className="about-stack">
              {stack.map((item) => {
                return(
                  <span key={item.id}>{item.title}</span>
                )
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    about:allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
        image {
          childImageSharp {
            fluid(fit: COVER,maxWidth:200) {
             ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About
