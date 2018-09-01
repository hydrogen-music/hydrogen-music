---
layout: page
title: FAQ
showInTopMenu: true
permalink: /faq/
---

This page lists a number of Frequently Asked Questions and the answers to these questions.

For more information on using Hydrogen please read the manual and check out the tutorial video's (both can be found under the Documentation tab)

If you cannot find an answer to your question in the FAQ, Manual or Video's feel free to ask your question via [Github](https://github.com/hydrogen-music/hydrogen-music/issues) or at our [mailing list](https://sourceforge.net/projects/hydrogen/lists/hydrogen-devel).

# Frequently asked questions

[How do i install a new drumkit?](#how-do-i-install-a-new-drumkit)

[I'm using Windows and i cant install a new drumkit, why is that?](#im-using-windows-and-i-cant-install-a-new-drumkit-why-is-that)

[Why does Hydrogen mute my instruments?](#why-does-hydrogen-mute-my-instruments)

[I have connected my midi device to Hydrogen but i hear no sound. What's wrong?](#i-have-connected-my-midi-device-to-hydrogen-but-i-hear-no-sound-whats-wrong)

[Can i change the tempo in the middle of a song?](#can-i-change-the-tempo-in-the-middle-of-a-song)

[How do I mute a sound? (eg muting a hihat pair)](#how-do-i-mute-a-sound-eg-muting-a-hihat-pair)

[The pads of my midi device don’t map to the right sound, how can i fix this?](#the-pads-of-my-midi-device-dont-map-to-the-right-sound-how-can-i-fix-this)

[Can i sell songs (on line) that i have created with Hydrogen?](#can-i-sell-songs-on-line-that-i-have-created-with-hydrogen)

[Is there a pattern generator available in Hydrogen? (that can create a hip-hop, waltz, rock ... pattern)](#is-there-a-pattern-generator-available-in-hydrogen--that-can-create-a-hip-hop-waltz-rock--pattern)

[How do i cut/copy/move/delete a part of a song?](#how-do-i-cutcopymovedelete-a-part-of-a-song)

[How do i create / change / import / export a drumkit?](#how-do-i-create--change--import--export-a-drumkit)

[How do I install Hydrogen on my Mac?](#how-do-i-install-hydrogen-on-my-mac)

[Tempo changes are lost when i export a song, why is that?](#tempo-changes-are-lost-when-i-export-a-song-why-is-that)

[When will H2 be available as LV2 plugin?](#when-will-h2-be-available-as-lv2-plugin)

[Why does Hydrogen mute my instruments?](#why-does-hydrogen-mute-my-instruments)

[I copied my song to another PC and there is no sound, why is that?](#i-copied-my-song-to-another-pc-and-there-is-no-sound-why-is-that)

[Windows8: my right-click menu does not show up!](#windows8-my-right-click-menu-does-not-show-up)

[How can i share my H2 drumkit?](#how-can-i-share-my-h2-drumkit)

[Why ain't I able to build Hydrogen with an Anaconda environment present?](#why-aint-i-able-to-build-hydrogen-with-an-anaconda-environment-present)


* * *

# How do i install a new drumkit?

**Answer**: You can download drumkits via the soundlibrary manager or by hand. The soundlibrary manager is accessible via the "Instrument" menu. After choosing "Import soundlibrary" you can update the server-list and install your favourite drumkit. If you already downloaded a .h2drumkit file, you can install via the soundlibrary dialog, too. Switch to the "Local file" tab and then choose the desired file.

[Top](#frequently-asked-questions)

* * *

# I'm using Windows and i cant install a new drumkit, why is that?

**Answer**: Check what version you have installed.  Installing drumkits using this procedure does not work in 0.9.4.  You should upgrade to the most recent version (0.9.5 or higher).  Get your installer on the Download page.

[Top](#frequently-asked-questions)

* * *

# I have connected my midi device to Hydrogen but i hear no sound. What's wrong?

**Answer**: First check if the midi from your drumkit reaches Hydrogen : each time you press a key on your controller the 'MIDI-IN' led in Hydrogen should light up.  If this is not the case there is probably something wrong with your midi routing.  Check your Jack-midi routings, or if you are not using Jack, check if you have selected the correct midi driver, input (your controller) and the channel.  These settings can be changed via Tools - Preferences - 'Midi System' tab.  To start it's best to set the channel to 'All'.

Keep in mind that Hydrogen uses a fixed midi-mapping (more info in the manual) so if your controller is sending a note that does not match with an instrument in your drumkit, you will hear no sound.  You can use a tool like KMidimon to check the midi messages coming from your controller.  If the notes don't match you will have to change the midi mapping on your controller to match Hydrogens's mapping. 

[Top](#frequently-asked-questions)

* * *

# Can i change the tempo in the middle of a song?

**Answer**: Yes you can : click the 'BPM' button (just below the transport control buttons) and the BPM timeline next to this button will be enabled.  Now you can add a 'BPM marker' by clicking the BPM timeline where you want the tempo to change. Enter the new tempo in the popup and click OK.  You can edit the BMP marker by clicking it again.

[Top](#frequently-asked-questions)

* * *

# How do I mute a sound? (eg muting a hihat pair)

**Answer**: Use a 'mute group' to do this.  Under the General tab of the instrument editor you can set the mute group that the instrument is a member of.  If 2 or more instruments are members of the same mute group they will mute each other.  So if the open hihat sound has been triggered it will be muted as soon as the closed hihat sound is triggered.

[Top](#frequently-asked-questions)

* * *

# The pads of my midi device don't map to the right sound, how can i fix this?

**Answer**: Hydrogen uses a fixed midi input mapping.  You can however rearrange the mapping by simply dragging an instrument from your drumkit up/down in the drumkit list.  The position of the instrument in the list determines the midi note that this sound is mapped to : position 1= note 36, pos2=37 ...

[Top](#frequently-asked-questions)

* * *

# Can i sell songs (on line) that i have created with Hydrogen?

**Answer**: Hydrogen and the main h2-sound libraries (which you can download from the Source-forge server) are under GPL2/GPL/CC license.  This means that you can use these for free in your own work and sell the music that you have created with it.  If you are using other sound libraries (commercial or 'found' on the www somewhere) you _must_ read the license agreement carefully before using it in a song that you want to sell.

[Top](#frequently-asked-questions)

* * * 

# Is there a pattern generator available in Hydrogen ? (that can create a hip-hop, waltz, rock ... pattern)

**Answer**: No, Hydrogen does not have such a feature, but you can easily import existing patterns via Project > Open Pattern.  If you search the forum you might bump into some people that have created some patterns and have made these available on their own site.

[Top](#frequently-asked-questions)

* * *

# How do i cut/copy/move/delete a part of a song?

**Answer** First make sure you have enabled the 'SelectMode':

+ Delete : select the area of the song you want to delete and hit the Delete button
+ Move : select the area of the song you want to move and simply drag it to it's new location
+ Copy : select the area of the song you want to move and Ctrl-drag it to it's new location
+ Cut : there is no real cut (as in Ctrl-X) option.  Instead used the Move/Copy action


[Top](#frequently-asked-questions)

* * *

# How do i create / change / import / export a drumkit?

**Answer**: All these questions are addressed in tutorial no 5 on the Video page.

[Top](#frequently-asked-questions)

* * *

# How do I install Hydrogen on my Mac?

**Answer**: You can download the Mac installer (.dmg file) form the download page.  For more info about installing a .dmg check out [this page](http://www.ofzenandcomputing.com/how-to-install-dmg-files-mac/).

[Top](#frequently-asked-questions)

* * *

# Tempo changes are lost when i export a song, why is that?

**Answer**: This is a known limitation in the early Hydrogen V0.9.6 beta releases (and below).  It has been fixed in the code (in our GIT repo) so it will be available in the next release (the official 0.9.6).  The current workaround is to record the output of Hydrogen using an audio recording app like Ardour, Qtractor ...

[Top](#frequently-asked-questions)

* * * 

# When will H2 be available as LV2 plugin?

**Answer**: Currently there are no plans to create a LV2 version of Hydrogen.  There are however other projects that are working on this : [Composite](http://riggable.com/composite/) and (the more recent) [DrMr](https://github.com/nicklan/drmr).

[Top](#frequently-asked-questions)

* * * 

# Why does Hydrogen mute my instruments?

**Answer**: Hydrogen will auto mute instruments when it cant find the sample(s) for that instrument.  This usually means that the drumkit (aka soundlibrary) is not loaded or could not be found.  If the drumkit used is a standard drumkit you need to check if the drumkit is installed and download it if not (check out this part of the manual for more info).  Once it's installed just reload it and you should be ok.

[Top](#frequently-asked-questions)

* * *

# I copied my song to another PC and there is no sound, why is that?

**Answer**: First of all you need to know that Hydrogen needs two things to be able to play a song : the song (.h2song file) and the samples for each instrument.  These samples are are grouped in a drumkit (aka soundlibrary)

The song file and the drumkit are two totally independant things !

If the sounds are not available to Hydrogen it will mute these instruments (see also the previous question in this FAQ), so if you want to copy a song from PC1 to PC2 this is the best way to do it :

A) you are using the standard drumkits that come with Hydrogen:

Make sure that the drumkit you use for your song on PC1 is also available on PC2.  Use the drumkit download feature to install it on PC2 if needed (check out this part of the manual for more info)

B) you are using a 'custom' drumkit for your song (= a drumkit you created from your own samples, or using samples from other drumkits)

On PC1: 

+ save your drumkit on PC1 under a new name (Instrument > Save library)
+ your new drumkit will now be available in the sound library on PC1
+ (with your song still open) load the drumkit you just saved (in the sound library right click the drumkit and hit load)
+ save the song 
+ export the drumkit (Instrument > Export library)
+ once al that's done you will have two files : the song (.h2song) and the drumkit that you just exported


On PC2: 

+ copy both files to PC2
+ import the drumkit (Instrument > Import library), the drumkit is now available in the sound library of PC2
+ open the song
+ load the drumkit you use for this song (in the sound library right click the drumkit and hit load)
+ save the song
+ done

[Top](#frequently-asked-questions)

* * *

# Windows8: my right-click menu does not show up!

**Answer**: Run Hydrogen in Windows 7 compatibility mode.

[Top](#frequently-asked-questions)

* * *

# How can i share my h2 drumkit?

**Answer**: If you have created your own hydrogen drumkit from your own sample file, you might want to share it with the hydrogen community. 


The first step should be a proper check of your drumkit's metadata. Does it contain a proper description? Are all other fields up to date? 
Since you want to publish your drumkit to a wide audience, you have to select a license for your kit. 

The next step is the publication of the drumkit itself. We recommend to create a project on one of the open source hosting platforms like GitHub. Depending on your choosen license, this allows other people to collaborate on your drumkit. The repository should contain the contents of your h2drumkit file (samples and the drumkit.xml) and not the h2drumkit file itself. If you do not know how to set up such a repository or if just want to publish your h2drumkit file, you may skip this step and upload your h2drumkit file to a file hosting service of your choice. If your drumkit is GPL licensed (or if it has a compatible license) there is the possibility that we can may host the drumkit for you.

At this point you can now send a mail to our development mailing list if you think that your drumkit should be listed in Hydrogen's online drumkit list or publish a link to your h2drumkit file at our forum.

[Top](#frequently-asked-questions)

* * *

# Why ain't I able to build Hydrogen with an Anaconda environment present?

**Answer**: When installing Anaconda on your computer you have to add a path pointing to its installed binaries to your _PATH_ variable. The executables located in there are not linked against the shared objects and headers provided by your system but against the ones **conda** installed itself. Usually both the binaries of your system and of Anaconda can live together in harmony. But when building packages using **cmake**, like Hydrogen, conflicts can occur. One of those arises when installing Qt5 or a package depending on it using Anaconda. This is because the cmake scripts will search your system files for libraries exclusively and are agnostic of the ones installed using conda. Instead of making the latter ones available to cmake, it is usually a better solution to have a separate global variable containing the search path without any references to Anaconda and to use this one in the compilation process.

In your **.bashrc** file prepare a second variable right before adding Anaconda to your search path

``` bash
export NOCONDA_PATH=$PATH
export PATH=$HOME/anaconda3/bin:$PATH		
```

Now, whenever you want to compile Hydrogen from source use these modified commands instead

``` bash
mkdir build && cd build
export PATH=$NOCONDA_PATH && cmake ..
make && sudo make install
```

[Top](#frequently-asked-questions)

* * *
