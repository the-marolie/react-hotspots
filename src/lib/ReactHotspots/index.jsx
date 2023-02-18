import React, { useState } from 'react';
import { xxHash32 } from "js-xxhash";
import { Buffer } from 'buffer';
import './styles.scoped.scss';
import { AiFillInfoCircle, AiFillCloseCircle } from "react-icons/ai";



const generateHash = (input, seed = 0) => {
    const hashNum = xxHash32(Buffer.from(input, "utf8"), seed);
    return hashNum.toString(16);
};


const ReactHotspots = (props) => {
    const [modalContent, setModalContent] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const iconSize = props.iconSize || '2vw';
    const iconColor = props.iconColor || '#fff';
    const hotspots = props.hotspots || [];

    const handleModalMode = (i) => {
        let data = hotspots[i].content;
        setShowModal(true);
        setModalContent(data);
    }

    const hideModal = () => {
        setShowModal(false);
        setModalContent(null);
    }

    if (!props.image) return (<div className="react-hotspots__error">Please provide an image</div>);
    if (!hotspots.length) return (<div className="react-hotspots__error">Please provide at least one hotspot</div>);

    return (
        <div className={`react-hotspots ${props.className || ''}`}>
            <div className="react-hotspots__image">
                {props.overlay && (<div className="react-hotspots__overlay"></div>)}
                <img src={props.image} alt={props.imageAlt} />
            </div>
            <div className="react-hotspots__hotspots">
                {props.hotspots.map((hotspot, index) => {

                    if (hotspot.modal) {
                        return (
                            <div key={index} className={`react-hotspots__hotspots__hotspot rh-${generateHash('rh-' + index)} ${hotspot.className || ''}`} style={{ left: hotspot.left, top: hotspot.top }}>
                                <div className="react-hotspots__hotspots__hotspot__trigger" style={{ fontSize: hotspot.iconSize ? hotspot.iconSize : iconSize, color: hotspot.iconColor ? hotspot.iconColor : iconColor }} onClick={() => handleModalMode(index)}>
                                    {hotspot.triggerIcon ? hotspot.triggerIcon : <AiFillInfoCircle />}
                                </div>
                            </div>
                        )
                    }
                    else {
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

                }
                )}
            </div>
            <div className={`react-hotspots__modal__container ${showModal ? 'active' : ''}`}>
                <div className="react-hotspots__modal__content">
                    {modalContent}
                </div>
                <button class="modal__close" onClick={hideModal}>
                    <AiFillCloseCircle />
                </button>
            </div>
        </div>
    )
}

export default ReactHotspots;