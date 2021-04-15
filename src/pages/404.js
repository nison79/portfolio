import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <SEO title="Not Found" description="the page does not exist.. Go to Home Page"/> 
      <main className="error-page">
        <div className="error-container">
          <h1>oops it's a dead end</h1>
          <Link to="/" className="btn">
            Back Home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
