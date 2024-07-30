import React from 'react'
import '../../src/Loader.css'
const Loader = () => {
    return (
        <>
            <div className="loading">
                <div className="pl">
                    <div className="pl__outer-ring"></div>
                    <div className="pl__inner-ring"></div>
                    <div className="pl__track-cover"></div>
                    <div className="pl__ball">
                        <div className="pl__ball-texture"></div>
                        <div className="pl__ball-outer-shadow"></div>
                        <div className="pl__ball-inner-shadow"></div>
                        <div className="pl__ball-side-shadows"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loader