input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 8; index++) {
        for (let index = 0; index < 6; index++) {
            music.play(music.tonePlayable(220, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(330, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
        }
        for (let index = 0; index < 6; index++) {
            music.play(music.tonePlayable(196, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(247, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(294, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
        }
        for (let index = 0; index < 6; index++) {
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(330, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(392, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
        }
        for (let index = 0; index < 6; index++) {
            music.play(music.tonePlayable(175, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(220, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
        }
    }
})
music.setTempo(120)
basic.forever(function () {
	
})
