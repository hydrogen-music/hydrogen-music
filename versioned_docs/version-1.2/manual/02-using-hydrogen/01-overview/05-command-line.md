---
title: "Command-line Options"
sidebar_label: "Command-line Options"
---

After [installing](./01-getting-started/01-download) Hydrogen on your system you can invoke it from the command-line with a number of different options.
```
**-h, --help Displays this help.**
**-v, --version Displays version information.**
**-d, --driver Use the selected audio driver (auto, jack, pulseaudio, ...)**
**-p, --playlist Load a playlist (*.h2playlist) at startup**
**-s, --song Load a song (*.h2song) at startup**
**-k, --kit Load a drumkit at startup**
**-i, --install Install a drumkit (*.h2drumkit)**
**-V, --verbose Level, if present, may be None, Error, Warning, Info, Debug**
**-L, --log-file Alternative log file path**
**-T, --log-timestamps Add timestamps to all log messages**
** --log-colors Use ANSI colors in log messages**
** --no-log-colors Suppress ANSI colors in log messages**
**-P, --data Use an alternate system data path**
** --user-data Use an alternate user data path**
** --config Use an alternate config file**
** --layout UI layout ('tabbed' or 'single')**
**-O, --osc-port Custom port for OSC connections**
**-n, --nosplash Hide splash screen**
```
:::note
Which audio drivers are supported depends on both your platform and its installed packages. Your local help message will display all available options.
:::
