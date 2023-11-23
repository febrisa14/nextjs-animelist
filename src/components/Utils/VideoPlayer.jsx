"use client"

import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true)

    const option = {
        "width": 300,
        "height": 250
    }

    const handleCloseButton = () => {
        setIsOpen((prevState) => !prevState);
    }

    return (
        <div className="fixed bottom-2 right-2">
            {isOpen ? (
                <>
                    <button
                        onClick={handleCloseButton}
                        className="text-color-primary float-right bg-color-secondary px-3 mb-1">
                        X
                    </button>
                    <YouTube
                        videoId={youtubeId}
                        onReady={(e) => e.target.pauseVideo()}
                        opts={option}
                        onError={() => alert("Video is broken, please try again.")}
                    />
                </>
            ) : (
                <>
                    <button
                        onClick={handleCloseButton}
                        className="text-color-primary float-right bg-color-secondary px-3 mb-1">
                        Open Trailer
                    </button>
                </>
            )}
        </div>
    )
}

export default VideoPlayer