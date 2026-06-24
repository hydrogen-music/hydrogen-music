---
title: "Timeline"
sidebar_label: "Timeline"
---

![Picture showing the Timeline above the Song Ruler.](/img/docs/generated_en/songEditorTimeline.png)

The majority of songs consist of several parts (intro, verse, chorus ...) and
 often these parts will have a different tempo. Hydrogen provides an easy way
 to let you change the tempo at the beginning of any column. This is
 done by adding *Tempo Markers* to your song.

To add a Tempo Marker, you first need to show the Timeline by clicking the

 button at the bottom of the Song Editor or via the [View](./02-using-hydrogen/03-main-menu/04-view) element of the Main Menu and enable it using the

 button.
:::note
Please note that the Timeline is neither available in [Pattern Mode](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.pattern_mode) nor in the presence of a [JACK Timebase controller](./02-using-hydrogen/04-main-toolbar/04-jack-control#sect.main_toolbar.jack_control.timebase_red).
:::
Now, simply *left-click* this widget in the middle or upper part and a
 window will pop up where you can enter the new tempo.

Once you have entered the new tempo and clicked OK, the tempo change will
 show up on the Timeline. If you click the Tempo Marker again you can edit
 the tempo, change the bar, or delete it.
:::note
When disabling the Timeline using the



 button, the tempo resets to the previous value used before enabling the Timeline. This one will also be used for all parts of the song located prior to the first Tempo Marker. To indicate this behavior a special, faint Tempo Marker is shown at the first column that can *not* be removed by the user. You can, however, overwrite it with your custom tempo by clicking it and placing a regular Tempo Marker on top of it.
:::
