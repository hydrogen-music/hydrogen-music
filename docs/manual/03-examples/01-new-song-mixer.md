---
title: "Adjust from the Mixer"
sidebar_label: "Adjust from the Mixer"
---

Of course we can always use the [Mixer](./02-using-hydrogen/10-mixer/00-mixer) window, either when creating
 or playing patterns.

The Mixer (see [Figure 18.3](./03-examples/01-new-song-mixer#fig.mixer.2)) is made of a number
 independent [Instrument Channel Strips](./02-using-hydrogen/10-mixer/00-mixer#chpt.mixer.channel_strips), each of these is bound to an instrument, plus a
 [Master Fader Strip](./02-using-hydrogen/10-mixer/03-master-fader) and a

 button to show and hide the
 [FX Plugin Rack](./02-using-hydrogen/10-mixer/02-fx-rack).
 Every line features 3 buttons (







 ), current maximum peak, FX volume control knobs, volume fader, and name of the track. Clicking on



 will play the selected instrument, cutting the others. The Mute button



 , simply [mute](./04-glossary#def.mute) *that* instrument. The maximum peak
 indicates the maximum volume reached from the instrument. The peak must
 be in a range of `0.0` and `1.0` (in [Figure 18.3](./03-examples/01-new-song-mixer#fig.mixer.2) you can
 see a few volumes too loud). For a full description of the Mixer and its elements please see [Mixer](./02-using-hydrogen/10-mixer/00-mixer).
:::tip
Peaks outside that range will get distorted
 (especially with OSS audio driver). Keep an eye on each VU meter and
 if distortion appears, turn the volume down for that instrument.
:::
![Figure 18.3. The Mixer](/img/docs/generated_en/Mixer.png)
