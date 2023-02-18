

![GitHub package.json version](https://img.shields.io/github/package-json/v/the-marolie/react-hotspots?style=for-the-badge) ![npm](https://img.shields.io/npm/dw/react-hotspots?style=for-the-badge) ![npm bundle size](https://img.shields.io/bundlephobia/min/react-hotspots?style=for-the-badge) ![NPM License](https://img.shields.io/npm/l/react-hotspots?style=for-the-badge)

# react-hotspots

React component to create image hotspots


## Install

Install using *npm* or *yarn*

```
npm install react-hotspots
```

```
yarn add react-hotspots
```

## Usage

Import the component and base styles:
```jsx
import ReactHotspots from 'react-hotspots'
import 'react-hotspots/dist/style.css';
```

Use it:

```jsx
	<ReactHotspots
        image='https://unsplash.com/photos/RD8qNV6QXy8/download?ixid=MnwxMjA3fDB8MXxhbGx8M3x8fHx8fDJ8fDE2NzYxNjkwNDk&force=true&w=2400'
        imageAlt="React Logo"
        className="cstm-container"
        iconSize='30px'
		iconColor="#ffffff"
        overlay={true}
        hotspots={[
            {
                left: '50%',
                top: '50%',
                triggerIcon: <Si1Password />,
                className: 'cstm-hotspot',
                iconSize: '60px',
                iconColor: 'red',
                content: 'Text',
                modal: true,
        	},
            {
                left: '25%',
                top: '25%',
                content: <div>Hotspot 2</div>
            },
            {
                left: '75%',
                top: '75%',
                content: <div>Hotspot 3</div>
            }
        ]}
    />
```
### Component props

| Props                   | Type                         | Default | Description                |
|-------------------------|------------------------------|---------|----------------------------|
| `image`                   | String, _required_           |         | Image source               |
| `imageAlt`                   | String, _optional_           |         | Image alternative info     |
| `overlay` | Boolean, _optional_          | `true` | Adds a transparent black overlay to the image for better visibility    |
| `className` | String, _optional_ | | Apply custom classname to the main container |
| `iconSize` | String, _optional_ | `30px` | Set the font size for the icon. This will be applied to all hotspots. |
| `iconColor` | String, _optional_ | `#ffffff` | Set the icon color. This will be applied to all hotspots. |
| `hotspots`  | Array of objects, _required_   |  | Contains information of hotspots to be added.  |


### Hotspot object

| Key     | Type                              | Default | Description                    |
|-----------|-----------------------------------|---------|--------------------------------|
| `left`       | String, _required_                |         | Horizontal position with css units(`px`,`%`,etc.)  |
| `top`       | String, _required_                |         | Vertical position with css units(`px`,`%`,etc.) |
| `triggerIcon` | React element/image/svg, _optional_ |	`<AiFillInfoCircle />` - from `react-icons/ai` library | React element / image / svg / a `react-icon` to indicate the hotspot |
| `className` | String, _optional_ | | Apply custom classname to the hotspot element  |
| `iconSize` | String, _optional_ | `30px` | Set the font size for the icon. This will be applied to individual hotspot and will override the global value. |
| `iconColor` | String, _optional_ | `#ffffff` | Set the icon color. This will be applied to individual hotspot and will override the global value. |
| `modal` | Boolean, _optional_ | `false` | If set to `true`, the hotspot content will be displayed in a modal. |
| `content` | React or HTML element, _optional_ |         | Hotspot content. If no content is provided, only the icon would be displayed               

## License

[MIT License](https://github.com/the-marolie/react-hotspots/blob/main/LICENSE) © 2023 [the-marolie](https://github.com/the-marolie)


