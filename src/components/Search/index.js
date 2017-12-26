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

        <input
          value={this.props.name}
          onChange={this.onChangeInput.bind(this)}

          type='text'
          className='form-control'
          placeholder='Search Fullname,Skills,Location...'
        />

      </div>

    </form>)
  }
}
export default Search
