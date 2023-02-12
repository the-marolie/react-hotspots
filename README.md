
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
		imageAlt="Alt text"
		overlay={true}
		hotspots={[
			{

				left:  '50%',
				top:  '50%',
				triggerIcon:  <Si1Password  />,
				content:  'Text'
			},
			{
				left:  '25%',
				top:  '25%',
				content:  <div>Hotspot 2</div>
			},
			{
				left:  '75%',
				top:  '75%',
				content:  <div>Hotspot 3</div>
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
| `hotspots`      | Array of objects, _required_          |  | Contains information of hotspots to be added.         |

### Hotspot object

| Key     | Type                              | Default | Description                    |
|-----------|-----------------------------------|---------|--------------------------------|
| `left`       | String, _required_                |         | Horizontal position with css units(`px`,`%`,etc.)  |
| `top`       | String, _required_                |         | Vertical position with css units(`px`,`%`,etc.) |
| `triggerIcon` | React element/image/svg, _optional_ |	`<AiFillInfoCircle />` - from `react-icons/ai` library | React element / image / svg / a `react-icon` to indicate the hotspot
| `content` | React or HTML element, _required_ |         | Hotspot content                

## License

[MIT License](https://github.com/the-marolie/react-hotspots/blob/main/LICENSE)
