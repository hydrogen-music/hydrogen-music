---
title: "MIDI Note Rendering"
sidebar_label: "MIDI Note Rendering"
---

Hydrogen can be used as MIDI synth for your
 MIDI device. All settings in both [Instrument Editor](./02-using-hydrogen/08-instrument-editor) and [Mixer](./02-using-hydrogen/10-mixer/00-mixer) are applied but instead of notes
 picked up from patterns while playback is rolling, incoming
 MIDI messages will trigger sounds. In addition, all
 incoming MIDI notes can be [recorded](./02-using-hydrogen/01-overview/03-recording).

*NOTE_ON* type MIDI messages will
 trigger a note while *NOTE_OFF* will stop all note
 rendering in the corresponding instrument. This behavior might be
 exactly what you expected from an edrum but, on the other hand, also
 might be a pain when using a MIDI keyboard (since
 releasing a key will stop the note). In this case you can disable
 *NOTE_OFF* message handling by unchecking [Ignore
 note-off](./02-using-hydrogen/02-preferences/02-midi-system#chpt.preferences.midi_tab.ignore_note_off) in the Preferences.

Which incoming MIDI note is mapped to which particular
 instrument does depend on multiple settings. First of all, each
 *NOTE_ON* message is assigned a **channel** - the default one in the General
 MIDI standard is `10`. Using [Channel](./02-using-hydrogen/02-preferences/02-midi-system#chpt.preferences.midi_tab.channel) in the
 Preferences you can set whether Hydrogen should listen to incoming
 notes on all channels or just to a single one. The second degree of
 freedom of a note is its **pitch**. Depending on the current [Input Mode](./02-using-hydrogen/13-midi/01-note-rendering#chpt.midi.note.input_mode) it is either
 mapped to a pitch-shifted sample of the currently selected instrument
 or an instrument of the current drumkit. The latter will be discussed
 in section [MIDI Note
 Mapping](./02-using-hydrogen/13-midi/01-note-rendering#chpt.midi.note.mapping) in more detail.
:::note
When *NOTE_ON* messages are [mapped to Actions](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.actions) they
 will be discarded and do *not* trigger sound when
 [Discard
 MIDI messages after action has been triggered](./02-using-hydrogen/02-preferences/02-midi-system#chpt.preferences.midi_tab.discard_messages) is checked in
 the Preferences.
:::
Using **Input Mode** in [Options](./02-using-hydrogen/03-main-menu/05-options) within the Main Menu
 you can choose between two different ways of triggering sounds and
 record notes.

`Drumkit` maps different MIDI notes
 (or [Virtual
 Keyboard](./02-using-hydrogen/01-overview/02-virtual-keyboard) strokes) to different instruments of the current
 drumkit. `Instrument`, on the other hand, maps them to
 pitch-shifted samples of the instrument currently selected in the
 [Pattern Editor](./02-using-hydrogen/06-pattern-editor/00-pattern-editor). You can
 use these modes to record notes into both [Drumkit Editor](./02-using-hydrogen/06-pattern-editor/01-drum-pattern) and [Piano Roll Editor](./02-using-hydrogen/06-pattern-editor/03-piano-roll)
 respectively. The third property of a MIDI note, its
 **velocity**, will be used as [velocity](./04-glossary#def.velocity) for the triggered note.

If [Input Mode](./02-using-hydrogen/13-midi/01-note-rendering#chpt.midi.note.input_mode) was
 set to `Drumkit`, Hydrogen has two ways of dealing
 with incoming MIDI notes: order-based and output-based.

Per default mapping in done **order-based**. Hydrogen maps incoming
 MIDI notes of pitch `36` and above to
 instruments of your drumkit. A MIDI note of pitch
 `36` will trigger a sample of the first instrument of
 your current drumkit, one of pitch `37` a sample from
 the second one and so forth. When choosing this option you can
 control mapping by drag-dropping the instruments into the desired
 order.

Alternatively you can use **output-based** mapping by checking [Use output note
 as input note](./02-using-hydrogen/02-preferences/02-midi-system#chpt.preferences.midi_tab.input_as_output) in the Preferences. This way an incoming
 MIDI note is mapped to the instrument which's [MIDI Output
 Note](./02-using-hydrogen/08-instrument-editor#fig.instrument_editor.midi_out_settings) setting in the Instrument Editor matches its
 pitch.
