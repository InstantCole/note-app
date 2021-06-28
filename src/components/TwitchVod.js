import React, { useEffect } from 'react'

function TwitchVod(props) {
    let twitchPlayer

    useEffect(() => {
        let twitchEmbed
        let channelName = props.channel

        const twitchEmbedAPI = document.createElement("script")
        twitchEmbedAPI.src = "https://embed.twitch.tv/embed/v1.js"
        twitchEmbedAPI.async = true
        twitchEmbedAPI.addEventListener('load', () => {
            twitchEmbed = new window.Twitch.Embed('twitch-embed', {
                width: 400,
                height: 250,
                channel: channelName,
                layout: "video",
                autoplay: false
            })
            twitchEmbed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
                setTwitchVideoPlayer(twitchEmbed.getPlayer())
                
            })

        })
        
        document.head.appendChild(twitchEmbedAPI)


    })

    function setTwitchVideoPlayer(player) {
        twitchPlayer = player;
        console.log(`the twitch player is ${player}`)

    }

    function handlePlayButton(){
        console.log("play the video!")
        twitchPlayer.play()
    }

    return (
        <div id="twitch-embed" style={{ backgroundColor: "#334455" }}>
            <button onClick={handlePlayButton}>sdf</button>

        </div>
    )
}

export default TwitchVod