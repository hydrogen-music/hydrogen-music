---
title: "MIDI System"
sidebar_label: "MIDI System"
---

![Figure 5.3. The MIDI System Tab](/img/docs/generated_en/MidiSystem_V2.png)

- **MIDI driver**: selects the MIDI driver Hydrogen will use to receive and send MIDI messages.
- **Input**: selects the device/port Hydrogen will expect MIDI messages to receive from (see [MIDI Input](./02-using-hydrogen/13-midi/00-midi#chpt.midi.input)). :::note For now the list of available **Input** and **Output** MIDI devices/ports is compiled for the current MIDI driver when opening the Preferences dialog. If you switch to another driver or connect a device while the dialog is already open, be sure to close and reopen it again in order to have an updated list. :::
- **Output**: selects the device/port Hydrogen will send MIDI messages to (see [MIDI Output](./02-using-hydrogen/13-midi/02-output)).
- **Channel**: specifies whether Hydrogen should listen to **incoming** MIDI messages on one particular channel out of the 16 available ones or on all of them. Outgoing MIDI traffic is not affected. The corresponding channels are set on a per-instrument basis in the [Instrument Editor](./02-using-hydrogen/08-instrument-editor#chpt.instrument_editor.midi_out_settings).
- **Ignore note-off**: specifies whether Hydrogen will respond to the *NOTE_OFF* MIDI messages. :::note This makes better use of the drumkit samples used in Hydrogen when working with certain external MIDI devices. But it may also discard *Cymbal choke* messages in some e-drums. :::
- **Enable MIDI feedback**: specifies whether Hydrogen will send a message about updated values every time a certain parameter is changed (see [MIDI Feedback](./02-using-hydrogen/13-midi/02-output#chpt.midi.output.feedback)).
- **Discard MIDI messages after action has been triggered**: specifies whether a MIDI note - after performing the [Actions](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.actions) associated with it - should be played back or be discard.
- **Use output note as input note**: if checked the instrument mapped to an incoming MIDI note is determined by its [MIDI Out Settings](./02-using-hydrogen/08-instrument-editor#chpt.instrument_editor.midi_out_settings) in the Instrument Editor. Otherwise, the [default MIDI mapping](./02-using-hydrogen/13-midi/01-note-rendering#chpt.midi.note.mapping) (based on the instrument order in the [Pattern Editor](./02-using-hydrogen/06-pattern-editor/00-pattern-editor)) will be used (see [MIDI Note Mapping](./02-using-hydrogen/13-midi/01-note-rendering#chpt.midi.note.mapping)). :::note This option only takes effect if **Input Mode** in the [Options](./02-using-hydrogen/03-main-menu/05-options) tab of the Main Menu is set to `Drumkit`. :::
Using the table in the lower part of the tab you can associate [Actions](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.actions) provided by Hydrogen with incoming MIDI messages. How this is done will be explained in the [Actions](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.actions).
