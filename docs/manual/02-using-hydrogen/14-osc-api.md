---
title: "OSC API"
sidebar_label: "OSC API"
---

Open Sound Control (OSC) is a protocol for communication among
 programs, computers, and hardware, like synthesizers or multimedia
 devices, via networking protocols such as UDP or TCP. It can be thought
 of as a replacement for the MIDI protocol with rich benefits, like
 supporting symbolic and high-resolution numerical argument data,
 providing an URL-style naming scheme in combination with a pattern
 matching language, and allowing to bundle messages for a better handling
 of timing and simultaneous processing.
:::note
Only actions performed in the GUI can be undone.
 OSC commands, on the other hand, can not!
:::
Hydrogen is able to receive and send OSC messages. This allows you
 to control it using various devices, like hardware OSC controllers,
 smartphones, tablets, or any PC. For Linux-based systems you can use or
 test these interactions using the command line program
 **oscsend**.
```bash
$ **oscsend localhost 9000 /Hydrogen/NEW_SONG s /tmp/new.h2song**
```
:::note
To enable OSC support in Hydrogen, open the [OSC](./02-using-hydrogen/02-preferences/03-osc) tab in the Preferences dialog. Make sure that the "Enable OSC
 support" checkbox is activated, otherwise Hydrogen will not listen for
 incoming OSC messages.
:::
:::tip
Hydrogen's port number defaults to `9000` for historical reasons. Since this is also the number used in the coding examples provided by **liblo** package, you may encounter other applications trying to register the same port (which is not possible). In order to avoid hiccups in your audio setup, it's advised to set a different default port in such cases.
:::
:::warning
**oscsend** should only be used for sparse interactive testing and control via a command-line. Using it in scripts is not recommended since every time it sends a command it will registers a new client at the OSC server. If the **Enable OSC feedback** option in the [OSC](./02-using-hydrogen/02-preferences/03-osc) tab of the Preferences dialog is checked, Hydrogen will send its current state to all registered clients causing it to become slower and slower with every **oscsend** command sent. Soon you will experience visual lags. When unchecking this option, however, using **oscsend** is fine.
:::
