# Smarthome

This is a detailed guide/documentation about my smarthome with Home Assistant. The Smarthome is a Work in Progress and I will update this documentation as often as possible.

## Hardware

My whole smarthome is based on a [Raspberry Pi 4 Model B](https://www.raspberrypi.org/products/raspberry-pi-4-model-b/) with Raspbian. The operating system is installed on a [Transcendent M.2 SSD](https://www.amazon.de/gp/product/B07CXC32T2/ref=ppx_yo_dt_b_asin_title_o02_s01?ie=UTF8&psc=1) in a Case from [ICY BOX](https://www.amazon.de/gp/product/B07NCMHG5H/ref=ppx_yo_dt_b_asin_title_o09_s00?ie=UTF8&psc=1). I tried different SSD's before but none of the worked for me.
For the Raspberry Pi enclosure I decided to go for a passively cooled case from [FLIRC](https://buyzero.de/products/flirc-gehause-fur-raspberry-pi-4?_pos=2&_sid=bf015e3c3&_ss=r). In everyday use, this leads to a CPU temperature of 40 to 45°C.

### Boot Raspberry Pi from SSD

With a newer model of the Raspberry Pi 4 Model B booting from an SSD should be as easy as installing the image on the SSD instead of an SD card and starting the Raspberry with only the SSD plugged into one of the USB Ports.

If this isn't working for you, you can find an alternative guide [here](https://lufixsch.github.io/guides/Raspberry%20Pi/Raspberry%20boot%20from%20SSD)

## Software

For my smarthome I'm using [Docker](https://www.docker.com) to isolate the different tools from each other. Docker is controlled and monitored with [Portainer](https://www.portainer.io>).

Hass.io and most of the other container for IoT are installed via the [IOTstack](https://github.com/SensorsIot/IOTstack). Im using the folowing tools:

- Grafana
- InfluxDB
- Mosquitto
- Node-Red
- Zigbee2Mqtt

To use my Raspberry Pi also as a NAS Open Media Vault ist installed too. It's the only tool installed directly on the device without Docker.

Because I don't want to remember every port or adress to the web-interfaces of the different tools so I created a small landingpage hosted with a NGINX server. You can finde it [here](https://github.com/lufixSch/smarthome-landingpage)

### Homeassistant

The Heart of my Smarthome is the Hass.io installation from [IOTstack](https://github.com/SensorsIot/IOTstack). My whole configuration can be found [here](https://lufixSch.github.io/404).
