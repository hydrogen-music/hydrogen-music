---
title: "JACK Control"
sidebar_label: "JACK Control"
---

Clicking


 will enable JACK transport. If disabled, Hydrogen will still use the JACK driver and registered audio ports. But it decouples its own transport state from the one of the JACK server and will not be in sync with other clients anymore.

The

 button indicates the current state of JACK Timebase
 support. Via this protocol one JACK cilent - registered as Timebase
 *controller* - can share its tempo and position
 information as beat, bar, and tick with other JACK clients supporting
 this protocol - Timebase *listeners*. When pressing
 the button Hydrogen will attempt to take control of Timebase.
:::tip
When using JACK Timebase transport relocations
 should always be done within the Timebase controller application.
 Otherwise, you could end up at unexpected positions due to the
 limitations of that protocol.
:::
:::note
The JACK Timebase API uses other terms for these two classes of
 clients we do not repeat in here.
:::
- - Timebase support itself is activated but neither Hydrogen nor an external application is currently in control. Hydrogen will use its internal tempo.
- - Hydrogen is in control of JACK Timebase, uses its internal tempo, and boardcasts it to other JACK clients.
- - An external application is registered as Timebase controller. Hydrogen will disregard its local tempo - [BPM widget](./02-using-hydrogen/04-main-toolbar/02-bpm-metronome), [Tap Tempo](./02-using-hydrogen/04-main-toolbar/01-tap-tempo#sect.main_toolbar.tap_tempo_beat_counter.tap_tempo), [Beat Counter](./02-using-hydrogen/04-main-toolbar/01-tap-tempo#sect.main_toolbar.tap_tempo_beat_counter.beat_counter), [Timeline](./02-using-hydrogen/05-song-editor/03-timeline) - and, instead, adopts tempo and position provided by the controller.
- - JACK Timebase support was disabled in the [Audio tab](./02-using-hydrogen/02-preferences/01-audio-system) of the Preferences. :::tip This can be useful in the presence of a controller with a faulty Timebase implementation or in case of a bug in Hydrogen's own implementation. :::
