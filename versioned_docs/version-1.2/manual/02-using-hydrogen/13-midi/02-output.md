---
title: "MIDI Output"
sidebar_label: "MIDI Output"
---

Hydrogen allows you to send both notes encountered during playback as
 *NOTE_ON* and *NOTE_OFF* messages
 and the current state of specific controls using [MIDI Feedback](./02-using-hydrogen/13-midi/02-output#chpt.midi.output.feedback) as
 *CC* messages.

But first of all you have to set a MIDI [Output](./02-using-hydrogen/02-preferences/02-midi-system#chpt.preferences.midi_tab.output) device in the Preferences.
:::note
The list of available MIDI output devices/ports is
 compiled for the current MIDI driver when opening the Preferences
 dialog. If you switch to another driver, be sure to click
 *OK* and reopen the Preferences dialog in
 order to have an updated list.
:::
Now every note encountered during playback will trigger a
 MIDI note with the note's velocity and the channel and
 pitch specified in the corresponding [instrument](./02-using-hydrogen/08-instrument-editor#chpt.instrument_editor.midi_out_settings). In
 case the channel is set to `off`, no
 MIDI message will be sent.
:::note
To **enable MIDI output**, you have to
 set both an **output device** in the
 Preferences as well as **all instrument
 MIDI channels** to a dedicated value, like `10`.
:::
You can also keep other MIDI-capable applications
 posted about parameter changes in Hydrogen using
 MIDI Feedback. If one or more **CC** events are mapped to a parameter supporting
 feedback, all of its changes - also those triggered by incoming
 MIDI messages - will cause Hydrogen to send a CC
 message. This message will carry the same message parameters as the
 one mapped to the particular parameter within Hydrogen and will
 contain its value mapped to a range between `0` and
 `127`.

Supported feedback parameters are

- [Volume faders](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips.fader_and_lcd), [Pan rotaries](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips.pan) as well as [Mute](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips.mute) and [Solo](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips.solo) buttons in the [Instrument Channel Strips](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips).
- Volume fader and Mute button of the [Master Fader Strip](./02-using-hydrogen/10-mixer/03-master-fader).
- [Metronome](./02-using-hydrogen/04-main-toolbar/02-bpm-metronome) button.
