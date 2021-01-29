import React from "react"
import {sectionData} from "../data"
import Section  from "./Section"

const Sections = () => {
    return (
        <>
            { sectionData.map((section, index)=>{
                return  <Section section={section} key={index}/>
                })       
            }
        </>         
    )
}

export default Sections;