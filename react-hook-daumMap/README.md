# @danah/react-hook-daum-map

React Hook to makes funtional react for daum map easy.

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
  return (
    <div style={{ height: "460px", width: "630px" }} className="MapBox">
      {daumMap({
        apiKey: "input your own API key",
        lng: 33.450701,
        lat: 126.570667,
        name: "Hot Place"
      })}
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

```js
<Map id="kakao-map" />
```
