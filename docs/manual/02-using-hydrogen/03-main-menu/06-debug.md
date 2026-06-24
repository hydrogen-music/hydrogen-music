---
title: "Debug"
sidebar_label: "Debug"
---

Tools mainly for debugging
 and monitoring Hydrogen.
:::note
The Debug option is only available if Hydrogen was compiled with
 debug support.
:::
- **Show Audio Engine Info**: opens a window that shows various stats about Hydrogen and the audio driver. ![Figure 6.3. The Audio Engine View](/img/docs/generated_en/AudioEngineInfoDialog.png) :::note In case JACK is used, buffer and sampling rate should be set in the configuration of the JACK server before starting Hydrogen (JACK automatically starts when an application tries to connect). :::
- **Show Filesystem Info**: opens a window that shows you the paths to the user and system data directory as well as to the folder used to create temporary files.
- **Log Level**: specifies which log messages will be written into the log file. `None`: No messages will be written at all.
- `Error`: Only messages concerning critical errors will be written out.
- `Warning`: Like `Error` but in addition also general warnings about potential bugs or inconsistencies will be written out.
- `Info`: Like `Warning` but also all info messages indicating the correct behavior of Hydrogen will be written out.
- `Debug`: Like `Info` but also internal help messages used for developing will be written out.

**Open Log File**:
 opens Hydrogen's log in either the terminal the application was started in or in a new terminal instance.
