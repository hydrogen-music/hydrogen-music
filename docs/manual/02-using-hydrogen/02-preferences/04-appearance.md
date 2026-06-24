---
title: "Appearance"
sidebar_label: "Appearance"
---

The settings available in the *Appearance* tab let you modify the look of Hydrogen and are treated differently than the ones found in other tabs. While the latter are stored in the `hydrogen.conf` file in Hydrogen's data folder, the appearance is stored in [.h2theme](./04-reference/02-file-types#chpt.file_types.h2theme) files in the dedicated `theme` subfolder. The idea is that while the remaining settings are tailored to your local setup, a theme is something that is easily portable. E.g. you can create a custom dark theme and share it with the Hydrogen community without them having to adopt it to their local setup.

This can be done using the


 and



 buttons. All changes applied to a theme (unless indicated otherwise in the dialog) will take effect immediately. If you are satisfied with the result, accept the dialog by clicking the OK button to save it. If you, however, want to reset all options to their state encountered when opening the dialog or importing last theme, hit the



 button or close the dialog.

![Figure 5.5. The Interface Tab](/img/docs/generated_en/preferencesInterfaceTab.png)

The *Interface* tab covers the overall appearance of Hydrogen.

- **Style**: specifies a certain look of GUI elements, like menus, scrollbars, and dialog windows. :::tip Using this option you might be able to better integrate Hydrogen into your operating system. :::
- **Meters falloff speed**: specifies how fast the visual update of the peak values shown in the [Instrument Channel Strips](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips), [Component Channel Strips](./02-using-hydrogen/10-mixer/01-component-strips), and [Master Fader Strip](./02-using-hydrogen/10-mixer/03-master-fader) will be done.
- **Default interface layout**: specifies whether the GUI of Hydrogen will be arranged in [Single Pane mode](./02-using-hydrogen/01-overview/00-overview#fig.UI_overview) or [Tabbed mode](./02-using-hydrogen/01-overview/00-overview#fig.tabbed_UI_overview) (see [Main User Interface](./02-using-hydrogen/01-overview/00-overview#chpt.overview.gui) for details). :::note In order for this setting to take effect, Hydrogen has to be restarted. :::
- **High-resolution display scaling**: specifies whether the underlying bitmap graphics of the GUI should be scaled to larger sizes by Qt in order for Hydrogen to look nice with your system's resolution settings. :::note In order for this setting to take effect, Hydrogen has to be restarted. :::
- **Icon color**: while the color of all button labels can be set in the [Colors](./02-using-hydrogen/02-preferences/04-appearance#chpt.preferences.appearance_tab.colors) tab, the icons hold the color used in the corresponding SVG file and can not be altered freely. To still allow you to change the overall colors conveniently, Hydrogen is shipped with all icons available in either `Black` and `White` color.
- **Coloring method for Song Editor elements**: determines the coloring of the grid boxes indicating the presence of a pattern in the [Song Editor](./02-using-hydrogen/05-song-editor/00-song-editor). The options available are: `Automatic`: uses as many colors as there are patterns in the song.
- `Custom`: uses a certain number of colors in a repeated way.

By chosing `Custom` two more settings will become available:

- **Number of colors in Song Editor**: how many different colors should be used.
- **Selected colors**: a list of color buttons. Clicking one will open a dialog allowing you to change its color.

![Figure 5.6. The Colors Tab](/img/docs/generated_en/preferencesColorsTab.png)

The *Colors* tab exposes most of the colors used within Hydrogen.

You can select a color by clicking its name in the tree you find on the left side. It is grouping the individual colors into

- **General**: basic Qt colors. Most of them are used in many parts of the GUI. But some of them might be not used at all. So, don't worry in case altering one of these does not result in visual changes.
- **Widgets**: colors in small and interactive elements of the GUI, like buttons or combo boxes.
- **Song Editor**: colors specific to the [Song Editor](./02-using-hydrogen/05-song-editor/00-song-editor).
- **Pattern Editor**: colors specific to the [Pattern Editor](./02-using-hydrogen/06-pattern-editor/00-pattern-editor).

Once selected you can change a color by either clicking the large colored rectangle in the upper right part of the tab (which opens a color dialog) or by using the spinboxes and sliders in the lower right part. The latter represent the colors components according to the RGB as well as the HSV color model.

![Figure 5.7. The Font Tab](/img/docs/generated_en/preferencesFontTab.png)

The *Font* tab contains all options affecting strings, characters, and numbers displayed in the GUI.

- **Application font**: specifies the font family used for headings, larger labels, and most parts of the dialogs and popups.
- **Item font**: specifies the font family used for smaller elements, like the name of patterns in the [Sidebar](./02-using-hydrogen/05-song-editor/02-sidebar) of the Song Editor or the name of the samples in the [Layers view](./02-using-hydrogen/08-instrument-editor-layers) of the Instrument Editor.
- **Widget font**: specifies the font family used for small and interactive elements of the GUI, like buttons.
- **Font size**: accessibility option to increase or decrease the overall font size of Hydrogen.
