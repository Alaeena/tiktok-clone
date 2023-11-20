export default function convert(value) {
    var number = Math.round(value);
    var minutes = Math.floor(number / 60);
    var seconds = number - minutes * 60;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return minutes + ':' + seconds;
}
