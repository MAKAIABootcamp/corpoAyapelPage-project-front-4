import React, { useEffect, useState } from "react";
import client from "../../sanity/client";
import { useParams } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";
import {PortableText} from '@portabletext/react'
import urlBuilder from '@sanity/image-url'
import {getImageDimensions} from '@sanity/asset-utils'
import getYouTubeId from 'get-youtube-id'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'


import "./News.scss";
import {
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const SampleImageComponent = ({value}) => {
  const {width, height} = getImageDimensions(value)
  return (
    <img
      src={urlBuilder().image(value).width(800).fit('max').auto('format').url()}
      alt={value.alt || ' '}
      loading="lazy"
      style={{
        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  )
}

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
  const serializers = {
    types: {
      youtube: ({ node }) => {
        const { url } = node || {};
        const id = getYouTubeId(url);
        return <LiteYouTubeEmbed id={id} />;
      },
    },
    blocks: {
      youtube: {
        // Serializer for the "youtube" block type
        component: ({ node }) => {
          const { url } = node || {};
          const id = getYouTubeId(url);
          return <LiteYouTubeEmbed id={id} />;
        },
      },
    },
  };

  if (!newsData && !projectId && !dataset) return <div>Loading...</div>;
  return (
    <main className="mainNew">
      <section className="mainNew__fondo-1">
        <figure>
          <img
            src="https://res.cloudinary.com/dgnwqr93n/image/upload/v1688423761/fondo-1-1_fvxyjv.png"
            alt=""
          />

        </figure>
      </section>
      <section className="mainNew__fondo-2">
        <figure>
          <img
            src="https://res.cloudinary.com/dgnwqr93n/image/upload/v1688423761/fondo-2_o7qw66.png"
            alt=""
          />
        </figure>
      </section>

      <section className="mainNew__head">
        <figure className="mainNew__image">
          <img
            src={newsData.mainImage.asset.url}
            alt=""
            style={{ height: "400px" }}
          />
        </figure>
        <section className="mainNew__social-share">
          <section className="mainNew__social-icons"> 
            <FacebookShareButton
              url={"https://corpoayapel.com/test"}
              quote={newsData.title}
              hashtag={"#corpoayapel"}
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <WhatsappShareButton
              url={"https://corpoayapel.com/test"}
              title={newsData.title}
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <TwitterShareButton
              url={"https://corpoayapel.com/test"}
              title={newsData.title}
              hashtags={["corpoayapel"]}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </section>
          <span className="mainNew__date">{newsData.publishedAt}</span>
        </section>

        <h2 className="mainNew__title">{newsData.title}</h2>
      </section>

      <section className="mainNew__body">
      {/* <LiteYouTubeEmbed id={'H-fetNUKqDM'}/> */}
      <BlockContent
          blocks={newsData.body}
          projectId={projectId}
          dataset={dataset}
          serializers={serializers} // Update the prop name to "serializers"
        />
         {/* <PortableText value={newsData.body} components={serializers} /> */}
      </section>
     
    </main>
  );
};

export default News;
