import React, { Component } from 'react'
import './Search.css'

class Search extends Component {
  onChangeInput (e) {
    this.props.onChangeName(e)
    this.props.onChangeLocation(e)
    this.props.onChangeSkills(e)
  }
  render () {
    return (<form>

      <div className='inputForm'>
        <i class='fa fa-search fa-1x search-icon' />
        <input
          onChange={this.props.onChangeSearch}
          type='text'
          className='form-control search-name-input'
          placeholder='Search student name...'
        />

      </div>

    </form>)
  }
}
export default Search
