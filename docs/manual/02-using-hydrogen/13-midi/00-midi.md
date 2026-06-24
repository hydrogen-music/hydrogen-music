---
title: "MIDI"
sidebar_label: "MIDI"
---

MIDI is a standard for connecting electronic devices,
 like your edrum or keyboard and your computer. It enables them to
 exchange messages commonly used in audio synthesis, processing, and
 recording.

This chapter will, firstly, feature a guide about how to connect your
 MIDI device to Hydrogen in section [MIDI Input](./02-using-hydrogen/13-midi/00-midi#chpt.midi.input). Next, you will learn how to trigger sounds
 in Hydrogen using incoming MIDI events in [MIDI Note Rendering](./02-using-hydrogen/13-midi/01-note-rendering). Section [MIDI Output](./02-using-hydrogen/13-midi/02-output)
 gives a short description of how to connect and send
 MIDI data from Hydrogen to other applications and,
 finally, [MIDI Controlling](./02-using-hydrogen/13-midi/03-controlling) covers how to control
 Hydrogen using incoming MIDI messages.

Before you can use Hydrogen as a MIDI synth or control
 it using its [Actions](./02-using-hydrogen/13-midi/03-controlling#chpt.midi.controlling.actions), you have to
 setup your incoming MIDI connection.

1. Connect your MIDI device to your computer and ensure all required drivers are installed.
2. Open up the [MIDI System](./02-using-hydrogen/02-preferences/02-midi-system) tab of the Preferences and choose the *MIDI driver* you connected your device to.
3. Choose your MIDI device/port from the *Input* dropdown list. :::note For now the list of available input and output MIDI devices/ports is compiled for the current MIDI driver when opening the Preferences dialog. If you switch to another driver, be sure to click *OK* and reopen the Preferences dialog in order to have an updated list. ::: :::tip For a lot of MIDI drivers you can also establish connections with external tools, like [QjackCtl](https://qjackctl.sourceforge.io/) for JACK-MIDI and ALSA-MIDI. :::
4. Click *OK* to store all changes and restart Hydrogen's MIDI driver.
5. Check for incoming MIDI messages in Hydrogen. Each time you send a MIDI message using your device the [MIDI-in LED](./02-using-hydrogen/04-main-toolbar/03-cpu-midi) in Hydrogen's Main Toolbar should light up in a blue color and a corresponding message should appear in the log on [log level *Info*](./02-using-hydrogen/03-main-menu/06-debug#chpt.main_menu.debug.log_level.info) (see [Open Log File](./02-using-hydrogen/03-main-menu/06-debug#chpt.main_menu.debug.open_log_file)).

If you still do not hear any audio, check the [Instrument strips](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips) in the
 Mixer. On each MIDI event corresponding to an
 instrument the LED in its strip should light up. If so, the problem is
 most probably with your audio output setting.
