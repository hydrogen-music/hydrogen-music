---
title: "Keyboard and Mouse"
sidebar_label: "Keyboard and Mouse"
---

The Hydrogen user interface is designed so that it can be
 used entirely with the mouse, with the exception of text entry.

Most actions are performed with the left mouse button (or mouse wheel)
 and implement what should be the most obvious behaviour for any
 control. The right mouse button may sometimes perform an alternate
 action or brings up a context menu. Some common controls also have
 alternate actions accessed by clicking while holding a modifier key:

- `Ctrl` + *left click* : restore default value of knob or fader.
- `Shift` + *left click* : bind a [MIDI Event](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.events) to MIDI-learnable widget (see [MIDI-learnable Widgets](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.learnable)).
- `Shift` + *mouse wheel*|`↑`|`↓` : change values of rotaries and faders at a faster pace.

All rotaries and faders can also be set by using the keyboard. First, you have to click the widget for it to be focussed, indicated by a coloured highlight (orange per default). Now, you can enter numerical input via your keyboard. All numbers and dots are concatenated. If you want to reset your input or start a different one you can either press `ESC` or wait a couple of seconds.

The keyboard can also be used for navigating and editing in
 the [Pattern](./02-using-hydrogen/06-pattern-editor/00-pattern-editor) and [Song Editors](./02-using-hydrogen/05-song-editor/00-song-editor), using a combination of

- **`↑`|`↓`|`←`|`→`** : move the keyboard input cursor's position, or adjust values under the cursor.
- **`Shift` + `↑`|`↓`|`←`|`→`** : can be used to make selections of notes or pattern groups as if the mouse had been dragged over them.
- **`Enter` and `Return`** : generally performs the same action as a mouse click, but can also start or end a move (or copy) of items in the same way a mouse drag would.
- **`Tab` and `Shift` + `Tab`** : move between the Pattern, Song and Note Property Editor.
- **`Delete`** : delete notes or patterns.
- **`Esc`** : cancels an ongoing selection, move or copy.
:::note
The keyboard input cursor is hidden from view until one of
 the above keys is pressed. This keeps the display clear and
 uncluttered when using the mouse. You can alter this default behavior in the [General tab](./02-using-hydrogen/02-preferences/00-preferences#chpt.preferences.general_tab) of the Preferences.
:::
Most other keys on the keyboard can be used to play [samples](./04-glossary#def.sample) (see [Virtual Keyboard](./02-using-hydrogen/01-overview/02-virtual-keyboard)).
