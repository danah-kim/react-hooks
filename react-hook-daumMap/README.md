# @danah/react-hook-daum-map

React Hook to makes funtional react for daum map easy. [Demo](https://ukjgz.codesandbox.io/)

## Installation

#### - yarn

`yarn add @danah/react-hook-daum-map`

#### - npm

`npm i @danah/react-hook-daum-map`

## Usage

```js
import React from "react";
import daumMap from "@danah/react-hook-daum-map";

function App() {
  const map = daumMap({
    apiKey: "Input your own API key",
    lng: 33.450701,
    lat: 126.570667,
    name: "Input your place name"
  });

  return (
    <div style={{ height: "460px", width: "630px" }}>
      <div {...map} />
    </div>
  );
}
```

### Arguments

| Argument | Type   | Required |
| -------- | ------ | -------- |
| api      | string | yes      |
| lng      | number | yes      |
| lat      | number | yes      |
| name     | string | no       |

### Return

`react-hook-daumMap` returns an object containing the following:

| Name  | Type      | Description                                                                                   |
| ----- | --------- | --------------------------------------------------------------------------------------------- |
| id    | string    | Id attribute                                                                                  |
| ref   | React Ref | A ref created to daum map                                                                     |
| style | Object    | Style object containing `{width: "100%", height: "100%"}` to give to the element as a default |

It's recommended to just spread the returned object on the element as shown in the Usage section above.
