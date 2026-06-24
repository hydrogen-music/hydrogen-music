---
title: "Recording in Hydrogen"
sidebar_label: "Recording in Hydrogen"
---

In addition to manually program patterns using mouse and keyboard you
 can also record one or multiple patterns. You can do so using an
 external [MIDI
 device](./02-using-hydrogen/13-midi/01-note-rendering), like an e-drum, or use the [Virtual Keyboard](./02-using-hydrogen/01-overview/02-virtual-keyboard)
 provided by Hydrogen.

In order to start recording, first activate the record button

in the [Main Toolbar](./02-using-hydrogen/04-main-toolbar/00-main-toolbar#sect.main_toolbar.transport_control) and afterwards press the

 button located right next to it (like in a classical tape recorder).

Using the playback mode of the [Song
 Editor](./02-using-hydrogen/05-song-editor/00-song-editor) you can choose between the following two scenarios. When
 in [Pattern
 Mode](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.pattern_mode) all inserted notes will be added to the pattern currently
 selected in the [Sidebar](./02-using-hydrogen/05-song-editor/02-sidebar) of the Song
 Editor. When, on the other hand, in [Song Mode](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.song_mode) the
 input notes will be added to the active pattern (the one the playhead
 is located in and is currently used for playback). If several patterns
 are selected in a single row, the input notes will only be added to
 the pattern at the bottom.
:::tip
By [locking](./02-using-hydrogen/05-song-editor/00-song-editor#chpt.song_editor.main_controls.pattern_editor_lock) the Pattern Editor in Song Mode Hydrogen will automatically select the pattern recorded notes will be inserted to.
:::
:::note
The incoming notes will be added in a non-destructive way. This means when attempting to add a notes at a position already containing one of equal pitch, the new note will be discarded and the old one kept.
:::
![Song ruler with a red rectangle indicating the punch in area.](/img/docs/punch_in.png)

You can also limit patterns new notes will be recorded to by defining a continuous **punch in** area via right click and dragging the cursor to the right in the ruler of the [Song Editor](./02-using-hydrogen/05-song-editor/00-song-editor).
