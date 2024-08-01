import { useEffect, useRef } from 'react';
import './index.css'; // Make sure to create and import the corresponding CSS file

const MorphingText = ({
    texts = []
}) => {
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);

    const morphTime = 2;
    const cooldownTime = 2;

    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    useEffect(() => {
        const text1 = text1Ref.current;
        const text2 = text2Ref.current;

        text1.textContent = texts[textIndex % texts.length];
        text2.textContent = texts[(textIndex + 1) % texts.length];

        const doMorph = () => {
            morph -= cooldown;
            cooldown = 0;

            let fraction = morph / morphTime;

            if (fraction > 1) {
                cooldown = cooldownTime;
                fraction = 1;
            }

            setMorph(fraction);
        };

        const setMorph = (fraction) => {
            text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
            text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

            fraction = 1 - fraction;
            text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
            text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

            text1.textContent = texts[textIndex % texts.length];
            text2.textContent = texts[(textIndex + 1) % texts.length];
        };

        const doCooldown = () => {
            morph = 0;

            text2.style.filter = "";
            text2.style.opacity = "100%";

            text1.style.filter = "";
            text1.style.opacity = "0%";
        };

        const animate = () => {
            requestAnimationFrame(animate);

            let newTime = new Date();
            let shouldIncrementIndex = cooldown > 0;
            let dt = (newTime - time) / 1000;
            time = newTime;

            cooldown -= dt;

            if (cooldown <= 0) {
                if (shouldIncrementIndex) {
                    textIndex++;
                }

                doMorph();
            } else {
                doCooldown();
            }
        };

        animate();
    }, []);

    return (
        <div id="container">
            <span ref={text1Ref} id="text1" />
            <span ref={text2Ref} id="text2" />
            <svg id="filters">
                <defs>
                    <filter id="threshold">
                        <feColorMatrix in="SourceGraphic"
                            type="matrix"
                            values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140" />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

export default MorphingText;
