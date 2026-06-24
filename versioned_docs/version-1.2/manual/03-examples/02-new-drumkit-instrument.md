---
title: "Creating a New Instrument"
sidebar_label: "Creating a New Instrument"
---

For each instrument in a drum kit, you can load several [samples](./04-glossary#def.sample)
 and set different synthesizer parameters. This section will step you
 through how to create a new instrument and load the samples. For details about the individual parameters please refer to [Section 11.1](./02-using-hydrogen/08-instrument-editor#chpt.instrument_editor.general).

To begin creating an instrument, select
 Instruments → Add instrument. This will give you a blank
 instrument to start from.

Now, you need two samples (see [Sample](./04-glossary#def.sample) for a list of supported formats).
 Hydrogen provides several in the `data/drumkits` folder in the Hydrogen data
 directory (usually `$HOME/.hydrogen/data/`).

In the Instrument Editor, click on [Layers](./02-using-hydrogen/08-instrument-editor-layers).
 You can layer several samples into the instrument. Which one is played
 depends on the [velocity](./04-glossary#def.velocity) of the incoming note. Click
 and point the *Audio File Browser* to
 your sample.
:::note
The *Audio File Browser* will
 allow you to preview the sample before you load it. It will also allow
 you to load more than one sample at a time. But for now, only load
 one.
:::
After you load the sample, you'll see that there is now a
 1 at the top, and the topmost rectangle has turned
 light blue. To load a second sample, click the slot just below it, and
 then click

 to bring in another sample.

After bringing in both samples, you'll probably notice that only
 the *first* sample is being played whenever you
 trigger the instrument. This is because you need to set the
 *velocity* ranges for the layers. Move your mouse to
 the sides of the light blue rectangles and you see that you get a
 *left-right drag* cursor. Now *drag* the sample to the left or right (like
 a curtain). You will now see Layer 2 appear.

The velocity setting for the layer is 0-velocity on the left, and
 full velocity on the right. Set up Layer 1 to sound for soft notes, and
 Layer 2 to sound for hard notes, i.e. Layer 1 on the left and Layer 2
 on the right (see [Sample Selection](./02-using-hydrogen/08-instrument-editor-layers#chpt.instrument_editor.layers.sample_selection) for further info).

Now, in the [Drumkit Editor](./02-using-hydrogen/06-pattern-editor/01-drum-pattern), set up a simple pattern that plays this
 instrument. Adjust the velocity settings on each note in the [Note Properties Editor](./02-using-hydrogen/06-pattern-editor/02-note-properties) so that you can
 get the different samples to sound. Now, set the playback to [loop](./02-using-hydrogen/04-main-toolbar/00-main-toolbar#sect.main_toolbar.transport_control) and
 notice how your different samples are getting triggered. To learn
 about editing a pattern, see [Chapter 9](./02-using-hydrogen/06-pattern-editor/00-pattern-editor).

For each layer, you can set the Gain and
 the Pitch. The pitch also has a
 Fine adjustment.

Use the [Gain](./02-using-hydrogen/08-instrument-editor#chpt.instrument_editor.gain_and_mute_group) adjustment to control how loud
 the sample will be played. This is necessary because it's extremely
 difficult to get a set of samples that all sound at about the same
 volume. By adjusting here, the samples that were recorded too quietly
 can be turned up to match your loud samples (that had to be turned
 down).
:::warning
It is very easy to set the Gain too high,
 causing your sample to [clip](./04-glossary#def.clipping). Remember to test the gain with
 full-velocity using the

 button in the corresponding Instrument Channel Strip. If you clip your signal here, it will only get
 worse as Hydrogen processes it.
:::
The pitch of the sample can be modified with the pitch controls.
 The Pitch knob adjust the pitch in musical
 half-steps. (So, `-12` is down 1 octave). The pitch on the right adjusts
 the pitch ±50 cents. (One half-step is 100 cents.)
:::note
The pitch is adjusted by playing the sample back faster or
 slower. This is called the Doppler Effect. So, if you have a
 1-second sample that you turn down `12` (1 octave), your sample will
 only last for 0.5-seconds. If you do not want this to happen you should
 use Rubber Band instead (see [Section 12.2](./02-using-hydrogen/09-sample-editor-pitch))
:::
You can hear the sample in a layer by clicking the layer id (just
 below the 'General' and 'Layers' buttons).
