import { useState } from 'react';

import * as Wheel from '../../utils/wheel';

import './style.css';

function Hello() {
    const [isFullview, setIsFullview] = useState(false);

    Wheel.add(() => {
        setIsFullview(window.scrollY > 400);
    });

    return (
        <div id="Hello" className={`${isFullview ? 'fullview' : ''}`}>
            <h2>Hello!</h2>
            <h3>
                <p>I am Cody,</p>
                <p>a Full Stack Engineer</p>
            </h3>
        </div>
    );
}

export default Hello;
