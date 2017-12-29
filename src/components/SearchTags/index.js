import React, {Component} from 'react'
import './style.css'

class SearchTags extends Component {
  render () {
    return (
      <div className='tagsContainer'>
        <span className='subtags'>
          {
          this.props.tags.map((el, i) => {
            return (
              <span className='searchTag' key={i} onClick={() => this.props.removeTag({el})}>
                {el.value}
              </span>
            )
          })
        }
        </span>
        <span className='subtags'>
          {
          this.props.skillsTag.map((el, i) => {
            return (
              <span className='searchTag' key={i} onClick={() => this.props.removeSkill(el)}>
                {el}
              </span>
            )
          })
        }
        </span>
      </div>
    )
  }
}

export default SearchTags
