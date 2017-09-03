import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="menuIcon">
          <div className="dashTop"></div>
          <div className="dashBttom"></div>
          <div className="circle"></div>
        </div>

        <span className="title">{this.props.title}</span>

        <input
          type="text"
          className="searchInput"
          placeholder="Search ..." />

        <div className="fa fa-search searchIcon"></div>
      </div>
    )
  }
}

export default Header    //this supposed to be a seperate file?
