import React from "react"
import VideoHero from "./VideoHero"

export default function HeroBanner({ contentBlock }) {
  const heroContent = contentBlock
  // console.log({ heroContent })
  return (
    <>
      {heroContent.heroType === "video" && (
        <VideoHero heroContent={heroContent} />
      )}
      {heroContent.heroType === "color" && (
        <VideoHero heroContent={heroContent} />
      )}
      {heroContent.heroType === "image" && (
        <VideoHero heroContent={heroContent} />
      )}
      
    </>
  )
}