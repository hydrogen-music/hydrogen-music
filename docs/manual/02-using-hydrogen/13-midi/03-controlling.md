---
title: "MIDI Controlling"
sidebar_label: "MIDI Controlling"
---

This section explains how you can change parameters in Hydrogen, start
 playback or recording, switch patterns, and many more using incoming
 MIDI messages. Firstly, we will have a look at which
 types of MIDI messages are supported in [MIDI Events](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.events). Then we will discuss two
 different ways of mapping them to Actions: via the [MIDI table](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.actions) in the
 Preferences and [MIDI-learnable Widgets](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.learnable)

There is a vast number of MIDI message types
 available. But Hydrogen only supports a selection of most common ones
 listed below.

- **NOTE_ON**: an incoming note triggered by a regular black/white key of a MIDI keyboard or a pad of an e-drum. The note's **pitch** will be used as event parameter and its **velocity** as new value.
- **CONTROL_CHANGE (CC)**: controller commands coming from e.g. faders or rotary controllers. These ones can be used for [MIDI Feedback](./02-using-hydrogen/13-midi/02-output#chpt.midi.output.feedback) as well.
- **PROGRAM_CHANGE (PC)**: usually intended to change the sound of instruments or to select different sound banks. It does only contain an single event parameter, e.g. the bank number, which will be interpreted as new value.
- **MMC_x**: [MIDI machine control](http://en.wikipedia.org/wiki/MIDI_Machine_Control) events coming from e.g. buttons, like 'play' or 'stop', on a controller. These messages carry neither an event parameter nor a number which could be used as new value. They are intended for triggering [Actions](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.actions) expecting no input arguments, like toggling mute or playback, and will use `0` as new value for all other Actions.
- **START**: System Realtime message which is hard-coded to start playback in Hydrogen. It can *not* be mapped to an [Action](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.actions) or an MIDI-learnable widget.
- **CONTINUE**: System Realtime message which is hard-coded to start playback in Hydrogen. It can *not* be mapped to an [Action](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.actions) or an MIDI-learnable widget.
- **STOP**: System Realtime message which is hard-coded to pause playback in Hydrogen. It can *not* be mapped to an [Action](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.actions) or an MIDI-learnable widget.

Whether the MIDI event sent by the play button of
 your MIDI device corresponds to e.g. a
 *START* or *MMC_PLAY* event is
 up to the manufacturer and should be stated in the user manual.
:::note
For all message types except of the MMC_x ones the [Channel](./02-using-hydrogen/02-preferences/02-midi-system#chpt.preferences.midi_tab.channel) set in
 the Preferences must be matched.
:::
An MIDI **Event**
 recognized by Hydrogen can be mapped to an **Action** using the MIDI table
 in the [MIDI System](./02-using-hydrogen/02-preferences/02-midi-system)
 tab of the Preferences.
:::note
Only actions performed in the GUI can be undone.
 MIDI, on the other hand, can not!
:::
![Figure 16.1. Actions are set in MIDI System tab of the Preferences Dialog](/img/docs/generated_en/MidiSystem_V2.png)

You can define mapping between incoming MIDI Events
 and Actions by either choosing an event type and
 parameter manually or by pressing the

 button in the left-most column of the table. A popup will inform you
 that Hydrogen is waiting for your input. Press/hit/turn the
 key/pad/knob on your MIDI keyboard (or controller)
 that you want to link to the Action. The popup will close and the
 **Event Param.** value will now show the
 MIDI message corresponding to the key you pressed.
 Once this is done you can select an Action from the drop-down list.

The **Action Param.** columns to the
 right of the table specifies the parameters to the Action
 *not* provided by the MIDI
 message. In the example shown in the picture above the value set
 using the controller `70` of your
 MIDI device will be assigned to the pan of the third
 top-most instrument in the current drumkit.
:::note
Most Action parameters references a specific channel, instrument,
 FXsend id, ... Keep in mind that their values are
 *zero-based*. So, if you want to reference
 channel 1 you have to enter `0` in the **Action Param.** field (`1` for
 channel 2, `2` for channel 3, and so on).
:::
:::tip
In order to **delete a row** in the
 MIDI table, you have to set both its
 *Incoming Event* and *Action*
 to an empty value.
:::
Available Actions:

- **>_NEXT_BAR**: moves the playhead to the next pattern/bar.
- **BEATCOUNTER**: calculates the average time passing between successive encounters of this commands and uses it to set the current tempo using the [Beat Counter](./02-using-hydrogen/04-main-toolbar/01-tap-tempo#sect.main_toolbar.tap_tempo_beat_counter.beat_counter).
- **BPM_CC_RELATIVE**: changes the tempo relative to the current tempo, using a controller. Using *Action Param. **1*** you can specify by how much the current tempo will change. If the incoming Event is `-1` (negative), the tempo will be increased and if it's `1` (positive), it will be increased. :::note This Action will have no effect if Hydrogen is both in [Song Mode](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.song_mode) and the [Timeline](./02-using-hydrogen/05-song-editor/03-timeline) is activated. :::
- **BPM_DECR**: decreases the current tempo by the supplied value. :::note This Action will have no effect if Hydrogen is in [Song Mode](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.song_mode) or [Timeline](./02-using-hydrogen/05-song-editor/03-timeline) is activated. :::
- **BPM_FINE_CC_RELATIVE**: as [BPM_CC_RELATIVE](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.actions.bpm_cc_relative) but with changes 100 times smaller than the value specified in *Action Param. **1***. :::note This Action will have no effect if Hydrogen is in [Song Mode](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.song_mode) or [Timeline](./02-using-hydrogen/05-song-editor/03-timeline) is activated. :::
- **BPM_INCR**: increases the current tempo by the supplied value. :::note This Action will have no effect if Hydrogen is in [Song Mode](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.song_mode) or [Timeline](./02-using-hydrogen/05-song-editor/03-timeline) is activated. :::
- **CLEAR_PATTERN**: removes all notes of the selected pattern.
- **CLEAR_SELECTED_INSTRUMENT**: removes all notes of the selected pattern associated with the currently selected instrument.
- **EFFECT_LEVEL_ABSOLUTE**: changes the [volume level of an FX](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips.fx_volume). *Action Param. **1*** determines the [Instrument Channel Strip](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips) and *Action Param. **2*** specifies the FX the Action will be applied to.
- **EFFECT_LEVEL_RELATIVE**: same as [EFFECT_LEVEL_ABSOLUTE](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.actions.effect_level_absolute) but instead mapping the incoming values directly to the FX volume `1` will increase and all other values will decrease it by 5%.
- **FILTER_CUTOFF_LEVEL_ABSOLUTE**: for a value of `0` it sets the [Filter Cutoff](./02-using-hydrogen/08-instrument-editor#chpt.instrument_editor.filter) of the instrument strip specified using the *Action Param. **1*** to `0`. For all other values it sets the cutoff to the provided number divided by 127.0.
- **GAIN_LEVEL_ABSOLUTE**: sets the [Layer Gain](./02-using-hydrogen/08-instrument-editor-layers#chpt.instrument_editor.layers.controls.layer_gain). *Action Param. **1*** specifies the instrument, *Action Param. **2*** the component, and *Action Param. **3*** the layer.
- **INSTRUMENT_PITCH**: sets the [Pitch](./02-using-hydrogen/08-instrument-editor#chpt.instrument_editor.pitch_shift_parameters) of the instrument specified by *Action Param. **1***.
- **MASTER_VOLUME_ABSOLUTE**: sets the [Master output volume](./02-using-hydrogen/10-mixer/03-master-fader) to the value provided by the MIDI event times 1.5 and divided by 127.
- **MASTER_VOLUME_RELATIVE**: changes the [Master output volume](./02-using-hydrogen/10-mixer/03-master-fader), relative to its current setting. For a value of `0` it sets the volume of the master fader to 0. For a value of `1` it increases its volume by 0.05 and for all other values it decreases it by 0.05. (`-1`: -0.05 , `0`: 0 ,`1`: +0.05)
- **MUTE**: [mutes](./04-glossary#def.mute) the [Master output](./02-using-hydrogen/10-mixer/03-master-fader) (sequencer keeps running).
- **MUTE_TOGGLE**: toggles the [muting](./04-glossary#def.mute) of the [Master output](./02-using-hydrogen/10-mixer/03-master-fader) (sequencer keeps running).
- **PAN_ABSOLUTE**: changes the [pan](./04-glossary#def.pan) of an [instrument](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips.pan) determined by the *Action Param. **1*** to the absolute value that the linked controller sends to Hydrogen. Incoming values from `0` to `127` will be mapped to pan values between -1 and 1.
- **PAN_ABSOLUTE_SYM**: same as [PAN_ABSOLUTE](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.actions.pan_absolute) but supports incoming values from `-127` to `127` will be mapped.
- **PAN_RELATIVE**: changes the [pan](./04-glossary#def.pan) of an [instrument](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips.pan) determined by *Action Param. **1*** relative to the current value. For a value of `1` it increase the pan by 0.05. For all other values it decreases it by 0.05. (`-1`: -0.05 , `1`: +0.05).
- **PAUSE**: pauses playback.
- **PITCH_LEVEL_ABSOLUTE**: sets the [Layer Pitch](./02-using-hydrogen/08-instrument-editor-layers#chpt.instrument_editor.layers.controls.pitch). *Action Param. **1*** specifies the instrument, *Action Param. **2*** the component, and *Action Param. **3*** the layer.
- **PLAY**: starts playback.
- **PLAY/PAUSE_TOGGLE**: works the same as [PLAY](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.actions.play) if the playback has not started yet and same as. [PAUSE](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.actions.pause) otherwise. (The playhead will not return to the start of the song, but will stay at its current position).
- **PLAY/STOP_TOGGLE**: works the same as [PLAY](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.actions.play) if the playback has not started yet and same as. [STOP](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.actions.stop) otherwise.
- **PLAYLIST_NEXT_SONG**: opens the song in the current [playlist](./02-using-hydrogen/12-playlist-editor) corresponding to the song number specified in *Action Param. **1***.
- **PLAYLIST_PREV_SONG**: opens the previous song in the current [playlist](./02-using-hydrogen/12-playlist-editor).
- **PLAYLIST_SONG**: opens the next song in the current [playlist](./02-using-hydrogen/12-playlist-editor).
- **RECORD/STROBE_TOGGLE**: toggles [recording](./02-using-hydrogen/01-overview/03-recording) (same as pressing the [record button](./02-using-hydrogen/04-main-toolbar/00-main-toolbar#sect.main_toolbar.transport_control) in the main toolbar).
- **RECORD_EXIT**: deactivates [recording](./02-using-hydrogen/01-overview/03-recording).
- **RECORD_READY**: toggles [recording](./02-using-hydrogen/01-overview/03-recording) (same as pressing the [record button](./02-using-hydrogen/04-main-toolbar/00-main-toolbar#sect.main_toolbar.transport_control) in the main toolbar) if the playback has not started yet.
- **RECORD_STROBE**: activates [recording](./02-using-hydrogen/01-overview/03-recording).
- **REDO_ACTION**: redoes the previously undone GUI action (not MIDI action!).
- **SELECT_AND_PLAY_PATTERN**: works as [SELECT_NEXT_PATTERN](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.actions.select_next_pattern) combined with [PLAY](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.actions.play).
- **SELECT_INSTRUMENT**: selects the instrument in the drumkit corresponding to the number supplied in the incoming MIDI Event.
- **SELECT_NEXT_PATTERN**: selects the pattern specified in *Action Param. **1***. :::note If Hydrogen is in [Selected Pattern Mode](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.pattern_mode), playback will be switched to the selected pattern immediately. If it is, instead, in [Stacked Pattern Mode](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.stacked), playback of the selected pattern will be toggled next time transport is loop again. In case the pattern was already playing, it will be stopped. If not, it will be started. If Hydrogen is in [Song Mode](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.song_mode), the command will have no effect. :::
- **SELECT_NEXT_PATTERN_CC_ABSOLUTE**: like [SELECT_NEXT_PATTERN](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.actions.select_next_pattern) but the pattern to be selected is determined by the value of the MIDI message.
- **SELECT_NEXT_PATTERN_RELATIVE**: like [SELECT_NEXT_PATTERN](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.actions.select_next_pattern) but the pattern to be selected is determined by the pattern number of the currently selected one plus the value specified in *Action Param. **1***.
- **SELECT_ONLY_NEXT_PATTERN**: selects the pattern specified in *Action Param. **1***. :::note If Hydrogen is in [Stacked Pattern Mode](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.stacked), only the selected pattern will be played back once the transport gets looped again. For [Selected Pattern Mode](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.pattern_mode) this Action behaves as [SELECT_NEXT_PATTERN](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.actions.select_next_pattern). If Hydrogen is in [Song Mode](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.song_mode), the command will have no effect. ::: :::tip By providing a number smaller than `0` or larger than the number of available patterns all playing patterns can be stopped at once without stopping playback itself. :::
- **SELECT_ONLY_NEXT_PATTERN_CC_ABSOLUTE**: like [SELECT_ONLY_NEXT_PATTERN](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.actions.select_only_next_pattern) but the pattern to be selected is determined by the value of the MIDI message.
- **STOP**: stops playback and moves the playhead to the beginning of the song.
- **STRIP_MUTE_TOGGLE**: [mutes](./04-glossary#def.mute) the instrument specified in *Action Param. **1***.
- **STRIP_SOLO_TOGGLE**: [mutes](./04-glossary#def.mute) the instrument specified in *Action Param. **1***.
- **STRIP_VOLUME_ABSOLUTE**: see [MASTER_VOLUME_ABSOLUTE](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.actions.master_volume_absolute), but applies to the [Instrument Channel Strip](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips) specified in *Action Param. **1***.
- **STRIP_VOLUME_RELATIVE**: see [MASTER_VOLUME_RELATIVE](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.actions.master_volume_relative), but applies to the [Instrument Channel Strip](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips) specified in *Action Param. **1***.
- **TAP_TEMPO**: another command calculating the average time passing between successive encounters of this commands and uses it to set the current tempo using [Tap Tempo](./02-using-hydrogen/04-main-toolbar/01-tap-tempo#sect.main_toolbar.tap_tempo_beat_counter.tap_tempo).
- **TOGGLE_METRONOME**: toggles the metronome.
- **UNDO_ACTION**: undoes the previous GUI action (not MIDI action!).
- **UNMUTE**: unmutes the [Master output](./02-using-hydrogen/10-mixer/03-master-fader) (sequencer keeps running).

For more convenient handling some [Actions](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.actions) are associated
 with GUI elements and can directly be mapped to MIDI
 Events by pressing `Shift` while
 *left-clicking* the widget.

Such elements are:

- [Volume faders](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips.fader_and_lcd), [FX Colume knobs](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips.fx_volume), [Pan rotaries](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips.pan) as well as [Mute](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips.mute) and [Solo](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips.solo) buttons in the [Instrument Channel Strips](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips).
- Volume fader and Mute button of the [Master Fader Strip](./02-using-hydrogen/10-mixer/03-master-fader).
- Rewind, Record, Play, Stop, and Fast Forward buttons in the [Transport Control](./02-using-hydrogen/04-main-toolbar/00-main-toolbar#fig.main_toolbar.transport_control) and [Beat Counter ](./02-using-hydrogen/04-main-toolbar/01-tap-tempo) as well as [Metronome](./02-using-hydrogen/04-main-toolbar/02-bpm-metronome) button.
- Rewind, Play, Stop, and Fast Forward buttons in the [Playlist Editor](./02-using-hydrogen/12-playlist-editor).

A 'Waiting for MIDI input...' popup informs you
 that Hydrogen is now waiting for you to press a key or turn/move a
 controller on your MIDI device. If successful, the new
 mapping is shown in both the tooltip of the GUI element as well as the
 [MIDI table](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.actions) in the
 Preferences.
:::note
If the element that does not support MIDI automation, a different popup will inform you.
:::
