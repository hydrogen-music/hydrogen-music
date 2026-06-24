---
title: "Component Channel Strips"
sidebar_label: "Component Channel Strips"
---

![Figure 13.3. The Component Channel Strip in the Mixer](/img/docs/generated_en/componentMixerLineStrip.png)

Right of the [Instrument Channel Strips](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips) there additional strips corresponding to the instrument [components](./04-glossary#def.component).
:::note
These channels will not be exposed as JACK output ports when enabling the [Create per-instrument outputs](./02-using-hydrogen/02-preferences/01-audio-system#sect.preferences.jack.per_instrument_outs) option in the Preferences.
:::
- : [mutes](./04-glossary#def.mute) the instrument.
- : solos the instrument.
- **Fader**: the fader next to the component's name allows you to adjust the volume of all layers (of all instruments) associated with this component. In the background of the fader a volume unit (VU) meter is included representing the instrument's signal level. The displays shows its peak value. :::tip You can adjust the falloff speed of the peak values in the display in the [Interface](./02-using-hydrogen/02-preferences/04-appearance#fig.preferences.appearance_tab.interface) tab of the Appearance tab in the Preferences. :::
