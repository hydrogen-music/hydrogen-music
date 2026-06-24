---
title: "Pitch Shifting"
sidebar_label: "Pitch Shifting"
---

![Figure 12.3. The Pitch Shifting Section of the Playlist Editor](/img/docs/generated_en/SampleEditor_PitchShift.png)

This section of the Sample Editor allows you to use **Rubber Band** - a tool that can change the tempo of a sample without changing the sample's pitch (and vice versa) - to tweak your sample.
:::note
These options are only available if Rubber Band support was either compiled into Hydrogen or was properly configures in the [General](./02-using-hydrogen/02-preferences/00-preferences#chpt.preferences.general_tab) tab of the Preferences.
 After installing Rubber Band you should check if the path to the **rubberband cli** is
 configured correctly (see [Section 5.1](./02-using-hydrogen/02-preferences/00-preferences#chpt.preferences.general_tab)). If neither is the case, all associated widgets will be disabled.

When **Sample length to beat** is set to `off` the whole Rubber Band functionality will be disabled.
:::
- **Sample length to beat**: specifies the length of the resulting sample (after Rubber Band was applied to it). After choosing a value other than `off` the length ratio between the original and the resulting sample will be displayed to the right of the combo box under **new sample length**. To ease the process of finding a proper value, the checkbox will be highlighted *green* if the length is more or less the same, *yellow* if there are larger changes, and *red* if there are significant changes. :::tip This should be set to the length of the part of the sample between the Start and End marker, expressed in number of beats. ::: :::note The beat length does dependent on the current tempo of the song. If it is changed, the samples need to be recalculated using Rubber Band again. When [exporting a song](./02-using-hydrogen/03-main-menu/00-main-menu#sect.main_form.export_song) all required recalculations will be done automatically. But while using standard playback the button in the [Main Toolbar](./02-using-hydrogen/04-main-toolbar/02-bpm-metronome) has to be activated to enable the recalculation of all samples on the fly. :::
- **Pitch**: specifies the resulting pitch of the sample, expressed in `semitones,cent`. :::note This pitch will affect all instances of the sample in addition to the [Pitch Shift Parameters](./02-using-hydrogen/08-instrument-editor#chpt.instrument_editor.pitch_shift_parameters) in the Instrument Editor and the [NoteKey](./02-using-hydrogen/06-pattern-editor/02-note-properties#chpt.pattern_editor.note_properties.notekey) property of each individual note. :::
- **Crispness**: fine-tunes the processing algorithm used by Rubber Band. It does not affect tempo or pitch, but changes the way the sample sounds.
