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
        <i className='fa fa-search fa-1x search-icon' />
        <input
          onChange={this.props.onChangeSearch}
          type='text'
          className='form-control search-name-input'
          placeholder='search for students by name'
        />

      </div>

    </form>)
  }
}
export default Search
