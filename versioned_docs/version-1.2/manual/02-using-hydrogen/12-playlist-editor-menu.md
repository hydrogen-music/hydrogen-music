---
title: "Playlist Editor Menu"
sidebar_label: "Playlist Editor Menu"
---

- **Add song to Playlist**: let's you select a song to be added to the current playlist.
- **Add current song to Playlist**: adds the currently loaded song to the current playlist.
- **Remove selected song from Playlist**: deletes the selected song from the current playlist.
- **New Playlist**: creates a new and empty playlist.
- **Open Playlist**: opens an existing playlist (file of type [.h2playlist](./04-reference/02-file-types#chpt.file_types.h2playlist)). :::tip In the [General](./02-using-hydrogen/02-preferences/00-preferences#fig.preferences.general_tab) tab of the Preferences dialog you can configure Hydrogen to reload the last used playlist. :::
- **Save Playlist**: saves all changes done to the current playlist.
- **Save Playlist as**: saves the current playlist into a file (of type [.h2playlist](./04-reference/02-file-types#chpt.file_types.h2playlist)) and location of your choice.

- **Add Script to selected song**: associates a BASH script (file of type **.sh**) to the currently selected song of the playlist.
- **Edit selected Script**: opens the selected script with your default editor (in an external window). :::note When using the function for the first time Hydrogen will ask you which program to use as your default editor. :::
- **Remove selected Script**: removes the selected script from the playlist.
- **Create a new Script**: creates a new and empty **.sh** script at a location of your choice. :::note The default one is the `scripts` folder in the Hydrogen data directory (usually `$HOME/.hydrogen/data/`). :::
