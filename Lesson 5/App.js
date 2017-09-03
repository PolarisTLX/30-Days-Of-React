import React from 'react'

class App extends React.Component {
  render () {
    return (
      <div className="notificationsFrame">
      <div className="panel">
      <Header title="Timeline" />
      <Header title="Profile" />
      <Header title="Settings" />
      <Header title="Chat" />
      <Content activities={activities} />
      </div>
      </div>
    )
  }
}

export default App
