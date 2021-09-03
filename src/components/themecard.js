import React from "react"
import album from "../images/usethisgospel.jpg"

const themeCardStyle = {

    color: "blue",
    backgroundColor: "white",
    border: "1px solid #088413",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
    borderRadius: 20,
    padding: 20,
    gap: 20,
    alignItems: "center",
    display: "flex",
    flexDirection:"row",
    position: "relative",
    top: -2,
    marginLeft: 10,
    lineHeight: 1,
    // color: "#000000",
    // backgroundColor: "#ffffff",
    // border: "1px solid #088413",
    // borderRadius: 8,
    // padding: 20,
    // margin:20,
    // display: "inline-block",
    // flexDirection: "column",
}

const albumContainer = {
    borderRadius: 10,
    width: 200,
    height:200,
    gap: 10,
}

const themeDescription = {
    display: "flex",
    flexDirection: "column",
}

console.log(album)

function ThemeCard() {

    return(
        <div style={themeCardStyle}>
            <img style={albumContainer} src={album} alt="kanye west album cover"/>
            <div style={themeDescription}>
                <h2>PLAYLIST</h2>
                <h1>Nostalgia.mp3</h1>
            </div>
        </div>
    )
}

export default ThemeCard