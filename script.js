let speed = 0;
let runner = document.getElementById('runner');
let treadmillWidth = document.querySelector('.treadmill').offsetWidth;
let runnerWidth = runner.offsetWidth;
let position = 0;
let interval;

function startRunning() {
    const inputSpeed = parseFloat(document.getElementById('speedInput').value);
    const unit = document.getElementById('speedUnit').value;

    if (isNaN(inputSpeed) || inputSpeed <= 0) {
        alert("Please enter a valid speed.");
        return;
    }

    // Convert speed to km/hr for consistent movement
    switch (unit) {
        case 'km/hr':
            speed = inputSpeed;
            break;
        case 'm/s':
            speed = inputSpeed * 3.6; // Convert m/s to km/hr
            break;
        case 'km/s':
            speed = inputSpeed * 3600; // Convert km/s to km/hr
            break;
        case 'm/hr':
            speed = inputSpeed / 1000; // Convert m/hr to km/hr
            break;
        default:
            speed = inputSpeed;
            break;
    }
    
    if (interval) clearInterval(interval); // Clear previous interval
    interval = setInterval(() => {
        position += speed / 20; // Adjust the speed for smoother movement
        if (position > treadmillWidth) {
            position = -runnerWidth; // Reset position to start
        }
        runner.style.transform = `translateX(${position}px)`;
    }, 50);
}

function stopRunning() {
    clearInterval(interval);
    speed = 0;
}
