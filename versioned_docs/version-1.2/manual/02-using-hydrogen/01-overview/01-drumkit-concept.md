---
title: "Drumkit Concept"
sidebar_label: "Drumkit Concept"
---

Let's start with a little history on the concept of Drumkits within in Hydrogen. It began as a
 dedicated drum machine but has evolved into a versatile [sample](./04-glossary#def.sample)-based sound synthesizer/sequencer
 that is capable of generating and manipulating all sorts of sounds. Hence the original
 "Drumkit" terminology is slightly misleading. You can load any kind of sound into a
 "Drumkit" and manipulate that sound just like playing a regular synthesizer. This is
 also the main reason why the [Piano Roll Editor](./02-using-hydrogen/06-pattern-editor/03-piano-roll) was introduced.

To sum it up, nowadays a Drumkit is a collection of a number
 of instruments (snare, kick, sampled voice, bass sound ...), using one or more [components](./04-glossary#def.component) which each can consist of multiple
 [layered](./04-glossary#def.layer) samples.
:::tip
In case you are not familiar with the world of sound synthesis, you can check out the [Glossary](./04-glossary) for a number of useful definitions.
:::
Drumkits can most easily be loaded by right-clicking their name in the [Sound Library](./02-using-hydrogen/07-sound-library). Once loaded its name will be displayed in the [Pattern Editor](./02-using-hydrogen/06-pattern-editor/00-pattern-editor). All changes done to the kit, like altering parameters and adding or removing samples or instruments, are stored in the current song. They need to be [saved](./02-using-hydrogen/03-main-menu/02-drumkits#sect.main_menu.drumkits.save) to the drumkit in case you want them to persist and to be applicable to other songs as well. The actions available in the [Drumkits](./02-using-hydrogen/03-main-menu/02-drumkits) section of the main menu do act on the kit associated with the current song. All options available through the Sound Library on the other hand soley apply to the stock kits. So, reloading the current drumkit will overwrite your local changes in the song using the default parameters stored in the kit's `drumkit.xml` file and altering the current kit's properties via the Sound Library does only affect the stock kit and *not* the one associated with your current song.
