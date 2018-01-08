import React, { Component } from 'react'
import { render } from 'react-dom'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs'
import './style.css'
import LocationSubTab from '../SubTabs/LocationSubTab.js'
import DisponibilitySubTab from '../SubTabs/DisponibilitySubTab.js'
import TechnologiesSubTab from '../SubTabs/TechnologiesSubTab.js'
import ContractSubTab from '../SubTabs/ContractSubTab.js'

class MyTabs extends Component {

  render () {
    return (
      <div className='aside'>
        <Tabs vertical>
          <div className='cols-container'>

            <div className='left-col'>
              <TabList className='left-col-tablist'>
                <div className='left-location-tab'>
                  <Tab className='tab' tabFor='vertical-tab-one'>
                    <i className='fa fa-2x fa-map-marker tab-icon' aria-hidden='true' />
                    <div className='icon-title'>Location</div>
                    <i className='fa fa-angle-double-right' />
                  </Tab>
                </div>
                <div className='left-disponibility-tab'>
                  <Tab className='tab' tabFor='vertical-tab-two'>
                    <i className='fa fa-2x fa-clock-o tab-icon' aria-hidden='true' />
                    <div className='icon-title'>Disponibility</div>
                    <i className='fa fa-angle-double-right' />

                  </Tab>
                </div>
                <div className='left-technologies-tab'>
                  <Tab className='tab' tabFor='vertical-tab-three'>
                    <i className='fa fa-2x fa-cog tab-icon' aria-hidden='true' />
                    <div className='icon-title'>Technologies</div>
                    <i className='fa fa-angle-double-right' />

                  </Tab>
                </div>
                <div className='left-lookingFor-tab'>
                  <Tab className='tab' tabFor='vertical-tab-four'>
                    <i className='fa fa-2x fa-search-plus tab-icon' aria-hidden='true' />
                    <div className='icon-title'>Looking For</div>
                    <i className='fa fa-angle-double-right' />

                  </Tab>
                </div>
              </TabList>
            </div>

            <div className='right-col'>
              <TabPanel tabId='vertical-tab-one' className='right-col-tabpanel'>
                <LocationSubTab onChangeLocation={this.props.onChangeLocation} />
              </TabPanel>
              <TabPanel tabId='vertical-tab-two' className='right-col-tabpanel'>
                <DisponibilitySubTab onChangeDisponibility={this.props.onChangeDisponibility} />
              </TabPanel>
              <TabPanel tabId='vertical-tab-three' className='right-col-tabpanel'>
                <TechnologiesSubTab onChangeSkills={this.props.onChangeSkills} />
              </TabPanel>
              <TabPanel tabId='vertical-tab-four' className='right-col-tabpanel'>
                <ContractSubTab onChangeContract={this.props.onChangeContract} />
              </TabPanel>
            </div>

          </div>

        </Tabs>
      </div>
    )
  }
}

export default MyTabs
