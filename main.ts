radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        bitbot.move(BBMotor.Left, BBDirection.Reverse, 30)
        bitbot.move(BBMotor.Right, BBDirection.Forward, 30)
        bitbot.ledRotate(true, BBArms.Left)
        bitbot.ledRotate(false, BBArms.Left)
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
    }
    if (receivedNumber == 1) {
        bitbot.move(BBMotor.Right, BBDirection.Reverse, 30)
        bitbot.move(BBMotor.Left, BBDirection.Forward, 30)
        bitbot.ledRotate(true, BBArms.Right)
        bitbot.ledRotate(false, BBArms.Left)
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
    }
    if (receivedNumber == 2) {
        bitbot.move(BBMotor.Both, BBDirection.Forward, 100)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    }
    if (receivedNumber == 3) {
        bitbot.move(BBMotor.Both, BBDirection.Reverse, 100)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
    }
    if (receivedNumber == 4) {
        bitbot.stop(BBStopMode.Coast)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    if (receivedNumber == 5) {
        music.setTempo(165)
        bitbot.setLedColor(0x0000FF)
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(880, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(880, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        bitbot.ledRainbow(true, BBArms.Both)
    }
})
radio.setGroup(12)
bitbot.ledRainbow(true, BBArms.Both)
basic.showLeds(`
    # . . . #
    . . . . .
    # # # # #
    . . # . #
    . . . # .
    `)
basic.forever(function () {
    bitbot.ledRotate(false, BBArms.Both)
})
basic.forever(function () {
	
})
