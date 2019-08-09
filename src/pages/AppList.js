import React, { Component }  from 'react';
import appStoreService from '../services/app-store-service'

class AppList extends Component {

  state = {
    apps: [],
  }

  componentDidMount() {
    appStoreService.getAllApps()
    .then(response => {
      this.setState({
        apps: response.data.listOfApps,
      })
    })
  }

  render() {
    const { apps } = this.state
    return (
      <div>
        <h1>Applist page</h1>
        {apps.length > 0 ? apps.map((app) => {
          return (
            <article>
              <img src={app.image} alt={app.name}/>
              <h3>{app.name}</h3>
              <p>{app.date}</p>
              <p>{app.price}</p>
            </article>
          )
        }) : <p>Loading...</p>}
      </div>
    )
  }
}

export default AppList
