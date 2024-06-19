body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-family: 'Red Hat Text', sans-serif;
    background-color: white;
    position: relative;
}

.hidden {
    display: none;
}

.intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    text-align: center;
    animation: fadeIn 2s ease-in-out;
    padding: 20px;
    box-sizing: border-box;
}

.intro-text {
    font-size: 24px;
    margin-bottom: 20px;
    letter-spacing: 2px;
    position: relative;
}

.word {
    opacity: 0;
    display: inline-block;
    animation: wordFadeIn 1s forwards;
    margin-right: 5px;
}

@keyframes wordFadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes driftUp {
    from { transform: translateY(0); }
    to { transform: translateY(-10px); }
}

.pill-button {
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    border: 2px solid black;
    border-radius: 50px;
    background-color: white;
    color: black;
    transition: transform 0.2s, opacity 0.5s;
    opacity: 0;
    position: relative;
    top: 20px; /* Adjusted to prevent shifting */
}

.pill-button.visible {
    opacity: 1;
    animation: fadeIn 1s ease-in-out;
}

.pill-button:hover {
    transform: scale(1.1);
}

.bubble {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
    cursor: pointer;
    transition: transform 0.2s, opacity 2s;
    z-index: 3;
    animation: morph 15s infinite ease-in-out, sizeChange 20s infinite ease-in-out;
    opacity: 0;
}

.red { background-color: red; }
.black { background-color: black; }
.green { background-color: green; }
.blue { background-color: blue; }
.pink { background-color: pink; }
.tan { background-color: tan; }
.orange { background-color: orange; }
.purple { background-color: purple; }

.bubble:hover {
    transform: scale(1.1);
}

.splash-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
    z-index: 2;
}

.splash {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    background-color: red;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    pointer-events: none;
    animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
}

.text-block {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: inherit;
    color: white;
    display: none;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
    z-index: 4;
    animation: fadeIn 2s forwards;
    overflow-y: auto;
}

.text-block p {
    max-width: 600px;
    line-height: 1.5;
}

.text-block .close {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 30px;
    cursor: pointer;
}

@keyframes splashAnimation {
    0% {
        transform: translate(-50%, -50%) scale(0);
    }
    80% {
        transform: translate(-50%, -50%) scale(1);
        width: 2000px;
        height: 2000px;
    }
    100% {
        transform: translate(-50%, -50%) scale(1.1);
        width: 2100px;
        height: 2100px;
    }
}

@keyframes reverseSplashAnimation {
    0% {
        transform: translate(-50%, -50%) scale(1.1);
        width: 2100px;
        height: 2100px;
    }
    40% {
        transform: translate(-50%, -50%) scale(1);
    }
    100% {
        transform: translate(-50%, -50%) scale(0);
    }
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
}

@keyframes morph {
    0%, 100% {
        border-radius: 50%;
    }
    20% {
        border-radius: 42% 58% 58% 42% / 42% 42% 58% 58%;
    }
    40% {
        border-radius: 60% 40% 40% 60% / 60% 60% 40% 40%;
    }
    60% {
        border-radius: 58% 42% 42% 58% / 58% 58% 42% 42%;
    }
    80% {
        border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%;
    }
}

@keyframes sizeChange {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
}

@media (max-width: 768px) {
    .intro-text {
        font-size: 18px;
    }

    .pill-button {
        padding: 8px 16px;
        font-size: 16px;
    }

    .bubble {
        width: 80px;
        height: 80px;
        font-size: 16px;
    }

    .text-block {
        padding: 10px;
        font-size: 14px;
    }

    .text-block p {
        max-width: 100%;
        word-break: break-word;
    }

    .text-block .close {
        top: 10px;
        right: 10px;
        font-size: 24px;
    }
}
