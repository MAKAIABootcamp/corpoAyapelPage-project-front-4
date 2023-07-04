import React, { useEffect, useState } from "react";
import client from "../../sanity/client";
import { useParams } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";
import './News.scss';


const News = () => {
  const [newsData, setNewsData] = useState(null);
  const { slug } = useParams();
  const [projectId, setProjectId] = useState(null);
  const [dataset, setDataset] = useState(null);
  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
        title,
        body,
        slug,
        publishedAt,
        name,
        mainImage{
          asset->{
            _id,
            url
          }
        }
      }`
      )
      .then((data) => {
        setNewsData(data[0]);
        setProjectId(client.config().projectId);
        setDataset(client.config().dataset);
      })
      .catch(console.error);
  }, [slug]);
  console.log(newsData);
  if (!newsData && !projectId && !dataset) return <div>Loading...</div>;
  return (
    
    <main className="mainNew">
      <section className="mainNew__fondo-1">
        <figure>
          <img src="https://res.cloudinary.com/dgnwqr93n/image/upload/v1688423761/fondo-1-1_fvxyjv.png" alt="" />
        </figure>
      </section>
      
      <section className="mainNew__head">
        <figure className="mainNew__image">
          <img src={newsData.mainImage.asset.url} alt=""  style={{ height: "400px" }}/>
        </figure>
        <span className="mainNew__date">{newsData.publishedAt}</span>
        <h2 className="mainNew__title">{newsData.title}</h2>
      </section>

      <section className="mainNew__body">
      <BlockContent blocks={newsData.body} projectId={projectId} dataset={dataset} />
      </section>
      <section className="mainNew__fondo-2">
        <figure>
          <img src="https://res.cloudinary.com/dgnwqr93n/image/upload/v1688423761/fondo-2_o7qw66.png" alt="" />
        </figure>
      </section>
    </main>
  );
};

export default News;
