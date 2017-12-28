import React, {Component} from 'react'
import './style.css'

class SearchTags extends Component {
  render () {
    return (
      <div className='tagsContainer'>
        {
          this.props.tags.map((el, i) => {
            return (
              <span className='searchTag' key={i} onClick={this.props.removeTag({el}, {i})}>
                {el}
              </span>
            )
          })
        }
      </div>
    )
  }
}

export default SearchTags
