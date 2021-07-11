import React from 'react';
import ReactPlayer from 'react-player'
import {Image,Col,Row} from 'react-bootstrap'

const Media = (props) => {
    
    return (
        <div>
            <Row>
                <Col></Col>
                <Col xs={8} md={8}>
                    {props.media_type === "image" ? 
                    <Image src={props.mediaURL} width={"100%"} rounded alt=''/> : 
                    <ReactPlayer url={props.mediaURL} />}
                </Col>
                <Col></Col>
            </Row>
        </div>
    );
};

export default Media;