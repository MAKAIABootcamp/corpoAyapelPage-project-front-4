import { useState, useEffect } from "react";
import client from "../../sanity/client";
import "./CardWhatWeDo.scss";

const EnvironmentalManagement = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [projectData, setProjectData] = useState(null); // Cambiar a null

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
        if (data.length >= 2) {
          // Cambiar a >= 2
          const secondData = data[1]; // Cambiar a data[1]
          setProjectData(secondData);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="content">
        {projectData && projectData.mainImage && (
          <div
            className="content__img2"
            style={{
              backgroundImage: `url(${projectData.mainImage.asset.url})`,
            }}
          >
            <div className="contentGestion">
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

export default EnvironmentalManagement;

// import React, { useEffect, useState } from "react";
// import "./CardWhatWeDo.scss";
// import client from "../../sanity/client";
// // import "../../pages/FullPage/FullPage.scss"

// export default function CardWhatWeDo() {
//   const [allPostData, setAllPostData] = useState(null);
//   useEffect(() => {
//     client
//       .fetch(
//         `*[_type == "gestion"] {
//           content,
//           content2,
//           subcontent,
//           textcontent,
//         mainImage{
//           asset->{
//             _id,
//             url
//           }
//         }
//       }`
//       )
//       .then((data) => setAllPostData(data))
//       .catch(console.error);
//   }, []);

//   return (
//     <>
//       <div className="content">
//         {allPostData &&
//           allPostData.map((data, index) => (
//             <div
//               className={`content__img ${
//                 index === 1 || index === 3 ? "content__img2" : ""
//               }`}
//               key={index}
//               style={{
//                 backgroundImage: `url(${data.mainImage.asset.url})`,
//               }}
//             >
//               <div
//                 className={`${
//                   index === 1 ? "contentGestion" : "contentAmbiental"
//                 }`}
//               >
//                 <h2>
//                   {data.content} <span>{data.content2}</span>
//                 </h2>

//                 <h3>{data.subcontent}</h3>
//                 <p>{data.textcontent}</p>
//               </div>
//             </div>
//           ))}
//       </div>

//       <div className="contentnone">
//         <div>
//           {allPostData &&
//             allPostData.map((data, index) => {
//               return (
//                 <div
//                   className="contentnone__img"
//                   key={index}
//                   style={{
//                     backgroundImage: `url(${data.mainImage.asset.url})`,
//                   }}
//                 >
//                   <div className="textAmbiental">
//                     <h2>
//                       {data.content} <span>{data.content2}</span>
//                     </h2>

//                     <h3>{data.subcontent}</h3>
//                     <p>{data.textcontent}</p>
//                   </div>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     </>
//   );
// }
