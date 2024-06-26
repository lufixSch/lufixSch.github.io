---
description: Tips and Tricks for setting up Hyprland from ground up
image: null
last_update: '2024-06-23T12:12:37.898270+00:00'
layout: article
repository: https://github.com/lufixSch/guides.git
repository_icon: github
status: wip
title: Hyprland - Tips and Tricks
update: https://raw.githubusercontent.com/lufixSch/guides/main/Linux/Hyprland.md
---

# Hyprland

Tips and Tricks for setting up Hyprland from ground up. A lot of the tips below might also help on other setups but I encountered them while setting up Hyprland.

> NOTE: I'm using arch but most solutions should also work on other distros

## Dolphin

### "Open With" not displaying applications

Link the `*-applications.menu` (prefix depends on your setup. Could for example be `arch` or `plasma`) in `/etc/xdg/menus` to `applications.menu`

```bash
sudo ln -s /etc/xdg/menus/<xxx>-applications.menu /etc/xdg/menus/applications.menu
```

You might need to install `xdg-menu` (`archlinux-xdg-menu` on arch)

### Terminal konsole not found

This error usually occurs when Dolphin tries to open a terminal ui using the 'Konsole' terminal emulator.

Change `TerminalApplication` in `.config/kdeglobales` to your terminal emulator

```
[General]
TerminalApplication=you-terminal
```