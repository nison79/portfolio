import React  from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {

  return (
    <Layout>
      <SEO title="Contact" description="get in touch with me"/>
      <section className="contact-page" >
        <h1>Let's Build Something Together.</h1>
        <article className="contact-form">
          <h3>Message Me.</h3>
          <form action="https://formspree.io/f/xzbybnnq" method="POST">
            <div className="form-group">
              <input type="text" name="name" placeholder="name" className="form-control"/>
              <input type="email" email="email" placeholder="email" className="form-control"/>
              <textarea name="message" rows="5" placeholder="message" className="form-control"></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              Submit Here
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
