# @consuo/react-up-next

A simle React component that from the Consuo Schedule API fetches what is currently playing and what is up next.

![Up next Screenshot](up-next-screenshot.png)

## Install

```
npm install --save @consuo/react-up-next
```

## Tutorial

```javascript
import ConsuoUpNext from '@consuo/react-up-next';

// In your render function
<ConsuoUpNext apiUrl={"http://<SCHEDULE_API>"} channelId={"eyevinn"} updateInterval={5}/>
```

## Properties

- apiUrl: `string` `required`

    URI to the Consuo Schedule endpoint.

- channelId: `string` `required`

    The ID of the channel.

- updateInterval: `number`

    If provided the component is updated by the specified interval in seconds.

## About Consuo

`Consuo` is a software component (Docker container) that can be plugged into your online video platform to provide you with unlimited thematic, regional or personal linear TV channels based on an existing VOD library.

Visit www.consuo.tv for more information and to request a trial license.

## About Eyevinn Technology

Eyevinn Technology is an independent consultant firm specialized in video and streaming. Independent in a way that we are not commercially tied to any platform or technology vendor.

At Eyevinn, every software developer consultant has a dedicated budget reserved for open source development and contribution to the open source community. This give us room for innovation, team building and personal competence development. And also gives us as a company a way to contribute back to the open source community. 

Want to know more about Eyevinn and how it is to work here. Contact us at work@eyevinn.se!
