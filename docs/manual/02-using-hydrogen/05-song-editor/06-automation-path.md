---
title: "Automation Path"
sidebar_label: "Automation Path"
---

![Figure 8.5. The Automation Path Widget](/img/docs/generated_en/songEditorAutomationPathView.png)

The Automation Path allows you to control the overall [velocity](./04-glossary#def.velocity) of all notes throughout the song. It can be viewed using the shortcut `Alt` + `A` or via the [View](./02-using-hydrogen/03-main-menu/04-view) option of the Main Menu.

*Clicking* the graph area introduces a new point determining when and to which value the velocity will be changed. Currently only linear interpolations of the velocity between the individual points are supported. You can *drag* a point to move it and you can delete one by dragging another point over it and "absorbing" it.
:::note
Whether the Automation Path is hidden or shown does not affect its activation state. It is **always active** and can't be disabled. But in its default setting it won't alter anything. In its current implementation you have to reset the Automation Path to its original state manually in order to disable it.
:::
