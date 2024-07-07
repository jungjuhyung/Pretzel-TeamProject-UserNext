import '@/styles/commons/reset.css'
import '@/styles/commons/font.css'
import '../../styles/commons/commons.css'

import { Subtitle, Video } from "@/styles/park/moviePlayPageCSS";

const MoviePlayPage = () => {
    return (
        <>
            <Video
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                controls
                autoPlay>
                <Subtitle kind="captions" src="자막경로" srclang="kor" label="한국어" default></Subtitle>
                <Subtitle kind="captions" src="자막경로" srclang="en" label="english"></Subtitle>
            </Video>
        </>
    )
}

export default MoviePlayPage;