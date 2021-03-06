import React,{useRef,useEffect} from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from '../components/SEO'
import { ScrollTrigger } from 'gsap/ScrollTrigger';




export default ({data}) => {
  const {
    allStrapiProjects:{nodes:projects},
    allStrapiBlogs:{nodes:blogs},
  } = data

  return (
    <Layout>
      <SEO title="Home" description="the home page of our site" />
      <Hero />
      <Services />
      <Projects projects={projects} title="featured projects" showLink />
      <Jobs />
      <Blogs blogs={blogs} title="Latest Blogs" showLink />
    </Layout>
  )
}


export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
               ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        slug
        content
        description
        date(formatString: "MMMM Do YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

  
