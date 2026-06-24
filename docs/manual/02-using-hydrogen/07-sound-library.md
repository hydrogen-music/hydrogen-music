---
title: "Sound Library"
sidebar_label: "Sound Library"
---

![Figure 10.1. The Soundlibrary](/img/docs/generated_en/SoundLibrary.png)

The Sound Library helps you manage your [drumkits](./02-using-hydrogen/01-overview/01-drumkit-concept),
 favourite patterns, and favourite songs. When making new songs or drumkits, it allows you to reuse and mix instruments as well as patterns from other kits and songs.

It is located in the Instrument Rack in the lower right corner of Hydrogen, which can be shown or hidden via the [View](./02-using-hydrogen/03-main-menu/04-view) option in the Main Menu or via the [corresponding button](./02-using-hydrogen/04-main-toolbar/05-gui-state) in the Main Toolbar. The Instrument Rack does either show the [Instrument Editor](./02-using-hydrogen/08-instrument-editor) or the Sound Library depending on what is chosen in the [View](./02-using-hydrogen/03-main-menu/04-view) option in the Main Menu or the corresponding buttons at the top of the Instrument Rack.

The list of [drumkits](./02-using-hydrogen/01-overview/01-drumkit-concept) comprises kits present at both system and user level as well as those loaded via [command-line option](./02-using-hydrogen/01-overview/05-command-line) or [OSC command](./02-using-hydrogen/14-osc-api-commands#chpt.osc.command.load_drumkit).

The **System drumkits** are those installed with your package manager or when [compiling](./01-getting-started/02-build) Hydrogen manually. Their location is determined by the compile-time prefix. On
 Unix-like operating systems, this is usually `/usr/share/hydrogen/data/drumkits`, or
 possibly `/usr/local/share/hydrogen/data/drumkits`.
 These kits are available to all users on the system and you usually have no write access to them which is why you only have read access to the kit's properties and can not delete them. If you want to change one of these kits you have to load it via right click and [save](./02-using-hydrogen/03-main-menu/02-drumkits#sect.main_menu.drumkits.save_as) it first. This will add a modified copy on user level.

The **User drumkits** are those which you can manage yourself. They
 are stored in the Hydrogen data
 directory (usually `$HOME/.hydrogen/data/`) within the `drumkits`
 subfolder. When you have
 created a new drumkit via [New](./02-using-hydrogen/03-main-menu/02-drumkits#sect.main_menu.drumkits.new) in the Drumkit option of the Main Menu, you can save it using [Save As](./02-using-hydrogen/03-main-menu/02-drumkits#sect.main_menu.drumkits.save_as) from the same menu. In addition, you can also [Online Import](./02-using-hydrogen/03-main-menu/02-drumkits#sect.main_form.online_import_drumkit) a number of drumkits provided by the dev team of Hydrogen.
:::warning
If you are using Hydrogen for creating songs or drumkits or redistribute existing ones you need to pay special attention to the
 [licenses](./04-reference/01-licensing) of the drumkit(s) you are using.

DISCLAIMER : Hydrogen is not responsible for the drumkits that are
 made available for download by our users, either via the [hydrogen-music.org](hydrogen-music.org) or
 via any other channel.
:::
To **load a drumkit** via the Sound Library, *right-click* the drumkit and select
 `Load`. This will replace your current drumkit
 with the one that you selected. To **load a single instrument** from that
 kit, *left-click* the `▶` to the left of the
 drumkit's name to show all the instruments. With your left mouse
 button, *click* and *drag* the instrument into your current kit. The
 instrument will be added to the drumkit that you currently have
 loaded.
