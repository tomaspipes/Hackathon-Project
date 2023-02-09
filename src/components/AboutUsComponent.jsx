import React from "react";
import handstogether from '../resources/maos.png'
import aldeiaarvore from '../resources/angola-2018.jpeg'
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";


export default function AboutUsComponent() {
    const mystyle1 ={
        paddingTop: "25px"
    }
    const mystyle = {
        width: "100%"
    }
    return (<>
            <div>
                <img style={mystyle} src={handstogether} alt="handstogether" />
            </div>

            <h1 style={{ textAlign: "center", color: "#fea731", marginTop:"40px", marginBottom:"40px" }}> Bringing expertise and need together</h1>
            <p style={{ textAlign: "center" }}> A global society build with equal opportunities for all is our goal, so we will overcome obstacles with everyone's contribuition and knowledge.</p>
            <hr></hr>
            <div style={{ display: "flex" }}>
                <div class="align-middle" style={{ justifyContent: "center", color: "#fea731", paddingRight: "20px", paddingLeft: "50px", marginTop: "8px" }}>
                    <div>
                        <h1 style={{ lineHeight: "70%", }}> WHAT</h1>
                    </div>
                    <div>
                        <h1 style={{ lineHeight: "70%", paddingLeft: "20px" }}> WE</h1>
                    </div>
                    <div>
                        <h1 style={{ lineHeight: "70%",  paddingLeft: "25px" }}> DO</h1>
                    </div>
                </div>
                <p style={mystyle1}>We create a connection between professionals and organisations that are willing to promote a country's growth towards a better future in health and environment. Through shared knowledge and expertise we improve porcesses and systems. At the moment we have several projects in Angola (África) in health education, hospitals, agriculture and environmental intervention.</p>
            </div>
            <hr></hr>


            <div style={{ display: "flexbox" }}>
                <div style={{ display: "flexbox", height: "auto", width: "auto", padding: "20px", backgroundColor: "#fea730", borderRadius: "7px", margin: "30px", marginLeft: "50px" }}>
                    <h1 style={{ textAlign: "center", color: "white" }} > HEALTH</h1>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <p style={{textAlign:"justify"}}> Health in Angola is rated among the worsts in the world. It has one of the highest maternal, neonatal and child death rates in the world. Almost 1 in 5 children dies before the fifth birthday, and the maternal mortality rate is 610 deaths per 100,000 live births. Also, Malaria is very prevalent in the northern part of the country, where most of the population lives, due to the climate and appears seasonally in the South. This disease is a huge concern for maternal health, contributing about 25 percent of the total maternal mortality alone. This means there are vaccines and medication available for these in other countries, but in Angola they can be deadly. At Come with Me we think this is preventable. The World Health Organisation research show it as well. It also shows that the solution for this implementing continuous improvement in processes.</p>
                    </div>
                </div>
                <div style={{ display: "flexbox", justifyContent: "center", textAlign: "center" }}>
                    <img src={aldeiaarvore} style={{ border: "5px solid", borderColor: "black" }} alt="Aldeia em torno de uma árvore" />
                </div>
                <div style={{ display: "flexbox", height: "auto", width: "auto", padding: "20px", backgroundColor: "#fea730", borderRadius: "7px", margin: "30px", marginLeft: "50px" }}>
                    <h1 style={{ textAlign: "center", color: "white" }} > ENVIRONMENT</h1>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <p style={{textAlign:"justify"}}> African countries are experiencing the worst drought in 40 years. Overexploitation of the land, cutting of trees for firewood, overgrazing of grassy areas and inappropriate land use practices are causing the decrease of vegetation. Land became bare and unprotected, increasing the drought of the land. Ultimately this will lead to desertification and large areas of degraded land.</p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div style={{ display: "flex" }}>
                <div class="align-middle" style={{ justifyContent: "center", color: "#fea731", paddingRight: "20px", paddingLeft: "70px", marginTop: "8px" }}>
                    <div>
                        <h1 style={{ lineHeight: "70%", paddingTop:"10px" }}> OUR</h1>
                    </div>
                    <div>
                        <h1 style={{ lineHeight: "70%" }}> VALUES</h1>
                    </div>
                </div>
                <p style={{textAlign:"center", paddingTop:"15px", marginLeft:"20px", paddingRight:"30px"}}>We're activists for a healthier and safer life worldwide with integrity and spirit pf collaboration our vision for the world means that all peoples attain the highest possible level of health and sustainability . Our mission is to promote positive measurable impact for people at country level. We are individually and collectively commited to put these values into practice.</p>
            </div>
            <hr></hr>
            <h2 style = {{textAlign:"center", color: "#fea731"}}>Who we're searching for:</h2>
            <br />
            <div>
                <Row>
                    <Col>
                        <h5 style={{textAlgin:"center" , margin: "40px"}}> <FaQuoteLeft /> Knowledge is like a baobab tree: no one can compass it with their hands alone.<FaQuoteRight /> </h5>
                        <h5 style={{textAlign:"center"}}>-African proverb</h5>
                    </Col>
                    <Col>
                    <p style={{textAlign:"justify" ,paddingRight:"30px"}}>We recognise and use the power of diversity to achieve more together. For that reason we are always looking for qualified and experienced professionals who are committed to excellence and that share our values to courageously and selflessly defend everyone's right to health and a brighter future.</p>
                    </Col>
                </Row >
            </div>
        </>
    )
}