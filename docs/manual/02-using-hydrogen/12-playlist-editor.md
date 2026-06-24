---
title: "Playlist Editor"
sidebar_label: "Playlist Editor"
---

![Figure 15.1. The Playlist Editor with Demo Songs loaded](/img/docs/PlaylistEditor.png)

The Playlist Editor allows you to group various songs into a
 playlist and is intended to ease using Hydrogen live on stage. You can access this window via the [View](./02-using-hydrogen/03-main-menu/04-view) option of the Main Menu.

Using the [menu](./02-using-hydrogen/12-playlist-editor-menu) you can add various songs to the playlist and you can arrange their order using the arrow buttons to the right of the widget.
:::note
When playback reaches the end of one song the next one won't be automatically selected and played! You can select an arbitrary song in the playlist using double *left-clicking*, by pressing the hotkeys [`F5`](./04-reference/03-shortcuts#chap.shortcuts.f5) and [`F6`](./04-reference/03-shortcuts#chap.shortcuts.f6), or the corresponding [OSC](./02-using-hydrogen/14-osc-api-commands#chpt.osc.command.playlist_song) commands.

Also note that selecting a song won't start playback automatically.
:::
![From left to right: rewind, play and pause, stop, and fast forward.](/img/docs/PlaylistEditorControls.png)

At the bottom of the widget you find a couple of **buttons** you already know from the [Transport Control](./02-using-hydrogen/04-main-toolbar/00-main-toolbar#sect.main_toolbar.transport_control) in the Main Toolbar. They do have the same purposes of starting, pausing, and stopping the playback as well as moving the transport position backwards or forwards by one pattern.
:::note
While focusing the Playlist Editor instead of the main UI the usual [shortcuts](./04-reference/03-shortcuts) of Hydrogen, like [`Space`](./04-reference/03-shortcuts#chap.shortcuts.space) for starting/pausing playback, won't work.
:::
In addition, the Playlist Editor allows you to add **scripts** executed right *before* the
 selected song is loaded.
:::note
This means that e.g. [OSC](./02-using-hydrogen/14-osc-api-commands#chpt.osc.commands.all_messages) commands can not be used to change the state of Hydrogen as the subsequent loading of the associated song would reset it immediately.
:::
The scripts supported in the Playlist Editor are BASH scripts and one has to both add a script to a song as well as to check the corresponding box in the *exec Script* column in order to have it by your computer whenever you switch to the particular song.
:::warning
Scripts are not supported in the Windows version of Hydrogen.
:::
