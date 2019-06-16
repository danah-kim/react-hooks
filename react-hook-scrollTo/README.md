# @danah/react-hook-scrollto

React Hook to makes scrolling the document to the specified coordinates easy.

## Installation

#### - yarn

`yarn add react-hook-scrollto`

#### - npm

`npm i react-hook-scrollto`

## Usage

```js
import React from "react";
import scrollTo from "@danah/react-hook-scrollto";

function App() {
  scrollTo({
    x: 25,
    y: 10,
    id: "foo",
    smooth: true
  });

  return <h1 id="foo">Hello Hooks</h1>;
}
```

### Arguments

| Argument | Type   | Description                                                                                              | Required |
| -------- | ------ | -------------------------------------------------------------------------------------------------------- | -------- |
| x        | number | Set the horizontal x position to scroll to                                                               | no       |
| y        | number | Set the vertical y position to scroll to                                                                 | no       |
| id       | string | Set the ID of the ScrollArea we want to scroll                                                           | no       |
| smooth   | string | If true, this will animate the scroll to be smooth. False will give an instant scroll. (defaults: false) | no       |

### Return

No return value
