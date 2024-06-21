import * as React from 'react';
import './kitty-style.css'

function Kittycat() {
    return(
        // ถ้าจะใช้ก็ก็อปเอานะ ถ้า import แมวไม่ขึ้น
            <div className="backcontainer">
                <div className="kitty">
                    <div className="face">
                        <div className="ear"></div>
                        <div className="eye"></div>
                        <div className="mouth">
                            <div className="nose"></div>
                            <div className="whisker-1"></div>
                            <div className="whisker-2"></div>
                        </div>
                        <div className="body">
                            <div className="hand">
                                <div className="hand-l"></div>
                                <div className="hand-r"></div>
                            </div>
                        </div>
                        <div className="tail"></div>
                    </div>
                    <div className="laptop">
                        <div className="logo"></div>
                    </div>
                </div>
            </div>
    );
}

export default Kittycat;