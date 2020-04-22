import React, { Component } from "react"
import { Link } from "gatsby"
import axios from 'axios'
import { LazyLoadImage } from "react-lazy-load-image-component";

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends Component {
  state = {
    datas: []
  };

  componentDidMount() {
    axios.get("http://localhost:3000/datas")
      .then(({ data }) => {
        this.setState({ datas: data });
        console.log(this.state.datas);
      })
  };


  render() {
    if (this.state.datas != null) {

      return <Layout>
        <SEO title="Dogukan TANSUK | Remote Team Demo UI" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>

        {
          this.state.datas.map((data, index) => {
            return <div className="data-container" key={index}>
              <h2>{data.fields.Title}</h2>
              <p>{data.fields.Content}</p>

              <LazyLoadImage
                className="attachment-webly-postBlock size-webly-postBlock wp-post-image"
                src={data.fields.Image[0].url}
              />
            </div>
          })
        }

        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    }
    else {
      return <div>asd</div>;
    }
  }

};

export default IndexPage;