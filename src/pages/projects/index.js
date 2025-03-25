import "./style.css";

import { Col, Container, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { techstack } from "../../content_option";

import ET from "../../assets/project/ET.png";
import IEUM from "../../assets/project/IEUM.png";
import React from "react";
import books from "../../assets/project/books.png";
import carpoint from "../../assets/project/carpoint.png";
import cochl from "../../assets/project/cochl.png";
// import fridge from "../../assets/project/fridge";
import mci from "../../assets/project/mci.png";
import reddit from "../../assets/project/reddit.png";
import remote from "../../assets/project/remote.png";
// import tabMonster from "../../assets/project/tabMonster";
import youtube from "../../assets/project/youtube.png";

export const Projects = () => {

  var imglist=[books, reddit, cochl, mci, ET, carpoint, remote]
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Projects | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="tech-section">
          <Col lg="8">
            <h3>💿 Softwares & Tools </h3>{" "}
          </Col>
        </Row>

        <div className="tech-section">
        {techstack.map((section, index) => (
          <div className="tech-group" key={index}>
          <p className="tech-title">• {section.category}:</p>
          <p className="tech-description">{section.items.join(", ")}</p>
          </div>
        ))}
        </div>



        <div className="">
        {/*{projectportfolio.map((data, i) => {
            
            return (
              <div key={i} className="researchBox">
                <div>
                {/*<img class="img_research" src={imglist[i]} alt="d"></img>/}
                </div>
                <div className="description">
                  <h5>{data.title}</h5>
                  <div>
                  <p>{data.description}</p>
                
                  {data.github && 
                    <><a class="d" href={data.github}>github</a> | </>}
                
                  {data.website && 
                    <><a class="d" href={data.website}>website</a> | </>}
                
                  {data.paper && 
                    <a class="d" href={data.paper}>paper</a>}
                </div>
                </div>
              </div>
            );
          })}*/}
        </div>
      </Container>
    </HelmetProvider>
  );
};
