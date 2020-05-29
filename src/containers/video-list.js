import React from 'react'
import VideoListItem from '../components/video-list-item'

const VideoList = (props) => {
    const {movieList} = props
    return (
        <div>
            <ul>
                {
                    movieList.map(movie =>{
                        return <VideoListItem key={movie.id} movie={movie} callback={receveCallBack}/>
                    })
                }
            </ul>
        </div>
    );
    function receveCallBack(movie) {
        props.callback()
    }
}

export default VideoList;