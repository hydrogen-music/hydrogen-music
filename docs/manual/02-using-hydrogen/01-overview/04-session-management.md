---
title: "Session Management"
sidebar_label: "Session Management"
---

With Session Management you can easily restore complex sessions involving numerous applications including their particular state. Hydrogen does support some Session Management systems too.
:::warning
All the supported Session Management protocols are Linux only. There is no (tested) support for MacOS and Windows yet.
:::
- **NSM**: [Non Session Manager (NSM)](http://non.tuxfamily.org/nsm/API.html) is of 2021 the de facto standard in Session Management tools within the Linux audio community and Hydrogen does over full support and compliance to its API. :::tip We highly recommend using this protocol for Session Management. :::
- **LASH**: Hydrogen provides a basic support for [LASH Audio Session Handler (LASH)](http://lash.nongnu.org). This covers recalling the song used within the session but, unlike the NSM support, no recalling of the JACK connections and no per-session preferences. :::note You have to activate LASH support in the [General](./02-using-hydrogen/02-preferences/00-preferences#fig.preferences.general_tab) tab of the Preference dialog in order to use it. ::: :::warning LASH support was deprecated in Hydrogen version 1.2.5 and will be removed in version 2.0! :::
Hydrogen will be under session management if you start it via a NSM server application, like [RaySession](https://github.com/Houston4444/RaySession). You can easily check whether Hydrogen is aware of the session by checking out the `Project` option of the [Main Menu](./02-using-hydrogen/03-main-menu/00-main-menu) as some action will have changed in order to comply to the NSM API.

- **Replace With New Song** instead of [New](./02-using-hydrogen/03-main-menu/00-main-menu#sect.main_menu.projects.new). Replaces the song associated with the session by an empty one.
- **Import Into Session** instead of [Open](./02-using-hydrogen/03-main-menu/00-main-menu#sect.main_menu.projects.open). Replaces the song associated with the session by a song of your choice.
- **Import Recent Info Session** instead of [Open Recent](./02-using-hydrogen/03-main-menu/00-main-menu#sect.main_menu.projects.open_recent). Replaces the song associated with the session by one of the recently used songs.
- **Export From Session As** instead of [Save As](./02-using-hydrogen/03-main-menu/00-main-menu#sect.main_menu.projects.save_as). Stores the song associated with the session at a location of your choice as [.h2song](./04-reference/02-file-types#chpt.file_types.h2song) file. :::note In contrast to the *Save As* command the underlying path of the current song will not be changed. All subsequent *Save* actions will store the current state of the song to the file in the session folder and **not** to the path of the exported file. :::
Both the song and the preferences associated with the session will be stored in a session folder called `Hydrogen.*`. In addition, the drumkit (and its samples) used with the song will linked into the session folder as well. If the link is replaced by a folder containing a valid drumkit, this one will be used over the system and user drumkits.
:::tip
This allows you to create fully self sufficient backups of your Hydrogen session using **tar -chf**. These can even be ported and used on systems which do not have the required drumkits installed.
:::
:::warning
Note that only the stock [drumkit](./02-using-hydrogen/01-overview/01-drumkit-concept) loaded last will be linked in the session folder. In case you only alter instrument parameters or delete instruments or samples this will work perfectly fine. But as soon as you add instruments from other drumkits or external samples, the linked drumkit folder won't contain all samples required by your current song anymore. You need to [saved](./02-using-hydrogen/03-main-menu/02-drumkits#sect.main_menu.drumkits.save) the kit (or create a new one) in order to ensure consistency.
:::
