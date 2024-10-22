import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { APP_ID, SERVER_SECRET } from './constant';  // Import APP_ID and SERVER_SECRET

const VideoPage = () => {
    const { id } = useParams();
    const roomid = id;

    let myMeeting = async (element) => {
        // generate Kit Token
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(APP_ID, SERVER_SECRET, roomid, Date.now().toString(), 'CodeWithZavian');

        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // Start the call
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy link',
                    url: `${window.location.protocol}//${window.location.host}${window.location.pathname}?roomID=${roomid}`,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
        });
    };

    const meetingContainerRef = useRef(null);

    useEffect(() => {
        if (meetingContainerRef.current) {
            myMeeting(meetingContainerRef.current);
        }
    }, [roomid]);

    return (
        <div ref={meetingContainerRef} style={{ width: '100vw', height: '100vh' }}>
        </div>
    );
};

export default VideoPage;
