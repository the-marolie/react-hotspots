import React from 'react';
import { xxHash32 } from "js-xxhash";
import { Buffer } from 'buffer';
import './styles.scoped.scss';
import { AiFillInfoCircle } from "react-icons/ai";



const generateHash = (input, seed = 0) => {
    const hashNum = xxHash32(Buffer.from(input, "utf8"), seed);
    return hashNum.toString(16);
};


const ReactHotspots = (props) => {
    const iconSize = props.iconSize || '2vw';
    const iconColor = props.iconColor || '#fff';
    const hotspots = props.hotspots || [];

    if(!props.image) return (<div className="react-hotspots__error">Please provide an image</div>);
    if(!hotspots.length) return (<div className="react-hotspots__error">Please provide at least one hotspot</div>);

    return (
        <div className={`react-hotspots ${props.className || ''}`}>
            <div className="react-hotspots__image">
                {props.overlay && (<div className="react-hotspots__overlay"></div>)}
                <img src={props.image} alt={props.imageAlt} />
            </div>
            <div className="react-hotspots__hotspots">
                {props.hotspots.map((hotspot, index) => {
                    return (
                        <div key={index} className={`react-hotspots__hotspots__hotspot rh-${generateHash('rh-' + index)} ${hotspot.className || ''}`} style={{ left: hotspot.left, top: hotspot.top }}>
                            <div className="react-hotspots__hotspots__hotspot__trigger" style={{ fontSize: hotspot.iconSize ? hotspot.iconSize : iconSize, color: hotspot.iconColor ? hotspot.iconColor : iconColor }}>
                                {hotspot.triggerIcon ? hotspot.triggerIcon : <AiFillInfoCircle />}
                            </div>
                            {hotspot.content && (<div className="react-hotspots__hotspots__hotspot__content__container">
                                {hotspot.content}
                            </div>)}
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default ReactHotspots;