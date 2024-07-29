---
description: Flash a Sonoff device using esptool.py.
image: null
last_update: '2024-07-29T20:43:49.527974+00:00'
layout: article
repository: https://github.com/lufixSch/guides.git
repository_icon: github
status: finished
title: Flash Sonoff Device
update: https://raw.githubusercontent.com/lufixSch/guides/main/Microcontroller/Flash%20Sonoff%20Device.md
---

# Flash Sonoff Device

## Schaltung

- 3,3V -> 3,3V
- GND -> GND
- RX -> TX
- TX -> RX

Widerstand von TX des Sonoff-Geräts zu 3,3V.

## Flashen

Flashen mit `esptool.py` mit folgendem Befehl:

```zsh
esptool.py --port <port> --baud 115200 write_flash 0x0000 <firmware>.bin
```