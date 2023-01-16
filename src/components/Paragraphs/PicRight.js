import React from "react";
import styled from "styled-components";

const PicRightStyles = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
place-items: center;
margin-bottom: 2rem;
img {
    justify-self: end;
    margin-right: 10%;
    width: 300px;
    grid-column-start: 2;
}
p {
    padding: 10%;
    grid-column-start: 1;
}
`

export default function PicRight(section) {
    console.log({section})
    // sectionPicRight = section.sectionPicRight
    // console.log({sectionPicRight})
    return(
        <PicRightStyles>
            <p>{section.paragraph}</p>
            <img src={section.picRight.sourceUrl} alt={section.picRight.altText} />
        </PicRightStyles>
    )
}