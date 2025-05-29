"use client"

import { useState } from "react"

type Props = {
    url: string
}

export default function LazyYouTubeEmbed({ url }: Props) {
    const [isPlaying, setIsPlaying] = useState(false)

    // Extract video ID from full URL
    const getVideoId = (youtubeUrl: string): string | null => {
        try {
            const urlObj = new URL(youtubeUrl)
            if (urlObj.hostname.includes("youtu.be")) {
                return urlObj.pathname.slice(1)
            }
            return urlObj.searchParams.get("v")
        } catch {
            return null
        }
    }

    const videoId = getVideoId(url)

    if (!videoId) return <p>Invalid YouTube URL</p>

    const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`

    return (
        <div className="relative mx-auto my-20 aspect-video w-full max-w-[600px] overflow-hidden rounded-xl px-4">
            {isPlaying ? (
                <iframe
                    className="absolute left-0 top-0 h-full w-full"
                    src={embedUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            ) : (
                <button
                    onClick={() => setIsPlaying(true)}
                    className="relative h-full w-full"
                >
                    <img
                        src={thumbnail}
                        alt="YouTube video thumbnail"
                        className="absolute left-0 top-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-16 w-16 rounded-full p-4 text-xl font-bold">
                            ▶️
                        </div>
                    </div>
                </button>
            )}
        </div>
    )
}
