import React from 'react'
import Title from "../common/Title/Title"
import {homeAbout} from "../../dummydata"
import AWrapper from "./AWrapper"
import "./about.css"
import image from "../../assets/images/randomphotos/lifestyle-business-people-using-laptop-computer-pink.jpg"


const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
            <div className="left row">
                <img src={image} alt="my image" />
                </div>
                <div className="right row">
                    <Title subtitle="LEARN ANYTHING" title="Benifits About Online Learning Expertise"/>
                     <div className="items"> {homeAbout.map((val)=>(
                            <div className="item flexSB">
                            <div className="img">
                            <img src={val.cover} alt="" /></div>
                                <div className={val.cover}></div>
                                <div className="text">
                                    <h2>{val.title}</h2>
                                    <p>{val.desc}</p>
                                </div>
                            </div>
                        ))}
                     </div>
                </div>
                </div>
                </section>  
      
    </>
  )
}

export default AboutCard
