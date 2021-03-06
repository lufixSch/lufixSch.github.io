# Heating

## Radiator thermostat

Because I live in a flat, there is no central heating system. Therefore I control every radiator over it's own thermostat. I went for the cheapest option: A set of [Eqiva Bluetooth Smart Radiator Thermostats](https://www.amazon.de/-/en/Eqiva-Bluetooth®-Smart-Heizkörperthermostat-141771E0/dp/B01N39V0I4/ref=sr_1_1?dchild=1&ie=UTF8&keywords=blue%20heizkörperthermostat&language=en_GB&qid=1619821167&sr=8-1).

This devices are using bluetooth low energy therefore there is the need for at least one ESP32 to connect them to Home Assistant. For this purpose I used this really nice [EQ-3 Radiator valve control](https://github.com/softypit/esp32_mqtt_eq3) application. In my case the thermostats had a very short BLE range with a maximum of about five meters. This is the main reason I choose the ESP32 solution instead of the [EQ3 Home Assistant integration](https://www.home-assistant.io/integrations/eq3btsmart/).

### Node-Red

To make the configuration of a MQTT climate device in Home Assistant as simple as possible I added a Node-Red layer.

In this configuration I first created a MQTT topic for every radiator to set the temperature. But I also grouped the two thermostats in my livingroom so I can set both temperatures with one command. Next I added a topic to listen on changes of the climate mode. Depending on the mode I send a command to the radiator (mode = _off_ => command = **off**, mode = _heat_ => command = **on**, mode = _auto_ => command = **settemp 20.0**).

![Picture of the Node-Red Subflow for Modedetection](assets/thermostat_mode_detection.png)

When one of my radiators returns a statusmessage on `/<mqttid>radout/status` I resolve battery as well as temperature of the device and send it over a new topic. As a third value I generate the mode depending on the temperature (:math:`temp == 4.5` => _off_, :math:`temp == 30.0` => _heat_, :math:`4.5 < temp < 30.0` => _auto_).

![Picture of the Node-Red Configuration](assets/thermostat_config_node_red.png)

## Temperature sensor

As temperature and humidity sensors I'm using some [Xiaomi Mija Bluetooth Thermometer](https://de.aliexpress.com/item/4000373039226.html?spm=a2g0o.productlist.0.0.e1857c3fSzGao3&algo_pvid=b51a18c3-9ccf-4b9a-b9d0-d6b49b2ddc36&algo_expid=b51a18c3-9ccf-4b9a-b9d0-d6b49b2ddc36-0&btsid=0bb0623d16200470086374093ef357&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603). Just like the thermostats a ESP32 is needed but in this case ESPHome provides a [viable solution](https://esphome.io/components/sensor/xiaomi_ble.html?highlight=xiaomi#lywsd03mmc). To use the sensors with ESPHome you need to flash a custom firmware like explained in this repository: [https://github.com/atc1441/ATC_MiThermometer](https://github.com/atc1441/ATC_MiThermometer). Now you can flash your ESP32 with your ESPHome configuration and the sensors are ready. To later use them as temperature for the MQTT climate entity I also added MQTT to the ESPHome configuration.

```yaml
mqtt:
  broker: <mqtt broker ip>
  username: <username>
  password: <password>
  discovery: False
```

To send the sensordata over a MQTT topic you have to add the following code to the sensor.

```yaml
on_value:
  then:
    - mqtt.publish_json:
        topic: <topic>
        payload: |-
          root["payload"] = id(<sensor Id>).state;
          root["device"] = "<device name>";
```

Compared to the EQ3 thermostats the ble range of the mija ble thermometer is a lot better. In my case I could connect all devices with one ESP32.

## Configuration

For the configuration of my custom climate entity I used the MQTT climate platform with the following configuration:

```yaml
- platform: mqtt
  name: 'eq3 Schlafzimmer Lukas'
  unique_id: 'eq3_bedroom_lukas'
  modes:
    - 'heat'
    - 'off'
    - 'auto'
  mode_command_topic: 'heating/bedroom_lukas/mode'
  mode_state_topic: 'heating/bedroom_lukas/status'
  mode_state_template: '{{value_json.mode}}'
  max_temp: 30.0
  min_temp: 5.0
  initial: 20
  temperature_command_topic: 'heating/bedroom_lukas/temp'
  current_temperature_topic: 'thermometer/temperature/bedroom-lukas'
  temperature_unit: 'C'
  temp_step: 0.5
```

Now when I set the temperature of my radiator in Home Assistant the target temperature of the EQ3 thermostat changes (`temperature_command_topic: "heating/bedroom_lukas/temp"`). So the whole controlling of the radiator still happens on the EQ3 with it's build in temperature sensor but the entity in Home Assistant displays the temperature measured by the Xiaomi sensors (`"current_temperature_topic: "thermometer/temperature/bedroom-lukas"`).

![Thremostat card in Home Assistant](assets/hassio_thermostat_card.png){width=500}