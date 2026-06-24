---
title: "Instrument Editor"
sidebar_label: "Instrument Editor"
---

![Figure 11.1. The Instrument editor General view](/img/docs/generated_en/Instrument_General.png)

The Instrument Editor is located in the Instrument Rack in the lower right corner of Hydrogen, which can be shown or hidden via the [View](./02-using-hydrogen/03-main-menu/04-view) option in the Main Menu or via the [corresponding button](./02-using-hydrogen/04-main-toolbar/05-gui-state) in the Main Toolbar. The Instrument Rack does either show the [Instrument Editor](./02-using-hydrogen/08-instrument-editor) or the Sound Library depending on what is chosen in the [View](./02-using-hydrogen/03-main-menu/04-view) option in the Main Menu or the corresponding buttons at the top of the Instrument Rack.

When clicking the `General` button in the Instrument Editor you can adjust several
 parameters that apply to the particular instrument (and all its [layers](./04-glossary#def.layer)) selected in the [Sidebar](./02-using-hydrogen/06-pattern-editor/00-pattern-editor#chpt.pattern_editor.sidebar) of the Pattern Editor.
:::note
It's important that you understand [Drumkit Concepts](./02-using-hydrogen/01-overview/01-drumkit-concept) and a couple of basic concepts of sound synthesis described in the [Glossary](./04-glossary) in order to continue
 on. To ease reading, several of the latter concepts are linked in the text.
:::
When a note associated with this instrument is triggered, its volume is run through an
 [ADSR Envelope](./04-glossary#def.adsr). Its particular settings can be adjusted using the envelope parameters located right below the instrument name.

- **[Attack](./04-glossary#def.attack)**: the amount of *time* that the volume of the [sample](./04-glossary#def.sample) goes from `0` to the full [velocity](./04-glossary#def.velocity) of the note. If the value is `0`, the sample will play back immediately at full velocity.
- **[Decay](./04-glossary#def.decay)**: the amount of *time* for the volume of the [sample](./04-glossary#def.sample) to go from full [velocity](./04-glossary#def.velocity) down to the sustain volume. If the value is `0`, the sample will immediately skip from the full velocity to the [sustain](./04-glossary#def.sustain) volume.
- **[Sustain](./04-glossary#def.sustain)**: the *volume* to play the note after the [decay](./04-glossary#def.decay) phase is over and until the note is released. If set to `0`, the note will be silent. If set to `1.0`, the note will play at full [velocity](./04-glossary#def.velocity).
- **[Release](./04-glossary#def.release)**: the *time* to fade out the note from the [sustain volume](./04-glossary#def.sustain) back down to `0` (silent). If set to `0`, the note will fade out in the minimum amount of time (about 5 ms). If set to `1`, it will fade out for the maximum time available. Note, however, that this only affects notes for which you set a note length smaller than the underlying sample length (see [Section 9.2](./02-using-hydrogen/06-pattern-editor/01-drum-pattern)). All other notes are played back till the end of the sample without reaching the release phase.
:::note
By default this option will be selected as this is the way older versions of Hydrogen used to work.
:::
When not activated, the note velocity will only be used to [select](./02-using-hydrogen/08-instrument-editor-layers#chpt.instrument_editor.layers.sample_selection) the sample to be played,
 but the sample gain itself will not be changed.
 This is useful for set of samples that already have their gain "hard-coded".

The filter used in here is a [low-pass](./04-glossary#def.lowpassfilter) [resonance filter](./04-glossary#def.resonancefilter). If you don't wish to
 use is, click the `BYP` button (bypass) so that it's
 red. If it's not red, then the filter is active. The [cutoff](./04-glossary#def.cutoff)
 parameter adjusts the cutoff frequency for the filter. The [resonance](./04-glossary#def.resonance)
 parameter adjusts how much to boost to provide at the cutoff frequency. If the
 resonance is set to `0`, then the filter is just a simple low-pass
 filter.
:::note
The cutoff frequency of the filter varies with the sample rate
 of your audio card. The range of the knob `0` to `1.0`) is optimized
 for a 48,000 kHz sample rate.
:::
The first two knobs control the pitch shift offset.
 You can use it to change the tuning of the instrument.
 **Pitch** is the *Coarse* control and has quantized steps of half-tones from `-24` to `+24`.
 **Fine** is the *Fine* control and has quantized steps of cents of half-tones from `-0.50` to `+0.50`.

The **Random** parameter allows you to randomly vary the pitch
 of the [sample](./04-glossary#def.sample) every time it is triggered. The value is set between `0`
 and `1.0`.
:::note
The pitch change is fairly small, almost always between ±1 half-steps
 ⨉ value. Using this sparingly can help your sequences to sound
 more like a real drummer.
:::
Hydrogen is capable of generating MIDI messages
 that you can use to trigger any external MIDI
 device or application. To do this, you need to configure the
 MIDI output **Channel** and **Note** for an instrument.
:::note
In order to enable MIDI output, the **channel** of an instrument must be set to a
 value other than `off`, like `10`,
 and the instrument must contain at least **one
 sample**. Having just an empty one is fine.
:::
From now on every time a note is played for that instrument (in the
 Hydrogen sequencer) a MIDI message will be sent to
 your external app/device and trigger a sound. This way you can use
 Hydrogen as a pure sequencer for other apps, or combine the internal
 Hydrogen sampler with multiple external apps/devices.
:::note
By enabling **Use output note as input** in the [MIDI system](./02-using-hydrogen/02-preferences/02-midi-system) tab of the Preferences dialog the number specified in the **Note** field will also be used to associate the current instrument with the corresponding incoming MIDI messages.
:::
The hi-hat is a particular instrument of the drumkit as its sound can be changed by pressing the foot pedal.

For e-drum owners, the hi-hat pressure group enables to group different hi-hat instruments
 together, for example closed, half closed, fully open.

**Pressure Group**: you can assign more instruments to the same group.
 You can create many groups. For example one group for the different opening levels of a hi-hat when playing
 the top of it, another group when playing the edge.
 Another example: timpanis - create a group for each timpani and the pressure will change the note.

**Range**: set the minimum and maximum pressure for each instrument.
 Each instrument of a given group should seat in its own separate pressure range.
 The range will decide at what pressure level the instrument will be played.
 For example, if your closed hi-hat has range from `0` to `20`,
 when the hi-hat pedal is pressed between `0` and `20` the closed hi-hat is played.
