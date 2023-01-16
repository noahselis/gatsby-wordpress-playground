import React from "react";
import styled from "styled-components";

const PicLeftStyles = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
place-items: center;
margin-bottom: 2rem;
img {
    justify-self: start;
    margin-left: 10%;
    width: 300px;
}
p {
    grid-column-start: 2;
    padding: 10%;
}
`

export default function PicLeft(section) {
    // sectionPicRight = section.sectionPicRight
    // console.log({sectionPicRight})
    return(
        <PicLeftStyles>
            <img src={section.picLeft.sourceUrl} alt={section.picLeft.altText} />
            <p>{section.paragraph}</p>
        </PicLeftStyles>
    )
}