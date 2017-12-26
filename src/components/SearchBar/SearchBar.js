import React, {Component} from 'react'
import './SearchBar.css'
import Search from '../Search'

class SearchBar extends Component {
  render () {
    return (
      <div className='row bars-container'>
        <div className='col-xs-12 col-md-4 col-lg-4 user-search'>
          <Search />
        </div>
        <div className='col-xs-12 col-md-8 col-lg-8 search-tags'>
          HTML CSS
        </div>
      </div>

    )
  }
}

export default SearchBar
