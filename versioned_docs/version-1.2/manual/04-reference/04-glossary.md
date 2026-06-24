---
title: "Glossary"
sidebar_label: "Glossary"
---

This is a glossary of general terms encountered when using Hydrogen,
synthesizers, drums, or samplers. The definitions here provide more
detail and explanation than the simplified ones in the text. For
example, the text of the manual would have you believe that an ADSR is
the only kind of envelope generator and could only ever control the
volume. While the simplified definitions help new users start using
Hydrogen quickly, they can lack the nuances presented here.

### ADSR

A type of envelope generator that allows you to control the
 [Attack](./04-glossary#def.attack),
 [Decay](./04-glossary#def.decay),
 [Sustain](./04-glossary#def.sustain), and
 [Release](./04-glossary#def.release) parameters.
 Generally, the
 parameters are proportional to
the [velocity](./04-glossary#def.velocity).

After you trigger
 a note, Hydrogen will start the [attack](./04-glossary#def.attack) phase in which the volume of the note is increase from 0 to its full [velocity](./04-glossary#def.velocity).
 After reaching full velocity, the volume will [decay](./04-glossary#def.decay) until it reaches the
 [sustain](./04-glossary#def.sustain) level. When the note is
 [released](./04-glossary#def.release), Hydrogen reduces the volume from the
 sustain level back down to 0.

In Hydrogen, the ADSR envelope generator only controls the volume
(attenuation).

Read more about this in the Wikipedia
Article [ADSR
Envelope](http://en.wikipedia.org/wiki/ADSR_envelope)

See Also [Envelope Generator](./04-glossary#def.envelopegenerator), [Attack](./04-glossary#def.attack), [Decay](./04-glossary#def.decay), [Sustain](./04-glossary#def.sustain), [Release](./04-glossary#def.release).

### Attack

This is the first phase of an [ADSR](./04-glossary#def.adsr) envelope. It represents the amount
 of *time* to increase the volume of a note from
0 (triggering) to full [velocity](./04-glossary#def.velocity).

See Also [ADSR](./04-glossary#def.adsr).

### Attenuation

In filters and mixers, this the amount that a signal is reduced
(volume).

See Also [Roll-off](./04-glossary#def.rolloff).

### Band-Pass Filter

A filter that preserves a certain band of frequencies, and
 attenuates (silences) all others. This is often done by combining a
high-pass and a low-pass filter.

See Also [Filter](./04-glossary#def.filter), [High-Pass Filter](./04-glossary#def.highpassfilter), [Low-Pass Filter](./04-glossary#def.lowpassfilter).

### Clipping

A phenomenon that happens to a signal when its amplitude is too large
 for whatever is receiving it. The peaks of the signal (which are
 normally smooth curves) get cut off straight at the max volume
(clipped). This distorts the sound and is usually undesirable.

An example of clipping is when you play music louder than your
speaker can handle. Parts of the music sound harsh and fuzzy.

### Component

A component is a part of Hydrogen's instrument model.
 Instrument consist of one or more components, and each component consists of one or more layers.

To make an example: A snare could have two components.
One component includes sounds from the top side of the snare drum, and the other component includes
the sounds from the bottom side of the snare drum (where the snare wires are fitted).
Each component can consist of several layers (snare drum hits with different velocities).
Now you can adjust the volume of the two components to build your ideal drum sound.
If you want more of the attack, you can put in more of the "top head" component.
If you want more of the snare wires, you put in more of the bottom component.
:::note
Components will be created for all instruments. So, even if you just want to have two of them in the snare you will automatically have two components in all other instruments. If you thus remove an empty component in one instrument, you will remove it for all other instruments - even if they are non-empty - too.

In addition, all [layers](./04-glossary#def.layer) belonging to the same component do share a common volume fader in the [Component Channel Strips](./02-using-hydrogen/10-mixer/01-component-strips) in the Mixer.
:::
### Cutoff Frequency

On high-pass and low-pass filters, this is the frequency that
 divides between those that pass, and those that are attenuated
 (silenced). In a high-pass resonance filter, or a low-pass resonance
filter, the cutoff is also the frequency zone that gets boosted.

For example, if you have a low-pass filter and you set the cutoff
frequency high (i.e. 20kHz)... the filter will not affect the sound.
All the audible frequencies will pass through undisturbed. As you lower
the cutoff frequency to something like 40 Hz (the low string on a bass
guitar), it sounds like someone is putting a blanket over the speaker.
The higher frequencies are being attenuated above 30 Hz.

See Also [Filter](./04-glossary#def.filter), [High-Pass Filter](./04-glossary#def.highpassfilter), [Low-Pass Filter](./04-glossary#def.lowpassfilter), [Resonance Filter](./04-glossary#def.resonancefilter).

### Decay

After the [attack](./04-glossary#def.attack) phase, this is the amount
 of *time* for the volume of a note to decrease from full
[velocity](./04-glossary#def.velocity) to the [sustain](./04-glossary#def.sustain) level.

See Also [ADSR](./04-glossary#def.adsr).

### DC-offset

DC offset, or DC coefficient is the mean value of the waveform.

DC offset is usually undesirable. For example, in audio processing, a
sound that has DC offset will not be at its loudest possible volume when
[normalized](./04-glossary#def.normalization) (because the offset consumes headroom), and this problem can
possibly extend to the mix as a whole, since a sound with DC offset and a sound
without DC offset will have DC offset when mixed. It may also cause other artifacts
depending on what is being done with the signal.

### Envelope Generator

A way to control (change) a parameter over time as a response to
triggering, holding, and releasing a note.

Did your eyes just glaze over? Let's try again:

Imagine that you're playing a note on the keyboard and you have
your other hand on a knob (volume, filter cutoff, etc.). As you play
the note, you twist the knob (often up, then down... or down, then up).
You do the same thing on each note. That's what an envelope generator
does. See also [ADSR](./04-glossary#def.adsr)

### Fader

A slider control used to adjust the attenuation (volume) in a
 mixer. Faders always have an "audio" taper, which means that the
 attenuation amount changes on an exponential scale.

### Filter

A device that changes a sound by attenuating specific frequencies.
 A tone knob is an example of a simple, low-pass filter.

See Also [Band-Pass Filter](./04-glossary#def.bandpassfilter), [High-Pass Filter](./04-glossary#def.highpassfilter), [Low-Pass Filter](./04-glossary#def.lowpassfilter), [Resonance Filter](./04-glossary#def.resonancefilter).

### Gain

In an amplifier, this adjust how much (or how little) a signal is
 amplified (volume). A higher gain value is a louder signal.

In Hydrogen there is a plethora of different ways to affect the volume
 of the resulting sound. Each single note rendered to audio will
 contain contributions of

- Its individual [Note Velocity](./02-using-hydrogen/06-pattern-editor/02-note-properties)
- Its individual [Note Pan](./02-using-hydrogen/06-pattern-editor/02-note-properties#chpt.pattern_editor.note_properties.pan)
- Its [Layer Gain](./02-using-hydrogen/08-instrument-editor-layers#chpt.instrument_editor.layers.controls.layer_gain)
- The [Sustain](./02-using-hydrogen/08-instrument-editor#chpt.instrument_editor.general.sustain) value of its instrument's [ADSR](./04-glossary#def.adsr)
- Its [Instrument Pan](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips)
- Its [Instrument Gain](./02-using-hydrogen/08-instrument-editor#chpt.instrument_editor.gain_and_mute_group)
- Its [Instrument Volume](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips)
- Its [Component Gain](./02-using-hydrogen/08-instrument-editor-layers#chpt.instrument_editor.layers.controls.component_gain)
- Its [Component Volume](./02-using-hydrogen/10-mixer/01-component-strips)
- Velocity contributions by the [Automation Path](./02-using-hydrogen/05-song-editor/06-automation-path) when played in [Song Mode](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.song_mode)
- Random contributions introduced by [Velocity Humanization](./02-using-hydrogen/10-mixer/03-master-fader)
- The overall [Song Volume](./02-using-hydrogen/10-mixer/03-master-fader)

Further modifications of the note's audio can be applied using the
 [Sample Editor](./02-using-hydrogen/09-sample-editor), the [Low-Pass Resonance
 Filter](./02-using-hydrogen/08-instrument-editor#chpt.instrument_editor.filter), and [FX Plugins](./02-using-hydrogen/10-mixer/02-fx-rack).

### High-Pass Filter

A filter that attenuates (silences) low frequencies, but allows
 high frequencies to pass through.

See Also [Filter](./04-glossary#def.filter), [Cutoff Frequency](./04-glossary#def.cutoff).

### Instrument

In Hydrogen, an instrument is a single noise-maker (like a bass
 drum kick, or a tom).

### Layer

In an instrument you can load several different samples (each one
 called a **layer**), and have a different
 sample play depending on the velocity of the note. Only one sample at a
 time will play.

Suppose you have a sample of a floor tom being struck softly. If
 you simply play the sample louder - it will
 *not* sound the same as a real tom that has been
 struck very hard. If you wish to mimic this in your instrument, you can
 load one sample for soft playing, and a different sample for loud
 playing.

See Also [Instrument](./04-glossary#def.instrument).

### Low-Pass Filter

A filter that attenuates (silences) high frequencies, but allows
 low frequencies to pass through.

See Also [Filter](./04-glossary#def.filter), [Cutoff Frequency](./04-glossary#def.cutoff).

### Mute

To make no noise. A setting on an instrument that prevents any
 audio output.

### Mute Group

A group of instruments ([samples](./04-glossary#def.sample)) out of which only a single one can be unmuted. If another instrument from the same group is triggered, the former one will be [muted](./04-glossary#def.mute) (stop playing) immediately.

This is typically used in hi-hats, where there's a different
 instrument (sample) for when the hi-hat is open or closed. With a real
 hi-hat, the sound of the open hi-hat will stop as soon as you close it.
 However, if you use two samples - the open sound will continue
 even after you have triggered the closed sound. By placing both
 instruments in the same mute group (group #1, for example)... triggering
 closed sound will immediately stop the open sound (and vice
 versa).

### Normalization

Normalization is the process of applying a uniform [gain](./04-glossary#def.gain) to an audio signal in order to make its largest amplitude peak match a predefined value (usually 0dBFS).

### Octave

A span of frequencies where the top-most frequency is exactly
 twice the frequency of the bottom frequency.

For example, the range 20 Hz to 40 Hz is an octave. So is 120 Hz
 to 240 Hz, and 575 Hz to 1150 Hz. While the frequency differences are
 very different (20 Hz, 120 Hz, and 575 Hz, respectively), to the human
 ear they *sound* like the same distance.

### Pan

Panning allows you to change the position of both a mono and stereo sample within the stereo sound field of the resulting audio output. In other words, it controls whether the sound of e.g. the snare is coming from the left or right speaker or somewhere in between. With careful pan adjustments of the different instruments you can make you drumkit sound more natural and simulate the feeling of listening to a real kit in close distance.

The effect of [note Pan](./02-using-hydrogen/06-pattern-editor/02-note-properties#chpt.pattern_editor.note_properties.pan) depends on the [instrument Pan](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips.pan)
 knob, which is set in the [Mixer](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips).
 Look to next figure to see how the **Resultant Pan**
 is determined (from version 1.1):

![Figure 47. Visualization of the Interaction of the Different Pan Parameters](/img/docs/matrioskaPanH2.png)

This multi-pan model resembles a "matryoshka" in some way: the *note Pan* value moves the
 *Resultant Pan* in a smaller pan range centered at
 *instrument Pan*, whose extension depends on *instrument Pan* value.
 Some examples:
 if *instrument Pan* is central, *note Pan* moves the signal in the
 whole stereo range (really from Left to Right);
 if *instrument Pan* is sided, *note Pan* moves the signal in a
 progressively smaller stereo range centered at *instrument Pan*;
 if *instrument Pan* is HARD-sided, *note Pan* doesn't have any effect.

The way the *Resultant Pan* will be translated into the volume of each stereo channel is determined by the [Pan Law](./02-using-hydrogen/10-mixer/03-master-fader#chpt.mixer.master_fader_strip.mixer_settings) in the Mixer settings.

### Release

The amount of
 *time* to reduce the volume of a note from the [sustain](./04-glossary#def.sustain) level
 to 0.

See Also [ADSR](./04-glossary#def.adsr).

### Resonance

When referring to a resonance filter, this is the parameter that
 determines how much of a boost (gain) to give the frequencies at the
 cutoff.

See Also [Resonance Filter](./04-glossary#def.resonancefilter).

### Resonance Filter

A filter that gives a large boost to a very narrow range of
 frequencies. Typically it will be part of a high-pass or a low-pass
 filter, where the boosted frequencies are centered on the cut-off
 frequency.

See Also [Filter](./04-glossary#def.filter), [Cutoff Frequency](./04-glossary#def.cutoff), [Low-Pass Filter](./04-glossary#def.lowpassfilter), [High-Pass Filter](./04-glossary#def.highpassfilter), [Resonance](./04-glossary#def.resonance).

### Roll-off

This is the amount that frequencies are attenuated (suppressed) as
 the frequency changes (typically measured in dB/octave).

For example, in a low-pass filter the frequencies below the cutoff
 frequency are not attenuated (they pass-through with the same volume).
 Same with the cutoff frequency. As you go above the cutoff frequency,
 the frequencies that are near the cutoff frequency are not attenuated
 very much at all. However, the frequencies that are much higher than
 the cutoff are attenuated (suppressed) a lot. This is usually
 approximated by a straight line (on a log scale) and measured in in dB
 of attenuation per octave of frequency.

See Also [Attenuation](./04-glossary#def.attenuation), [Filter](./04-glossary#def.filter).

### Sample

A short recording of a sound, typically between .1 and 3.0 seconds
 long. Each time a note is triggered within Hydrogen the corresponding sample will be played back (after applying all customization and effects).

Hydrogen supports the following audio formats:

- Waveform Audio File (*.wav)
- Free Lossless Audio Codec (*.flac) :::note Your system is required to have **libsndfile** of at least version **1.0.18**. :::
- Compressed Ogg/Opus (*.opus) :::note Your system is required to have **libsndfile** of at least version **1.0.29**. :::
- Compressed Ogg/Vorbis (*.ogg) :::note Your system is required to have **libsndfile** of at least version **1.0.18**. :::
- Compressed MPEG Layer 3 (*.mp3) :::note Your system is required to have **libsndfile** of at least version **1.1.0**. :::
- Apple AIFF (*.aiff, *.aif, *.aifc)
- Sun/NeXT AU (*.au)
- Core Audio Format (*.caf)
- Creative Voice File (*.voc)
- Sonic Foundrys' 64 bit RIFF/WAV (*.w64)

### Sustain

The *level* (how loud; volume) to hold the note between the [decay](./04-glossary#def.decay) and the [release](./04-glossary#def.release). It is given as percentage of the [velocity](./04-glossary#def.velocity) and does not depend on time.

See Also [ADSR](./04-glossary#def.adsr).

### Velocity

How hard you hit a note.

MIDI devices are required to send this information along with the
 note. Synthesizers use this information to adjust several parameters on
 the sample (typically the volume). In Hydrogen, it is only used to
 adjust how loud the sample is played back.
