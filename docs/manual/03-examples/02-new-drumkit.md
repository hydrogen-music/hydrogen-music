---
title: "Create a New Drumkit"
sidebar_label: "Create a New Drumkit"
---

In this chapter we will show you how to create a complete drumkit. Be sure to have a look at the [conceptional design of a drumkit](./02-using-hydrogen/01-overview/01-drumkit-concept) first.
 Keeping this in mind
 we will use a top-down approach, so we will start at the Drumkit level and work our way
 down to the [samples](./04-glossary#def.sample).

Creating a [new drumkit](./02-using-hydrogen/03-main-menu/02-drumkits#sect.main_menu.drumkits.new) with Hydrogen is done with the [Instrument
 Editor](./02-using-hydrogen/08-instrument-editor). You can load samples, set envelope
 parameters, set the gain, and other advanced features like mute groups, a low-pass resonance filter, and pitch randomization.
:::tip
Instead of creating your own drumkit, you can also [open](./02-using-hydrogen/03-main-menu/02-drumkits#sect.main_menu.drumkits.open) or [download](./02-using-hydrogen/03-main-menu/02-drumkits#sect.main_form.online_import_drumkit) an existing one.
:::
Let's make a brand new drum kit:

1. in the [Main Menu](./02-using-hydrogen/03-main-menu/00-main-menu) select Drumkits → New. This will give you a single blank instruments. To add more instruments, select Instruments → Add instrument and to delete one, *right-click* a instrument and select *Delete Instrument*.
2. Select an instrument to start editing it. This is done by *left-clicking* on the name of the instrument in the [Sidebar](./02-using-hydrogen/06-pattern-editor/00-pattern-editor#chpt.pattern_editor.sidebar). You will notice that the name of the instrument in the Instrument Editor matches the one that you clicked.
3. Once you have your drumkit working the way you want, select Drumkits → Save As . You will be prompted for the name of the kit to save. If you wish to *overwrite* an existing kit, you will need to type in the same name as the kit that you want to replace.
4. Drumkits are automatically stored in the `data` directory (i.e. `$HOME/.hydrogen/data/drumkits`).
5. In order to share your drumkit with others, you have to export it using Drumkits → Export from the [Main Menu](./02-using-hydrogen/03-main-menu/00-main-menu). Select the drum kit that you wish to export, and give it a file name to save it to.
