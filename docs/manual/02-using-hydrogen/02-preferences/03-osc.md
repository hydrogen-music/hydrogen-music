---
title: "OSC"
sidebar_label: "OSC"
---

![Figure 5.4. The OSC Tab](/img/docs/generated_en/PreferencesOSC.png)

The OSC tab ([Figure 5.4](./02-using-hydrogen/02-preferences/03-osc#fig.preferences.osc_tab)) let's
 you modify all options associated with OSC (Open Sound Control) (see
 chapter [OSC API](./02-using-hydrogen/14-osc-api) for details).
:::note
In order to see and access the **Enable OSC feedback** and **Import port** option, **Enable OSC support** has to be checked first.
:::
- **Enable OSC support**: Allows Hydrogen to receive OSC commands send by external programs.
- **Enable OSC feedback**: Hydrogen will broadcast OSC messages to all registered clients each time does change. A client can register to receive OSC messages by sending a message to Hydrogen previously. The **state broadcast as feedback** is composed of the following OSC paths: [/Hydrogen/**MASTER_VOLUME_ABSOLUTE**](./02-using-hydrogen/14-osc-api-commands#chpt.osc.command.master_volume_absolute)
- [/Hydrogen/**TOGGLE_METRONOME**](./02-using-hydrogen/14-osc-api-commands#chpt.osc.command.toggle_metronome)
- [/Hydrogen/**MUTE_TOGGLE**](./02-using-hydrogen/14-osc-api-commands#chpt.osc.command.mute_toggle)
- [/Hydrogen/**STRIP_VOLUME_ABSOLUTE/X**](./02-using-hydrogen/14-osc-api-commands#chpt.osc.command.strip_volume_absolute)
- [/Hydrogen/**STRIP_VOLUME_RELATIVE/X**](./02-using-hydrogen/14-osc-api-commands#chpt.osc.command.strip_volume_relative)
- [/Hydrogen/**PAN_ABSOLUTE/X**](./02-using-hydrogen/14-osc-api-commands#chpt.osc.command.pan_absolute)
- [/Hydrogen/**STRIP_MUTE_TOGGLE/X**](./02-using-hydrogen/14-osc-api-commands#chpt.osc.command.strip_mute_toggle)
- [/Hydrogen/**STRIP_SOLO_TOGGLE/X**](./02-using-hydrogen/14-osc-api-commands#chpt.osc.command.strip_solo_toggle)

**Incoming port**: Specifies the
 OSC port Hydrogen will be register to. Values up to `20000` are supported.
:::note
If the chosen OSC port is already occupied, Hydrogen will pick
 an alternative one on startup and displays it via a popup as well as
 in the OSC tab of the Preferences Dialog.
:::
