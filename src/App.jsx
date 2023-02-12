import { useState } from 'react'
import ReactHotspots from './lib/ReactHotspots'
import { Si1Password } from "react-icons/si";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <ReactHotspots
            image='https://unsplash.com/photos/RD8qNV6QXy8/download?ixid=MnwxMjA3fDB8MXxhbGx8M3x8fHx8fDJ8fDE2NzYxNjkwNDk&force=true&w=2400'
            imageAlt="React Logo"
            overlay={true}
            hotspots={[
                {
                    left: '50%',
                    top: '50%',
                    triggerIcon: <Si1Password />,
                    content: 'Text'
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
      </div>
  )
}

export default App
