---
title: "Flash Sonoff Device"
layout: "article"
image: Null
repository: "https://github.com/lufixSch/guides.git"
repository_icon: github
status: finished
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
u 3,3V.

## Flashen

Flashen mit `esptool.py` mit folgendem Befehl:

```zsh
esptool.py --port <port> --baud 115200 write_flash 0x0000 <firmware>.bin
```
