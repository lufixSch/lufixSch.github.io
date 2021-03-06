# Lights

## IKEA TÅDFRI

Most of my smart lights are from IKEA because they are cheap and easy to set up. Those devices are all connected with the IKEA TRÅDFRI bridge and then added to Home Assistant with the IKEA TRÅDFRI integration.

## DIY lights

At my desk I use a LED stripe wich I integrated in Home Assistant with [ESPHome](https://esphome.io). The full explanation can be found in the section :ref:`led-stripe`.

## Light alarm

In order to get the feeling of a sunrise when I have to wake up I created the following automation. About $$15$$ minutes before my alarm clock gets of the light in my bedroom slowly aluminates until it's at full brightness.
I use a `input_datetime` so I'm able to easily change the wakeup time.

```yaml
input_datetime:
wakeup_time_lukas:
name: 'Wecken um'
has_time: true
has_date: false
initial: '06:45'
```

The yaml-configuration for the automation looks like this:

```yaml
- id: '1607003477556'
  alias: Lukas Wecker
  description: ''
  trigger:
    - platform: template
      value_template: '{{ states("sensor.time") == (states.input_datetime.wakeup_time_lukas.attributes.timestamp | int | timestamp_custom("%H:%M", False)) }}'
      condition: []
      action:
    - service: light.turn_on
      data:
      brightness: 255
      color_temp: 250
      transition: 1200
      target:
      entity_id: light.lukas_licht
    - service: climate.set_temperature
      data:
      temperature: 18
      entity_id: climate.eq3_schlafzimmer_lukas
      mode: single
```
