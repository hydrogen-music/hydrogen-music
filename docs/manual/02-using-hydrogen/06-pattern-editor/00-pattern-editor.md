---
title: "Pattern Editor"
sidebar_label: "Pattern Editor"
---

![Figure 9.1. Pattern Editor in Drum Mode](/img/docs/generated_en/PatternEditor_DrumMode.png)

This is where it all happens, this is where you can make music :-)

The *Pattern Editor*
 allows you to create and modify the pattern selected in the [Sidebar](./02-using-hydrogen/05-song-editor/02-sidebar) of the Song Editor by adding/removing notes and tuning
 a number of [per-note properties](./02-using-hydrogen/06-pattern-editor/02-note-properties), like velocity and pan.
 The Pattern Editor
 can be used in two modes: as [Drumkit Editor](./02-using-hydrogen/06-pattern-editor/01-drum-pattern) or as [Piano Roll Editor](./02-using-hydrogen/06-pattern-editor/03-piano-roll). You can switch between these
 two by clicking the


 and



 button (located on the top-right of the Pattern Editor).
:::note
If you are editing a pattern in [Selected Pattern Mode](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.pattern_mode) you will always hear the pattern you are
 editing when you playback is rolling.

If you are working in [Stacked Pattern Mode](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.stacked) you will hear the *active* pattern(s),
 not necessarily the pattern you are currently editing.
:::
![Four notes are displayed in one line of the Pattern Editor. The one to the left is rendered as black circle. The one right of it consistents of an identical black circle as well as a black triangle expands over two grid cells. The third one is a a semi-transparent circle and the right-most one is rendered as a blue circle.](/img/docs/generated_en/NoteOff_NoteLength.png)

There are a couple of different notes you can create and encounter
 within the Pattern Editor. From left to right: regular, custom
 length, inaccessible, and stop-note.

