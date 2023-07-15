import { useState, useEffect } from "react";
import client from "../../sanity/client";
import "./SocialManagement";

const SocialManagement = () => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "gestion"] {
            content,
            content2,
            subcontent,
            textcontent,
            mainImage{
              asset->{
                _id,
                url
              }
            }
          }`
      )
      .then((data) => {
        if (data.length >= 3) {
          const firstData = data[2];
          setProjectData(firstData);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="content">
        {projectData &&
          projectData.mainImage && ( // Verificar projectData.mainImage
            <div
              className="content__img"
              style={{
                backgroundImage: `url(${projectData.mainImage.asset.url})`,
              }}
            >
              <div className="contentAmbiental">
                <h2>
                  {projectData.content} <span>{projectData.content2}</span>
                </h2>
                <h3>{projectData.subcontent}</h3>
                <p>{projectData.textcontent}</p>
              </div>
            </div>
          )}
      </div>

      <div className="contentnone">
        {projectData && (
          <div
            className="contentnone__img"
            style={{
              backgroundImage: `url(${projectData.mainImage.asset.url})`,
            }}
          >
            <div className="textAmbiental">
              <h2>
                {projectData.content} <span>{projectData.content2}</span>
              </h2>
              <h3>{projectData.subcontent}</h3>
              <p>{projectData.textcontent}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SocialManagement;
