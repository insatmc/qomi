import React, { Component } from 'react'

class Search extends Component {
  render () {
    return (<form>
      <i class="fa fa-search" aria-hidden="true"></i>
      <div className='form-group'>
        <input
         value=''

          type='text'
          className='form-control'

          placeholder='Nom,langage,région...' />
      </div>

    </form>)
  }
}
export default Search
