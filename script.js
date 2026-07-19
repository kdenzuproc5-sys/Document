 document.addEventListener("DOMContentLoaded", () => {
    // DOM Element Node Selectors
    const interfaceContainer = document.getElementById("interface-container");
    const progressFill = document.getElementById("progress-fill");
    const statusText = document.getElementById("status-text");
    const percentageText = document.getElementById("percentage-text");
    const consoleLog = document.getElementById("console-log");
    const jumpscareContainer = document.getElementById("jumpscare-container");
    const scareImage = document.getElementById("scare-image");

    // Diagnostic Sequence Tracking Stages
    const stages = [
        { progress: 0, msg: "Loading core modules..." },
        { progress: 18, msg: "Checking network..." },
        { progress: 35, msg: "Verifying security..." },
        { progress: 58, msg: "Analyzing device..." },
        { progress: 77, msg: "Detecting anomalies..." },
        { progress: 92, msg: "Finalizing scan..." }
    ];

    let currentProgress = 0;
    let currentStageIndex = 0;

    // Safety fallback kung sakaling hindi mahanap ang imahe
    scareImage.onerror = () => {
        console.warn("Console Warning: Jumpscare image at path '/Dc3c0e76453ee3ef8a5b97cf229764da.png' failed to load or is missing.");
    };

    // Automated execution loop starts instantly on load
    runInitializationSequence();

    function runInitializationSequence() {
        if (currentProgress < 99) {
            if (currentStageIndex < stages.length - 1 && currentProgress >= stages[currentStageIndex + 1].progress) {
                currentStageIndex++;
                statusText.innerText = stages[currentStageIndex].msg;
                appendTerminalLine(`[OK] ${stages[currentStageIndex].msg}`);
            }

            percentageText.innerText = `${currentProgress}%`;
            progressFill.style.width = `${currentProgress}%`;

            currentProgress += Math.floor(Math.random() * 3) + 1;
            if (currentProgress > 99) currentProgress = 99;

            let delayTime = Math.floor(Math.random() * 60) + 40;
            if (currentProgress === 40 || currentProgress === 80) delayTime = 400; 

            setTimeout(runInitializationSequence, delayTime);
        } else {
            // Pag-abot ng 99%, hihinto nang kalmado pero may babala sa teksto
            triggerSuspensePhase();
        }
    }

    function appendTerminalLine(text) {
        const line = document.createElement("div");
        line.innerText = `> ${text}`;
        consoleLog.appendChild(line);
        consoleLog.scrollTop = consoleLog.scrollHeight;
    }

    function triggerSuspensePhase() {
        progressFill.style.width = "99%";
        percentageText.innerText = "99%";
        statusText.innerText = "Finalizing scan...";

        // Pagbabago ng text nang walang alog o vibration sa screen
        setTimeout(() => {
            interfaceContainer.classList.add("warning-state");
            statusText.innerText = "WARNING";
            statusText.style.color = "#ff003c";
            appendTerminalLine("ALERT // Unidentified memory configuration detected.");
        }, 1500);

        setTimeout(() => {
            statusText.innerText = "Unknown Entity Detected";
            appendTerminalLine("CRITICAL // Security perimeter breach encountered.");
        }, 3000);

        // Biglang stop at transition sa image
        setTimeout(() => {
            executeFinalTransition();
        }, 4800); 
    }

    function executeFinalTransition() {
        interfaceContainer.classList.remove("active");
        jumpscareContainer.classList.add("flash-black");

        // Agad na pagpapakita ng imahe nang walang aberya
        setTimeout(() => {
            scareImage.classList.add("reveal");
        }, 100);
    }
});
