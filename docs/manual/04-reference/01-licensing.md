---
title: "Licensing"
sidebar_label: "Licensing"
---

:::warning
No one of us is a lawyer and all information found in this section should be taken with a grain of salt and come with no warranty. But we try our best to condense information we found online.
:::
When [exporting a song](./02-using-hydrogen/03-main-menu/00-main-menu#sect.main_form.export_song) or [saving](./02-using-hydrogen/03-main-menu/02-drumkits#sect.main_menu.drumkits.save_as) or [exporting](./02-using-hydrogen/03-main-menu/02-drumkits#sect.main_form.export_drumkit) a drumkit you are reusing and/or redistributing licensed sound samples. Thus you are legally obliged to comply with every license hold by the samples you used.

In this chapter we cover how Hydrogen can help you handle and manage the licenses involved and what the most common ones do imply.
:::note
Our custom data types [.h2pattern](./04-reference/02-file-types#chpt.file_types.h2pattern), [.h2song](./04-reference/02-file-types#chpt.file_types.h2song), and [.h2playlist](./04-reference/02-file-types#chpt.file_types.h2playlist) do not contain any samples and are not affected by the issues described in this chapter.
:::
:::warning
If the exact license is not available for a drumkit, do **not** assume that it is a [Creative Commons (CC)](https://creativecommons.org/about/cclicenses/) or
 other open and free license.
:::
Hydrogen does display some info dialogs in case any of the used samples holds a copyleft license, like [CC BY-SA](./04-reference/01-licensing-common#chpt.license.common_licenses.CC_BY_SA) or [GPL](./04-reference/01-licensing-common#chpt.license.common_licenses.GPL), holds one that require an attribution of the copyright holder (as CC BY* licenses do), or you are mixing different licenses during drumkit saving or export. But all this is only possible if the licenses of the involved drumkits are correctly parsed (and are one of the supported [common licenses](./04-reference/01-licensing-common)).

You can access and alter the license of the drumkit used in the current song via [Drumkits > Properties](./02-using-hydrogen/03-main-menu/02-drumkits#sect.main_menu.drumkits.properties) in the main menu or the license of a stock kit via the [Sound Library](./02-using-hydrogen/07-sound-library#chpt.sound_library.drumkits). In addition, you can view all licenses of the contained samples which is especially helpful when mixing instruments of different drumkits in the current song.

![Figure 20.1. Dialog to view and alter the Properties of a Drumkit](/img/docs/generated_en/soundLibraryPropertiesDialog.png)
:::note
Samples loaded directly into Hydrogen using the [Layer section of the Instrument Editor](./02-using-hydrogen/08-instrument-editor-layers#chpt.instrument_editor.layers.layers) are not associated to any drumkit until you [save](./02-using-hydrogen/03-main-menu/02-drumkits#sect.main_menu.drumkits.save) it and will be handled as if they are unlicensed. Please take extra care of checking which licenses they are distributed with and what implication their presence has for your song/drumkit.
:::
