document.addEventListener("keydown", function (event) {

    let keys = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyW', 'KeyE', 'KeyT', 'KeyY', 'KeyU'];

    if (keys.includes(event.code)) {
        let audio = new Audio(`keys/${event.key.toUpperCase()}.mp3`);
        audio.play()
        console.log(`The '${event.key.toUpperCase()}' key is pressed.`);
    }
});