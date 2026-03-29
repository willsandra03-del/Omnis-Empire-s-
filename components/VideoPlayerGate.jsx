import React, { useState } from 'react';

const VideoPlayerGate = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleVideoEnd = () => {
        setIsFormVisible(true);
    };

    return (
        <div>
            <video width='600' controls onEnded={handleVideoEnd}>
                <source src='path_to_video.mp4' type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            {isFormVisible && (
                <form>
                    <label>
                        Name:
                        <input type='text' name='name' />
                    </label>
                    <label>
                        Email:
                        <input type='email' name='email' />
                    </label>
                    <button type='submit'>Submit</button>
                </form>
            )}
        </div>
    );
};

export default VideoPlayerGate;
