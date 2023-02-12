import React from 'react';
import { xxHash32 } from "js-xxhash";
import {Buffer} from 'buffer';
import './styles.scoped.scss';
import { AiFillInfoCircle } from "react-icons/ai";



const generateHash = (input, seed = 0) => {
    const hashNum = xxHash32(Buffer.from(input, "utf8"), seed);
    return hashNum.toString(16);
  };


const ReactHotspots = (props) => {
    


    return (
        <div className="react-hotspots">
            <div className="react-hotspots__image">
                {props.overlay && (<div className="react-hotspots__overlay"></div>)}
                <img src={props.image} alt={props.imageAlt} />
            </div>
            <div className="react-hotspots__hotspots">
                {props.hotspots.map((hotspot, index) => {
                    return (
                        <div key={index} className={`react-hotspots__hotspots__hotspot rh-${generateHash('rh-' + index)}`} style={{ left: hotspot.left, top: hotspot.top }}>
                        <div className="react-hotspots__hotspots__hotspot__trigger">
                            {hotspot.triggerIcon ? hotspot.triggerIcon : <AiFillInfoCircle />}
                        </div>
                        <div className="react-hotspots__hotspots__hotspot__content__container">
                            {hotspot.content}
                        </div>
                    </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default ReactHotspots;