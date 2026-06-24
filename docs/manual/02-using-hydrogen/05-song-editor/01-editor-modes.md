---
title: "Song Editor modes"
sidebar_label: "Song Editor modes"
---

The Song Editor has two different *interaction modes*. The
 default [**Select Mode**](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.select) allows
 pattern blocks to be set, cleared, selected, moved and
 copied. The [**Draw Mode**](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.draw)
 instead allows pattern sequences to be drawn freehand.

In both modes, you can perform basic editing: clicking an
 empty square activates the pattern in that time slot, and
 clicking again will deactivate it.

They keyboard can also be used for editing. The arrow keys
 `↑`|`↓`|`←`|`→`
 will move the keyboard input cursor, and pressing
 `Return` will activate or deactivate the
 pattern in the current column.

In addition, there are two major *playback modes*, [**Song Mode**](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.song_mode) and [**Pattern Mode**](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.pattern_mode) (with two minor submodes [ **Selected Pattern mode**](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.pattern_mode) and [**Stacked Pattern Mode**](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.stacked)). These will determine which parts of the song you will listen to during playback.
:::note
While Select Mode, Draw Mode, Selected Pattern Mode, and Stacked Pattern Mode are activated via the [Main Controls](./02-using-hydrogen/05-song-editor/00-song-editor#chpt.song_editor.main_controls) of the Song Editor, Song Mode and Pattern Mode are activated via the [Transport Control](./02-using-hydrogen/04-main-toolbar/00-main-toolbar#sect.main_toolbar.transport_control) section of the Main Toolbar.
:::
This mode is enabled if the



 button is shown in the [Controls](./02-using-hydrogen/05-song-editor/00-song-editor#chpt.song_editor.main_controls) of the Song Editor and allows
 you to select multiple patterns in the Song Editor and
 delete/move/copy them.

Once you have selected a part of your song you can
 **delete** it by pressing
 `Delete`. You can **move** it by simply *dragging* your
 selection to another location with your mouse, or by
 cutting (`Ctrl` + `x`) and
 pasting (`Ctrl` + `v`) using
 your keyboard. You can also **copy** your selection by either
 holding `Ctrl` while *dragging* it to a new
 location, or by copying (`Ctrl` +
 `c`) and pasting (`Ctrl` +
 `v`) using your keyboard.

Selections can be modified by holding `Ctrl` while clicking to select
 additional blocks, or to remove selected blocks from the
 selection.

The arrow keys on the keyboard can also be used, along
 with `Return`, to **select**, **move** and **copy** parts of the
 song:

- `Shift` + `↑`|`↓`|`←`|`→` can be used to make selections using the keyboard
- `Return` over a selected block will begin a move or copy
- `↑`|`↓`|`←`|`→` to move the selected cells into position
- `Return` to move the selected blocks into place
- `Ctrl` + `Return` to **copy** the selected blocks into place

Pressing `Esc` will cancel an editing operation that's in
 progress, or clear any selection.

This mode is enabled if the



 button is shown in the [Controls](./02-using-hydrogen/05-song-editor/00-song-editor#chpt.song_editor.main_controls) of the Song Editor and allows you to insert patterns by drawing -
 holding the left button while moving the mouse - blocks on
 the song canvas.

Clicking a square on the song canvas will add a pattern
 (the square will turn colorful) and clicking it again will
 remove it. Holding the mouse button down will continue
 either adding or removing patterns from under the mouse
 cursor.

Using the arrow keys on the keyboard, and the `Return`,
 will also add and remove patterns from the song.
:::note
The keyboard input cursor is usually hidden unless you press one
 of the keys listed in [Chapter 3](./01-getting-started/03-keyboard-mouse).
 You can alter this default behavior in the [General tab](./02-using-hydrogen/02-preferences/00-preferences#chpt.preferences.general_tab) of the
 Preferences.
:::
When *Song Mode*



 is selected in the [Transport Controls](./02-using-hydrogen/04-main-toolbar/00-main-toolbar#sect.main_toolbar.transport_control) of the Main Toolbar Hydrogen will play the sequence of patterns you have created in the Song Editor from left to right until it reaches the end of the song.
:::tip
By enabling [Loop Mode](./02-using-hydrogen/04-main-toolbar/00-main-toolbar#sect.main_toolbar.transport_control)



 in the Transport Controls, the playback will move seamlessly to the beginning again after reaching the end of the song.
:::
When *Pattern Mode*



 is selected in the [Transport Controls](./02-using-hydrogen/04-main-toolbar/00-main-toolbar#sect.main_toolbar.transport_control) of the Main Toolbar and



 is shown in the [Controls](./02-using-hydrogen/05-song-editor/00-song-editor#chpt.song_editor.main_controls) of the Song Editor

 Hydrogen will play the pattern that is currently selected in the Song Editor and displayed
 in the [Pattern Editor](./02-using-hydrogen/06-pattern-editor/00-pattern-editor).
:::note
When referring to **Pattern Mode** in this manual the described context works with both *Selected Pattern Mode* and *Stacked Pattern Mode*.
:::
When *Pattern Mode*



 is selected in the [Transport Controls](./02-using-hydrogen/04-main-toolbar/00-main-toolbar#sect.main_toolbar.transport_control) of the Main Toolbar and



 is shown in the [Controls](./02-using-hydrogen/05-song-editor/00-song-editor#chpt.song_editor.main_controls) of the Song Editor *Stacked Pattern Mode* is used.

Normally when composing a pattern and editing it, you'll
 listen to that single pattern looping over and over again
 while working on it. Sometimes, however, it's useful to
 hear that pattern in the context of other patterns (for
 example, other instrument parts) while working on it.

Stacked Pattern Mode will play multiple patterns simultaneously,
 on a loop. You can select or unselect a pattern by
 `Ctrl` + *left clicking* the
 pattern's name or by clicking the empty triangle in the [Sidebar](./02-using-hydrogen/05-song-editor/02-sidebar) of the Song Editor. Patterns currently playing are indicated by green triangles while those about to start and stop when playback is looped to the beginning again are indicated using yellow and red ones respectively.
:::tip
You can alter the colors of the indicators in the [Colors](./02-using-hydrogen/02-preferences/04-appearance#chpt.preferences.appearance_tab.colors) tab of the Preferences.
:::
:::note
When referring to **Pattern Mode** in this manual the described context works with both *Selected Pattern Mode* and *Stacked Pattern Mode*.
:::
