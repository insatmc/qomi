import React, { Component } from 'react'
import './Search.css'

class Search extends Component {
  onChangeInput(e){
    this.props.onChangeName(e)
    this.props.onChangeLocation(e)
    this.props.onChangeSkills(e)
      }
  render () {
    return (<form>

      <div className='inputForm'>

        <input
          onChange={this.props.onChangeSearch}
          type='text'
          className='form-control'
          placeholder='Search student name...'
        />

      </div>

    </form>)
  }
}
export default Search
