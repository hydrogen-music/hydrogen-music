---
title: "Audio System"
sidebar_label: "Audio System"
---

![Figure 5.2. The Audio System Tab](/img/docs/generated_en/PreferencesAudioSystem_V3.png)

- **Audio System**: let's you choose the audio driver used by Hydrogen to connect to your computer's sound card. Available options: `Auto`: Hydrogen will try a number of different drivers in a predetermined, OS-dependent order, choose the first working one, and display the result. :::tip This option is recommended for beginners. :::
- `JACK`: The JACK driver is a professional audio server which permits very low lag and exchanges with other audio software. The JACK server will start automatically if not already running.
- `ALSA`: The widely adopted Linux standard audio driver.
- `OSS`: The OSS audio driver uses `/dev/dsp` and it's based on the OSS interface which is supported by the vast majority of sound cards available for Linux; this said, the use of this audio driver blocks `/dev/dsp` until Hydrogen is closed i.e. unusable by any other software. Use it as last resort.
- `PortAudio`: An open-source multi platform audio driver interface layer.
- `CoreAudio`: A driver for MacOS.
- `PulseAudio`: A driver for the cross platform PulseAudio sound server.

**Host API** (PortAudio only): some
 systems (notably Windows) have more than one native
 way for applications to interact with audio hardware (APIs), and not all audio
 devices are supported by all APIs. If you don't find
 your sound device in the device list, try changing the
 Host API setting.

**Device**:
 specifies the particular sound card the audio driver will use.
:::note
The Preferences dialog does not support hot plugging. In case
 you connected your device while the dialog was already opened,
 be sure to close and reopen it again.
:::
**Buffer size**:
 specifies the size of the batch of time Hydrogen will
 process in one run. Supported values are from
 `100` to `5000`, although
 this can vary depending on audio system and sound
 device.

In general, selecting a smaller buffer size will
 allow the audio system to reduce latency (the lag
 between hitting a key and the sound being played),
 but can lead to increased likelihood of audio
 glitches.

**Sample rate**:
 specifies the number of data points the audio signal will contain within one second.
:::note
If you are using the JACK audio driver, the sample rate can not be altered from within Hydrogen and the audio driver
 configuration should happen before starting the JACK server.
:::
**Track output**: determines which audio settings will be applied to the outgoing
 audio of the per-instrument JACK output ports.

`Post-Fader`:

- note [velocity](./02-using-hydrogen/06-pattern-editor/02-note-properties#chpt.pattern_editor.note_properties.velocity) and [pan](./02-using-hydrogen/06-pattern-editor/02-note-properties#chpt.pattern_editor.note_properties.pan)
- [layer gain](./02-using-hydrogen/08-instrument-editor-layers#chpt.instrument_editor.layers.controls.layer_gain)
- component [gain](./02-using-hydrogen/08-instrument-editor-layers#chpt.instrument_editor.layers.controls.component_gain) and [volume](./02-using-hydrogen/10-mixer/01-component-strips#chpt.mixer.component_strips.fader_and_lcd)
- instrument [gain](./02-using-hydrogen/08-instrument-editor#chpt.instrument_editor.gain_and_mute_group), [sustain](./02-using-hydrogen/08-instrument-editor#chpt.instrument_editor.general.sustain), [pan](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips.pan), and [volume](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips.fader_and_lcd)
- [automation path](./02-using-hydrogen/05-song-editor/06-automation-path) and [velocity humanization](./02-using-hydrogen/10-mixer/03-master-fader)

`Pre-Fader`:

- note [velocity](./02-using-hydrogen/06-pattern-editor/02-note-properties#chpt.pattern_editor.note_properties.velocity) and [pan](./02-using-hydrogen/06-pattern-editor/02-note-properties#chpt.pattern_editor.note_properties.pan)
- [layer gain](./02-using-hydrogen/08-instrument-editor-layers#chpt.instrument_editor.layers.controls.layer_gain)
- instrument [sustain](./02-using-hydrogen/08-instrument-editor#chpt.instrument_editor.general.sustain)
- [automation path](./02-using-hydrogen/05-song-editor/06-automation-path) and [velocity humanization](./02-using-hydrogen/10-mixer/03-master-fader)
:::note
This option is only available if the JACK audio driver was selected and it will only take effect if the **Connect to default JACK output ports** option is checked.
:::
**Connect to default JACK output
 ports**: connects the main stereo JACK output ports of the [Master Fader Strip](./02-using-hydrogen/10-mixer/03-master-fader) to
 the default JACK input ports of your system
 (*system:playback_1* and
 *system:playback_2*). This will be done every time Hydrogen
 starts up or the JACK audio driver is restarted.
:::note
This option is only available if the JACK audio driver was selected.
:::
**Create per-instrument
 JACK output ports**: in addition to the main stereo output
 Hydrogen will register JACK output ports for every single
 instrument.
:::tip
This can be useful if you want to add effects to a
 single instrument with jack-rack for example.
:::
:::note
This option is only available if the JACK audio driver was selected.
:::
:::warning
There are no JACK output ports for the [Metronome](./02-using-hydrogen/04-main-toolbar/02-bpm-metronome) and the [Playback Track](./02-using-hydrogen/05-song-editor/05-playback-track). Their audio is only available via the main stereo output ports of Hydrogen.
:::
**Enable [JACK
 Timebase support](./02-using-hydrogen/04-main-toolbar/04-jack-control)**: whether Hydrogen will respond to
 or ignore the incoming tempo and bar, beat, tick (BBT) position
 information sent by the JACK server.
:::tip
Some JACK clients are not well written or have fallen into despair. As a result Hydrogen could receive nuisance signals messing up its playback. If you encounter weird jumps in the transport position and/or Hydrogen is out of sync after relocating the transport position, you might try to uncheck this option.
:::
:::note
This option is only available if the JACK audio driver was selected.
:::
**Apply and restart output**:
 restarts the audio driver and makes all settings specified above take effect without closing and reopening the entire Preferences dialog.

**Polyphony**:
 specifies the maximum number of notes played simultaneously. Supported values are from `1` to `512`.
:::tip
Depending on your CPU Hydrogen might be overrunning your audio driver due to this parameter.
:::
**Metronome volume**:
 sets the volume of the [Metronome](./02-using-hydrogen/04-main-toolbar/02-bpm-metronome). Supported values are from `1` to `100`.

**Interpolate resampling**:
 specifies the type of resampling applied if a [sample](./04-glossary#def.sample) does not use the same Sample Rate as Hydrogen.
