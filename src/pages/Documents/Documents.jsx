import React, { useEffect, useState } from "react";
import client from "../../sanity/client";
import "./Documents.scss";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { actionGetDataAsync } from "../../redux/actions/dataActions";

const Documents = () => {
  const [documentsData, setDocumentsData] = useState(null);
  const [selectedYear, setSelectedYear] = useState("");
  const { data } = useSelector((store) => store.data);
  const dispatch = useDispatch();
  const fields = [
      "title",
      "year",
      `manuscript{
          asset->{
              _id,
              url
          }
      }
      `,
  ];

  useEffect(() => {
      dispatch(actionGetDataAsync("documentos", fields));
      setDocumentsData(data[5].documentos);
  }, [dispatch]);


  if (!documentsData) {
    return <div>Loading...</div>;
  }

  const years = documentsData.map((data) => data.year);
  const uniqueYears = [...new Set(years)]; // Elimina los valores duplicados

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const filteredData = documentsData.filter((data) => data.year === selectedYear);

  return (
    <div className="mainDocuments">
      <main className="mainDocuments__main">
        
        <section className="mainDocuments__title">
          <h2>Documentos {selectedYear}</h2>

          <select name="documents" id="documents" onChange={handleYearChange} >
            <option>Seleccionar Año</option>
            {uniqueYears.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </section>
        <section className="mainDocuments__documents">
          {filteredData.map((data, index) => (
            <section key={index} className="mainDocuments__document-container">
              <BsFillFileEarmarkPdfFill />
              <a href={`${data.manuscript.asset.url}` }target="_blank" rel="noopener noreferrer" >{data.title}</a>
            </section>
          ))}
        </section>
      </main>
      
    </div>
  );
};

export default Documents;
