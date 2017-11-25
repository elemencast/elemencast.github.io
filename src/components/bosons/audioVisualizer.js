/* *
 * audio visualizer with html5 audio element
 *
 * v0.1.0
 *
 * licenced under the MIT license
 *
 * see my related repos:
 * - HTML5_Audio_Visualizer https://github.com/wayou/HTML5_Audio_Visualizer
 * - 3D_Audio_Spectrum_VIsualizer https://github.com/wayou/3D_Audio_Spectrum_VIsualizer
 * - selected https://github.com/wayou/selected
 * - MeowmeowPlayer https://github.com/wayou/MeowmeowPlayer
 *
 * reference: http://www.patrick-wied.at/blog/how-to-create-audio-visualizations-with-javascript-html
 */

window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext

export const audioVisualizer = (audio, canvas) => {
    var ctx = new AudioContext()
    var analyser = ctx.createAnalyser()
    var audioSrc = ctx.createMediaElementSource(audio)
    // we have to connect the MediaElementSource with the analyser
    audioSrc.connect(analyser)
    analyser.connect(ctx.destination)
    // we could configure the analyser: e.g. analyser.fftSize (for further infos read the spec)
    // analyser.fftSize = 64
    // frequencyBinCount tells you how many values you'll receive from the analyser
    // var frequencyData = new Uint8Array(analyser.frequencyBinCount)

    // we're ready to receive some data!
    const cwidth = canvas.width
    const cheight = canvas.height - 2
    const meterWidth = 3 // width of the meters in the spectrum
    // const gap = 2 // gap between meters
    const capHeight = 10
    const capStyle = '#000'
    const meterNum = 10000 / 90 // count of the meters
    const capYPositionArray = [] // // store the vertical position of hte caps for the preivous frame
    ctx = canvas.getContext('2d')
    const gradient = ctx.createLinearGradient(0, 0, 0, 300)
    gradient.addColorStop(1, '#000')
    gradient.addColorStop(0.5, '#000')
    gradient.addColorStop(0, '#000')
    // loop
    function renderFrame () {
        var array = new Uint8Array(analyser.frequencyBinCount)
        analyser.getByteFrequencyData(array)
        var step = Math.round(array.length / meterNum) // sample limited data from the total array
        ctx.clearRect(0, 0, cwidth, cheight)
        for (var i = 0; i < meterNum; i++) {
            var value = array[i * step]
            if (capYPositionArray.length < Math.round(meterNum)) {
                capYPositionArray.push(value)
            }
            ctx.fillStyle = capStyle
            // draw the cap, with transition effect
            if (value < capYPositionArray[i]) {
                ctx.fillRect(i * 12, cheight - (--capYPositionArray[i]), meterWidth, capHeight)
            } else {
                ctx.fillRect(i * 12, cheight - value, meterWidth, capHeight)
                capYPositionArray[i] = value
            }
            ctx.fillStyle = gradient // set the filllStyle to gradient for a better look
            ctx.fillRect(i * 12, cheight - value + capHeight, meterWidth, cheight) // the meter
        }
        requestAnimationFrame(renderFrame)
    }
    renderFrame()
}
