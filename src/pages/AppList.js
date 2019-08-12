import React, { Component }  from 'react';

import {Link} from 'react-router-dom'

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

  handleDeleteClick = (id) => {
    const { apps } = this.state
    appStoreService.deleteOneApp(id)
    .then(() => {
      const filteredApps = apps.filter((singleApp) => {
        return singleApp._id !== id
      })
      this.setState({
        apps: filteredApps,
      })
    })
  }

  render() {
    const { apps } = this.state
    return (
      <div>
        <section>
          <h1>Applist page</h1>
          <Link to='/apps/create'>
            <button>
              Create a new App
            </button>
            </Link>
        </section>
        
        <section className='list-container'>.
          {apps.length > 0 ? apps.map((app) => {
            return (
              <article className='app-container'>
                <img src={app.image} alt={app.name}/>
                <h3>{app.name}</h3>
                <p>{app.date}</p>
                <p>{app.price}$</p>
                <button onClick={() => {
                this.handleDeleteClick(app._id)
                }}>X</button>
              </article>
            )
          }) : <p>Loading...</p>}
        </section>
      </div>
    )
  }
}

export default AppList
