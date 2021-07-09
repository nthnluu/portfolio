const timeGreeting = () => {
    const currDate = new Date();
    const hours = currDate.getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good morning"
    } else if (hours >= 12 && hours <= 17) {
        greeting = "Good afternoon"
    } else {
        greeting = "Good evening"
    }

    return greeting;
}

export default timeGreeting;