---
title: "Main Menu"
sidebar_label: "Main Menu"
---

![Figure 6.1. The Main Menu](/img/docs/generated_en/MainMenu.png)

This menu offers file
 related functions.
:::note
If you are using Hydrogen within a NSM session, some of the options below will be called and behave differently (see [Section 4.5.1](./02-using-hydrogen/01-overview/04-session-management#chpt.overview.session_management.nsm) for details).
:::
- **New**: creates a new and empty song. :::note Prior to version 1.2 of Hydrogen new songs were based on `DefaultSong.h2song` in Hydrogen's data folder and all [backups](./02-using-hydrogen/02-preferences/00-preferences#chpt.preferences.general_tab.autosaves) of unsaved changes were associated with it. This had the unfortunate downside that it was quite easy to lose all changes made in a new song in case you forget to change it. Since 1.2 new songs are not associated with any file anymore and Hydrogen makes sure the backup file generated does not exist yet and no data gets overwritten. In addition, when working on a newly created song and closing the application without saving the changes, e.g. due to a power outage, Hydrogen is now capable of restoring these changes from the backup file and prompts you at the beginning of the next session whether it should do so. If you are used to altering the `DefaultSong.h2song` and use it as a template, you can still do the same by [opening](./02-using-hydrogen/03-main-menu/00-main-menu#sect.main_menu.projects.open) and [saving](./02-using-hydrogen/03-main-menu/00-main-menu#sect.main_menu.projects.save_as) it using a different name. :::
- **Song Properties**: sets general properties of the song such as name, author, [license](./04-reference/01-licensing), and generic notes.
- **Open**: opens an existing song (a [.h2song](./04-reference/02-file-types#chpt.file_types.h2song) file).
- **Open Demo**: opens one of the demo songs shipped with Hydrogen. :::note The demo songs are stored in `$INSTALL_PATH/share/hydrogen/data/demo_songs`). :::
- **Open Recent**: opens a menu showing the last used songs (ordered from most recent to least recent).
- **Save**: saves changes to current song.
- **Save As**: saves current song as [.h2song](./04-reference/02-file-types#chpt.file_types.h2song) file to a path of your choice. :::tip In order for Hydrogen to automatically list it in the [Songs section of the Sound Library](./02-using-hydrogen/07-sound-library-songs), you have to store it in the `songs` subfolder of Hydrogen data directory (`$HOME/.hydrogen/data/songs/`). :::
- **Open Pattern**: opens a pattern (a [.h2pattern](./04-reference/02-file-types#chpt.file_types.h2pattern) file) belonging to the current drumkit.
- **Export Pattern As**: saves a pattern as a [.h2pattern](./04-reference/02-file-types#chpt.file_types.h2pattern) file. :::tip In order for Hydrogen to automatically list it in the [Patterns section of the Sound Library](./02-using-hydrogen/07-sound-library-patterns), you have to store it in `$HOME/.hydrogen/data/patterns/drumkit_name/`. :::
- **Export MIDI File**: exports the current song in MIDI format.
- **Export Song**: exports the current song into an audio file.The **Export mode** option `Export to a single track` will export one stereo downmix of your song - the master output. `Export to separate tracks` will create files for each instrument/track. `Both` will create a stereo downmix as well as audio files for all individual instruments. For audio formats *FLAC*, *Ogg/Vorbis*, *Ogg/Opus*, and *MP3* the option `Compression Level` instead of `Samplerate` and `SampleDepth` is available. For *FLAC* it trades off export time against resulting file size. For all other formats (all lossy compression ones) it trades off audio quality against resulting file size.
- **Export LilyPond File**: exports the current song to LilyPond. :::warning It has the following limitations: Only the *GMRockKit* and no triplets are supported. :::
- **Quit**: exits Hydrogen.
