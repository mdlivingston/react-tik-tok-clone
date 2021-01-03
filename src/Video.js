import { React, useRef, useState } from 'react';
import './Video.css';

function Video()
{
    const [play, setPlay] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () =>
    {
        if (play)
        {
            videoRef.current.pause();
            setPlay(false)
        }
        else
        {
            videoRef.current.play()
            setPlay(true);
        }

    }
    return (
        <div className="video">
            <video
                className="video_player"
                loop
                onClick={onVideoPress}
                ref={videoRef}
                src="https://v19-us.tiktokcdn.com/bc93f010c1c5f545fee709480fa5d393/5ff28522/video/tos/useast2a/tos-useast2a-pve-0068/f9d4e34a1472416bbb6fc12c5471deb9/?a=1233&br=3202&bt=1601&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202101032101140101901851525CD4DE73&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajtvOG5scXg2eTMzaDczM0ApMzc8NjZmOTs2Nzc1ZjplaGdoXmVvc2ZjcDVfLS0wMTZzc2ExYDVeXjZhX2JhYzQ2NS06Yw%3D%3D&vl=&vr="></video>
        </div>
    );
}

export default Video;