- : **Regular note** (or just **note**) can be created using *left-clicking* or `Enter`. Triggers playback of a whole sample of the associated instrument. :::note The inner color of the circle represents the note's velocity. Black: `80%`, red: `100%`, blue: `50%`, white: `0%`. But in contrast to a stop-note these circles do always have a black outline. :::
- : **Custom length note** can be set by *right-click dragging* a regular note. Similar to a regular note but only plays back the sample until the specified point. Afterwards the [Release](./02-using-hydrogen/08-instrument-editor#chpt.instrument_editor.envelope_parameters) of the instrument kicks in to cut off the sample gracefully (small values) or to add a fade out (larger values). :::note The length of the note is specified in ticks and changes along with the tempo. The sample, however, consists of a certain amount of audio frames and will *not* change with tempo (unless you activated [Rubberband](./02-using-hydrogen/04-main-toolbar/02-bpm-metronome)). :::
- : **Inaccessible note** A regular note which is *not* part of the pattern you are currently editing. Instead, it belongs to a different one currently played as well. This could be within the same column in [Song Mode](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.song_mode) while the Pattern Editor is [locked](./02-using-hydrogen/05-song-editor/00-song-editor#chpt.song_editor.main_controls.pattern_editor_lock), activated in [Stacked Pattern Mode](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.stacked), or as part of a [Virtual Pattern](./02-using-hydrogen/05-song-editor/02-sidebar#chpt.song_editor.sidebar.virtual_pattern).
- : **Stop-note** can be created using `Shift` + *left-clicking* Stops rendering of all notes associated to the corresponding instrument. Afterwards the [Release](./02-using-hydrogen/08-instrument-editor#chpt.instrument_editor.envelope_parameters) of the instrument kicks in to cut off the samples gracefully (small values) or to add fade outs (larger values).

![Figure 9.2. Pattern Editor Controls](/img/docs/generated_en/PatternEditorControls.png)

The top part of the Pattern Editor contains a number of controls applying to both the [Drumkit Editor](./02-using-hydrogen/06-pattern-editor/01-drum-pattern) and the [Piano Roll Editor](./02-using-hydrogen/06-pattern-editor/03-piano-roll):

- : lets you choose the length of the pattern (in note values). The left combo box represents the numerator of your current measure. You can enter a decimal numerator, like `4.5/4`, but since resolution in Hydrogen is limited, some values are not supported and can not be entered. :::note Hydrogen supports (only) the following denominators (right combo box): `1`, `2`, `3`, `4`, `6`, `8`, `12`, `16`, `24`, `32`, `48`, `64`, `96`, and `192` because these are the factors of the maximum resolution (192 ticks per whole note). ::: :::tip Typing `/` within the numerator (first combo box) also you to quickly jump to the denominator. :::
- : this is the current grid resolution (`1/4` through `1/64` with triplet-based resolutions marked as `1/8T`). :::note If you are working with a resolution of `1/16` you can't go back to `1/8` and remove an upbeat 16th note by clicking it. But you can still select and remove it via dragging or keyboard. :::
- : when checked Hydrogen will play back notes as they are being added to the pattern (even if transport is not rolling). :::note When disabled you will still hear the preview sound when clicking on the instrument name in the [Sidebar](./02-using-hydrogen/06-pattern-editor/00-pattern-editor#chpt.pattern_editor.sidebar). Be sure to click at the left-most position - where the preview is silent - in case you don't want to get disturbed. Or switch the currently selected instrument using `↑` and `↓`. :::
- : enables/disables quantization. When checked, notes [recorded](./02-using-hydrogen/01-overview/03-recording) using incoming MIDI messages or Hydrogen's [Virtual Keyboard](./02-using-hydrogen/01-overview/02-virtual-keyboard) will automatically respect the grid resolution currently applied, just like notes inserted by clicking.
- / : switches between [Drumkit Editor](./02-using-hydrogen/06-pattern-editor/01-drum-pattern) and [Piano Roll Editor](./02-using-hydrogen/06-pattern-editor/03-piano-roll).

![Figure 9.3. The Sidebar of the Pattern Editor](/img/docs/generated_en/PatternEditorInstr_V2.png)

The section on the left shows you which drumkit was loaded last
 and below that you can see the instruments that are part of the current
 song.
:::note
Keep in mind that these are not necessarily the instruments of the
 kit associated with the displayed name! Each song has its own set of
 instruments.
:::
*Left-clicking* the box containing the instrument name will play back a sample of the instrument. Which layer will be select depends on the horizontal position of the mouse click representing zero [velocity](./04-glossary#def.velocity) to the left and maximum velocity to the right. In addition, each instrument has its own set of features that are accessible by
 *right-clicking* the instrument. From the context menu that pops up you can select.

- **Delete notes**: removes all notes for this instrument in this pattern.
- **Fill notes**: this allows you to fill up the pattern with notes for the selected instrument. :::note Depending on the choice you make (`fill all`, `fill 1/2`, `fill 1/4` ...) notes will be placed at all, 1/2, 1/4, etc of the note positions **that are allowed by the grid setting**. So be careful not to mix up the 'musical' 1/2-note and the 'fill 1/2' note. :::
- **Randomize velocity**: automatically apply a pseudo-random velocity to each note of that instrument in the pattern. :::note The more velocity you set on the instrument, the more Hydrogen will hit “hard” on that instrument when played. :::
- **Select notes**: will select all the notes played on this instrument in the current pattern. They can then be copied, moved etc. in the Pattern Editor main area.
- **Edit all patterns**: this section of the menu has actions which operate on notes played by the instrument in *all* the patterns of the song. **Cut notes**: remove *all* notes played on this instrument, in all patterns, and keep them in the clipboard.
- **Copy notes**: copy *all* notes played on this instrument, in all patterns, to the clipboard.
- **Paste notes** : paste a multi-pattern selection from the clipboard to this instrument.
- **Delete notes**: delete all the notes associated with this instrument, without affecting the clipboard.
:::tip
These can be used together to change the instrumentation
 of a song, entirely replacing one instrument with
 another by just copy and pasting the notes to a new
 instrument.
:::
**Instrument**:
 this section of the menu has actions which operate on the
 instrument as a whole:

- **Rename instrument**: change the name of the instrument.
- **Delete Instrument**: well, deletes the instrument ;-)

The

 button [mutes](./04-glossary#def.mute) the instrument and

 solos it.

The order of the instruments can be rearranged by simply *dragging* an instrument
 up/down in the list and *dropping* it on a new position within the drumkit. Doing so
 will not change the sequence of notes you have created for that instrument, nor will
 it change anything about the song or pattern you are working on.
:::warning
It ** will**, however, have an **impact** on the [MIDI note
 mapping](./02-using-hydrogen/13-midi/01-note-rendering#chpt.midi.note.mapping).
:::
:::warning
Rearranging the instruments will also mess up the [per-instrument](./02-using-hydrogen/02-preferences/01-audio-system#sect.preferences.jack.per_instrument_outs) JACK output ports. Be sure to have your drumkit set up before starting wiring.
:::
