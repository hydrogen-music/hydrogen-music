---
title: "Mixer"
sidebar_label: "Mixer"
---

![Figure 13.1. The Mixer](/img/docs/generated_en/Mixer.png)

The Mixer window can be opened by pressing `Alt` + `M`, by selecting Mixer in the [View](./02-using-hydrogen/03-main-menu/04-view) option of the Main Menu, or by clicking the Mixer button on the [Main Toolbar](./02-using-hydrogen/04-main-toolbar/05-gui-state).

The Mixer consists of 3 sections (from left to right): the one containing the [Instrument Channel Strips](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips) and [Component Channel Strips](./02-using-hydrogen/10-mixer/01-component-strips),
 the [FX Plugin Rack](./02-using-hydrogen/10-mixer/02-fx-rack), and the [Master Fader Strip](./02-using-hydrogen/10-mixer/03-master-fader). The Hydrogen Mixer works very
 much like a hardware mixer does: it lets you set the volume, pan, FX and several
 other things for every instrument as well as the volume of all of these sources mixed together.

![Figure 13.2. The Instrument Channel Strip in the Mixer](/img/docs/generated_en/mixerLineStrip.png)

- : lets you trigger the instrument at maximum velocity. :::tip This is quite handy for checking [clipping](./04-glossary#def.clipping). ::: Right-clicking the button will stop all currently playing notes of the associated instrument. :::tip This is especially useful when dealing with long samples and [Auto-Stop Note](./02-using-hydrogen/08-instrument-editor#chpt.instrument_editor.gain_and_mute_group) is disabled. :::
- : lights up whenever this instrument is triggered (e.g. by a note in a pattern).
- : shows whether the instrument is currently selected (in both the Mixer and the Pattern Editor). :::note If the [Input Mode](./02-using-hydrogen/13-midi/01-note-rendering#chpt.midi.note.input_mode) is set to `Instrument`, incoming MIDI events and [Virtual Keyboard keys](./02-using-hydrogen/01-overview/02-virtual-keyboard) will trigger only (pitch shifted) sounds of the currently selected instrument. ::: :::tip An instrument can be selected by interacting with its Instrument Channel Strip in the Mixer, by interacting with its associated row in the Pattern Editor, or by the corresponding [MIDI](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.actions.select_instrument) or [OSC command.](./02-using-hydrogen/14-osc-api-commands#chpt.osc.command.select_instrument) :::
- : [mutes](./04-glossary#def.mute) all sounds related to the instrument (including the preview sound you hear when clicking on the instrument name in the [Sidebar](./02-using-hydrogen/06-pattern-editor/00-pattern-editor#chpt.pattern_editor.sidebar) of the Pattern Editor). :::note This button is sharing its state with the mute button of corresponding instrument in the [Sidebar](./02-using-hydrogen/06-pattern-editor/00-pattern-editor#chpt.pattern_editor.sidebar) of the Pattern Editor. :::
- : solos the instrument. :::note This button is sharing its state with the solo button of corresponding instrument in the [Sidebar](./02-using-hydrogen/06-pattern-editor/00-pattern-editor#chpt.pattern_editor.sidebar) of the Pattern Editor. :::
- : sets a pan value affecting all notes played using this instrument. :::tip For a detailed description of how this pan value does interact with the [note pan](./02-using-hydrogen/06-pattern-editor/02-note-properties#chpt.pattern_editor.note_properties.pan) and the [Pan Laws](./02-using-hydrogen/10-mixer/03-master-fader#chpt.mixer.master_fader_strip.mixer_settings) in the Mixer please see [Pan](./04-glossary#def.pan). :::
- : the four pre-fader FX send knobs that determine how much of this instrument will be sent to the effect plugins in the [FX Rack](./02-using-hydrogen/10-mixer/02-fx-rack).
- **Fader**: the fader next to the instrument's name allows you to adjust the volume of the instrument which will be applied on top of all the individual note velocities, layer gains etc. In the background of the fader a volume unit (VU) meter is included representing the instrument's signal level. The display above shows its peak value. :::tip You can adjust the falloff speed of the peak values in the display in the [Interface](./02-using-hydrogen/02-preferences/04-appearance#fig.preferences.appearance_tab.interface) tab of the Appearance tab in the Preferences. :::
:::note
If the [Create per-instrument outputs](./02-using-hydrogen/02-preferences/01-audio-system#sect.preferences.jack.per_instrument_outs) option in the Audio Engine tab of the Preferences was selected for the JACK audio driver, Hydrogen will register ports for each instrument. All the options described above will only take effect if in addition the [Track output](./02-using-hydrogen/02-preferences/01-audio-system#sect.preferences.jack.track_output) option in the same tab as set to `Post-Fader`.

This allows you to route the individual instruments directly into any other JACK enabled application, like Ardour, and gives you
 a lot more flexibility.
:::
