---
title: "OSC Commands"
sidebar_label: "OSC Commands"
---

The syntax for sending the commands is
```bash
$ **oscsend localhost OSC_PORT_NUMBER COMMAND_URL COMMAND_TYPE COMMAND_ARGUMENT**
```
with the supported types

- **' '**: no argument required
- **i**: int32
- **f**: float32
- **s**: OSC-string (ASCII)

Detailed description of the formats and conventions used in the
 tables below

- **ff**: two types placed right after each other indicated that the command requires two distinct arguments.
- **' ',[f]**: two types separated by a comma indicate that two versions of the command are available. To support **TouchOSC** all commands expecting no parameter are available in an alternative version requiring a float too. In the latter version the argument will be ignored and it is placed in squared brackets *[f]* to indicate its inferiority compared to the non-parametric version.
- **[0,]**: limitations in possible values of the input parameters are indicated in the *range* column. For continuous values squared brackets *[LOWER_LIMIT,UPPER_LIMIT]* are used and a limit will be left empty when it is associated with a "natural" boundary, like the total number of instrument or pattern.
- `{-1;0;1}`: sets of discrete values are shown in curly brackets and separated semicolon ```{VALUE;...}``` and usually feature the most convenient input options.
- **1.0**: also in order to support **TouchOSC** all numerical input has to be passed as type float while most of these numbers will be rounded to integers internally. For all true float inputs the *range* column uses a floating point representation of the limits, like 1.0 instead of 1.
- **X**: all commands ending with a */X/* require this character to be replaced by an integer and do affect only the corresponding instrument, e.g. **oscsend localhost 9000 /Hydrogen/PAN_ABSOLUTE/1/ f 0.3**. The instrument number starts at 1 and is determined by the order of the instrument in the mixer and pattern editor.
Table 17.1. All OSC Messages
| URL | type | range | description |
| --- | --- | --- | --- |
| /Hydrogen/**PLAY**/ | ' ',[f] | | Starts playback. |
| /Hydrogen/**PAUSE**/ | ' ',[f] | | Stops playback. |
| /Hydrogen/**STOP**/ | ' ',[f] | | Stops playback and moves the playhead to the beginning of the song. |
| /Hydrogen/**PLAY_PAUSE_TOGGLE**/ | ' ',[f] | | Works the same as [/Hydrogen/PLAY/](./02-using-hydrogen/14-osc-api-commands#chpt.osc.command.play) if the playback has not started yet and same as. [/Hydrogen/PAUSE/](./02-using-hydrogen/14-osc-api-commands#chpt.osc.command.pause) otherwise. (The playhead will not return to the start of the song, but will stay at its current position). |
| /Hydrogen/**PLAY_STOP_TOGGLE**/ | ' ',[f] | | Works the same as [/Hydrogen/PLAY/](./02-using-hydrogen/14-osc-api-commands#chpt.osc.command.play) if the playback has not started yet and same as. [/Hydrogen/STOP/](./02-using-hydrogen/14-osc-api-commands#chpt.osc.command.stop) otherwise. |
| /Hydrogen/**RECORD_READY**/ | ' ',[f] | | Toggles [recording](./02-using-hydrogen/01-overview/03-recording) (same as pressing the [record button](./02-using-hydrogen/04-main-toolbar/00-main-toolbar#sect.main_toolbar.transport_control)) if the playback has not started yet. |
| /Hydrogen/**RECORD_STROBE_TOGGLE**/ | ' ',[f] | | Toggles [recording](./02-using-hydrogen/01-overview/03-recording) (same as pressing the [record button](./02-using-hydrogen/04-main-toolbar/00-main-toolbar#sect.main_toolbar.transport_control)). |
| /Hydrogen/**RECORD_STROBE**/ | ' ',[f] | | Activates [recording](./02-using-hydrogen/01-overview/03-recording). |
| /Hydrogen/**RECORD_EXIT**/ | ' ',[f] | | Deactivates [recording](./02-using-hydrogen/01-overview/03-recording). |
| /Hydrogen/**NEXT_BAR**/ | ' ',[f] | | Moves the playhead to the next pattern/bar. |
| /Hydrogen/**PREVIOUS_BAR**/ | ' ',[f] | | Moves the playhead to the previous pattern/bar. |
| /Hydrogen/**SELECT_NEXT_PATTERN**/ | f | [0,] | If Hydrogen is in [Pattern Mode](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.pattern_mode), switch to pattern *f*. If Hydrogen is in [Song Mode](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.song_mode), the command will have no effect. |
| /Hydrogen/**SELECT_ONLY_NEXT_PTTERN**/ | f | | If Hydrogen is in [Stacked Pattern Mode](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.stacked), play back pattern *f* and stop all other patterns currently playing. In [Selected Pattern Mode](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.pattern_mode) this action behaves like [/Hydrogen/SELECT_NEXT_PATTERN/](./02-using-hydrogen/14-osc-api-commands#chpt.osc.command.select_next_pattern). If Hydrogen is in [Song Mode](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.song_mode), the command will have no effect. |
| /Hydrogen/**SELECT_AND_PLAY_PATTERN**/ | f | [0,] | Works as [/Hydrogen/SELECT_NEXT_PATTERN/](./02-using-hydrogen/14-osc-api-commands#chpt.osc.command.select_next_pattern) combined with [/Hydrogen/PLAY/](./02-using-hydrogen/14-osc-api-commands#chpt.osc.command.play). |
| /Hydrogen/**RELOCATE**/ | f | [0,] | If Hydrogen is in [Song Mode](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.song_mode), locates the playhead to pattern number *f*. If Hydrogen is in [Pattern Mode](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.pattern_mode), locates the playhead to the beginning of the current pattern. |
| /Hydrogen/**BPM**/ | f | | Sets the current tempo to *f*. Note that this command will have no effect if Hydrogen is both in [Song Mode](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.song_mode) and the [Timeline](./02-using-hydrogen/05-song-editor/03-timeline) is activated. |
| /Hydrogen/**BPM_DECR**/ | f | | Decreases the current tempo by *f*. Note that this command will have no effect if Hydrogen is both in [Song Mode](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.song_mode) and the [Timeline](./02-using-hydrogen/05-song-editor/03-timeline) is activated. |
| /Hydrogen/**BPM_INCR**/ | f | | Increases the current tempo by *f*. Note that this command will have no effect if Hydrogen is both in [Song Mode](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.song_mode) and *Tempo Marker* has been passed. |
| /Hydrogen/**BEATCOUNTER**/ | ' ',[f] | | Calculates the average time passing between successive encounters of this commands and uses it to set the current tempo using the [Beat Counter](./02-using-hydrogen/04-main-toolbar/01-tap-tempo#sect.main_toolbar.tap_tempo_beat_counter.beat_counter). |
| /Hydrogen/**TAP_TEMPO**/ | ' ',[f] | | Another command calculating the average time passing between successive encounters of this commands and uses it to set the current tempo using [Tap Tempo](./02-using-hydrogen/04-main-toolbar/01-tap-tempo#sect.main_toolbar.tap_tempo_beat_counter.tap_tempo). |
| /Hydrogen/**TIMELINE_ACTIVATION**/ | f | `{0,1}` | Activates the [Timeline](./02-using-hydrogen/05-song-editor/03-timeline) if *f* is not zero and deactivates it otherwise. |
| /Hydrogen/**TIMELINE_ADD_MARKER**/ | ff | [0,] [10,400] | Adds a Tempo Marker to the [Timeline](./02-using-hydrogen/05-song-editor/03-timeline). The first argument specifies the pattern/bar to at the marker to and the second its tempo. |
| /Hydrogen/**TIMELINE_DELETE_MARKER**/ | f | [0,] | Deletes a Tempo Marker at pattern/bar *f* on the [Timeline](./02-using-hydrogen/05-song-editor/03-timeline). |
| /Hydrogen/**MUTE**/ | ' ',[f] | | [Mutes](./04-glossary#def.mute) the [Master output](./02-using-hydrogen/10-mixer/03-master-fader) (sequencer keeps running). |
| /Hydrogen/**UNMUTE**/ | ' ',[f] | | Unmutes the [Master output](./02-using-hydrogen/10-mixer/03-master-fader) (sequencer keeps running). |
| /Hydrogen/**MUTE_TOGGLE**/ | ' ',[f] | | Toggles the muting of the [Master output](./02-using-hydrogen/10-mixer/03-master-fader) (sequencer keeps running). |
| /Hydrogen/**MASTER_VOLUME_ABSOLUTE**/ | f | [0.0,1.5] | Sets the volume of the [Master fader](./02-using-hydrogen/10-mixer/03-master-fader). |
| /Hydrogen/**MASTER_VOLUME_RELATIVE**/ | f | `{-1;0;1}` | Changes the [Master output volume](./02-using-hydrogen/10-mixer/03-master-fader), relative to the current setting. For a value of `0` it sets the volume of the master fader to 0. For a value of `1` it increases its volume by 0.05 and for all other values it decreases it by 0.05. (`-1`: -0.05 ,`0`: 0 ,`1`: +0.05) |
| /Hydrogen/**STRIP_VOLUME_ABSOLUTE/X**/ | f | [0.0,1.5] | See [/Hydrogen/MASTER_VOLUME_ABSOLUTE/](./02-using-hydrogen/14-osc-api-commands#chpt.osc.command.master_volume_absolute), but applies to the [Instrument Channel Strip](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips) provided in the OSC command path as *X*. Please not that this only affects [Instrument Channel Strips](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips). Strip volume control for [Component Channel Strips](./02-using-hydrogen/10-mixer/01-component-strips) is not implemented yet). |
| /Hydrogen/**STRIP_VOLUME_RELATIVE/X**/ | f | `{-1;0;1}` | See [/Hydrogen/MASTER_VOLUME_RELATIVE/](./02-using-hydrogen/14-osc-api-commands#chpt.osc.command.master_volume_relative), but applies to the [Instrument Channel Strip](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips) provided in the OSC command path as *X*. Please not that this only affects [Instrument Channel Strips](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips). Strip volume control for [Component Channel Strips](./02-using-hydrogen/10-mixer/01-component-strips) is not implemented yet). |
| /Hydrogen/**PAN_ABSOLUTE/X**/ | f | [0.0,1.0] | Sets the pan of instrument strip *X*. |
| /Hydrogen/**PAN_RELATIVE/X**/ | f | `{-1;1}` | Changes the [pan](./04-glossary#def.pan) of the [Instrument Channel Strip](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips) *X*, relative to the current value. For a value of `1` it increase the pan by 0.05. For all other values it decreases it by 0.05. (`-1`: -0.05 , `1`: +0.05) |
| /Hydrogen/**FILTER_CUTOFF_LEVEL_ABSOLUTE/X**/ | f | [0,127] | For a value of `0` it sets the [Filter Cutoff](./02-using-hydrogen/08-instrument-editor#chpt.instrument_editor.filter) of the [Instrument Channel Strip](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips) *X* to 0. For all other values it sets the cutoff to the provided number divided by 127.0. Please note that this parameter is not displayed anywhere in the Mixer but in the Instrument Rack. |
| /Hydrogen/**STRIP_MUTE_TOGGLE/X**/ | '',[f] | | Toggles muting of [Instrument Channel Strip](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips) *X*. Optional input argument will be ignored. |
| /Hydrogen/**STRIP_SOLO_TOGGLE/X**/ | '',[f] | | Toggles soloing of [Instrument Channel Strip](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips) *X*. Optional input argument will be ignored. |
| /Hydrogen/**INSTRUMENT_PITCH**/ | ff | [0,] [-24.5,24.5] | Sets the [Pitch](./02-using-hydrogen/08-instrument-editor#chpt.instrument_editor.pitch_shift_parameters) of the instrument specified using the first parameter *f* to the second parameter *f*. |
| /Hydrogen/**PLAYLIST_SONG**/ | f | [0,] | Opens song *f* of the [Playlist](./02-using-hydrogen/12-playlist-editor). |
| /Hydrogen/**PLAYLIST_NEXT_SONG**/ | ' ',[f] | | Opens the next song in the [Playlist](./02-using-hydrogen/12-playlist-editor). |
| /Hydrogen/**PLAYLIST_PREV_SONG**/ | ' ',[f] | | Opens the previous song in the [Playlist](./02-using-hydrogen/12-playlist-editor). |
| /Hydrogen/**UNDO_ACTION**/ | ' ',[f] | | Undoes the previous GUI action (not OSC command!). |
| /Hydrogen/**REDO_ACTION**/ | ' ',[f] | | Redoes the previously undone GUI action (not OSC command!). |
| /Hydrogen/**JACK_TRANSPORT_ACTIVATION**/ | f | `{0;1}` | Deactivated the [JACK transport](./02-using-hydrogen/02-preferences/01-audio-system#sect.preferences.jack) support for a value of `0` and activates it for all others. |
| /Hydrogen/**JACK_TIMEBASE_MASTER_ACTIVATION**/ | f | `{0;1}` | Unregisters Hydrogen as JACK Timebase controller for a value of `0` and registers it for all others. |
| /Hydrogen/**SONG_MODE_ACTIVATION**/ | f | `{0;1}` | Deactivated [Song Mode](./02-using-hydrogen/05-song-editor/01-editor-modes#chpt.song_editor.editor_modes.song_mode) for a value of `0` and activates it for all others. |
| /Hydrogen/**LOOP_MODE_ACTIVATION**/ | f | `{0;1}` | Deactivated [looped playback](./02-using-hydrogen/04-main-toolbar/00-main-toolbar#sect.main_toolbar.transport_control) for a value of `0` and activates it for all others. |
| /Hydrogen/**TOGGLE_METRONOME**/ | ' ',[f] | | Toggles the [metronome](./02-using-hydrogen/04-main-toolbar/02-bpm-metronome). |
| /Hydrogen/**SELECT_INSTRUMENT**/ | f | [0,] | Selects a specific instrument in the drumkit. |
| /Hydrogen/**NEW_SONG**/ | s | | Creates an empty song which will be stored at the absolute path *s*. |
| /Hydrogen/**OPEN_SONG**/ | s | | Opens an existing song associated with the absolute path *s*. |
| /Hydrogen/**SAVE_SONG**/ | ' ',[f] | | Saves the current song. |
| /Hydrogen/**SAVE_SONG_AS**/ | s | | Saves the current song to the absolute path *s*. |
| /Hydrogen/**SAVE_PREFERENCES**/ | ' ',[f] | | Saves the preferences. |
| /Hydrogen/**QUIT**/ | ' ',[f] | | Exits Hydrogen. |
| /Hydrogen/**NEW_PATTERN**/ | s | | Creates an empty pattern of name *s*. |
| /Hydrogen/**OPEN_PATTERN**/ | s | | Opens an existing pattern at the absolute path *s*. |
| /Hydrogen/**REMOVE_PATTERN**/ | f | | Removes pattern number *f*. |
| /Hydrogen/**CLEAR_PATTERN**/ | ' ',[f] | | Removes all notes of the selected pattern. |
| /Hydrogen/**CLEAR_SELECTED_INSTRUMENT**/ | ' ',[f] | | Removes all notes of the selected pattern associated with the currently selected instrument. |
| /Hydrogen/**CLEAR_INSTRUMENT**/ | f | [0,] | Works as [/Hydrogen/CLEAR_SELECTED_INSTRUMENT/](./02-using-hydrogen/14-osc-api-commands#chpt.osc.command.clear_selected_instrument) but on instrument *f* instead. |
| /Hydrogen/**NOTE_ON**/ | ff | [36,127] [0.0,1.0] | Handled like a [MIDI NOTE-ON](./02-using-hydrogen/13-midi/01-note-rendering) event without triggering [Actions](./02-using-hydrogen/13-midi/03-controlling). The first parameter *f* determines the pitch of the note and the second *f* its velocity. |
| /Hydrogen/**NOTE_OFF**/ | f | [36,127] | Handled like a [MIDI NOTE-OFF](./02-using-hydrogen/13-midi/01-note-rendering) event. The provided parameter *f* determines the pitch of the note. |
| /Hydrogen/**SONG_EDITOR_TOGGLE_GRID_CELL**/ | ff | | Toggles a pattern in the pattern grid of the [Song Editor](./02-using-hydrogen/05-song-editor/00-song-editor). The first argument will be used as column and the second as row. |
| /Hydrogen/**LOAD_DRUMKIT**/ | s,sf | | Loads a drumkit into the current song. *s* can be either the name of a drumkit already present in the [Sound Library Editor](./02-using-hydrogen/07-sound-library) or an absolute path pointing to an extracted drumkit folder (containing both `drumkit.xml` file as well as all required samples). The second argument is optional and specifies whether (`0`) or not (any other value) instruments of the old kit should be kept in case newly loaded one has less and there are note present for that particular instrument in a pattern. |
| /Hydrogen/**EXTRACT_DRUMKIT**/ | s,ss | | Inflates a [compressed drumkit](./04-reference/02-file-types#chpt.file_types.h2drumkit) found at the absolute path *s* (first argument). The second argument specifies the target path to extract the kit to. It's optional and if omitted the kit will be extracted into Hydrogen's user drumkit folder. |
| /Hydrogen/**VALIDATE_DRUMKIT**/ | s,sf | | Validates a [compressed](./04-reference/02-file-types#chpt.file_types.h2drumkit) or inflated drumkit found at the absolute path *s* against the current drumkit format. When setting the second arguent to `1` the kit will be validated against all former drumkit definitions as well. |
| /Hydrogen/**UPGRADE_DRUMKIT**/ | s,ss | | Upgrades a [compressed](./04-reference/02-file-types#chpt.file_types.h2drumkit) or inflated drumkit found at the absolute path *s* to the latest drumkit format. The second argument specifies the target path to upgraded kit will be stored in. It's optional and if omitted the kit will be upgraded inplace. |
