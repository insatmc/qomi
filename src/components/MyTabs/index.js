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
        <Tabs defaultTab='vertical-tab-one' vertical>
          <div className='cols-container'>

            <div className='left-col'>
              <TabList>
                <div>
                  <Tab className='tab' tabFor='vertical-tab-one'>
                    <i className='fa fa-5x fa-map-marker tab-icon' aria-hidden='true' />
                    <div className='icon-title'>Location</div>
                  </Tab>
                </div>
                <div>
                  <Tab className='tab' tabFor='vertical-tab-two'>
                    <i className='fa fa-4x fa-calendar tab-icon' aria-hidden='true' />
                    <div className='icon-title'>Disponibility</div>
                  </Tab>
                </div>
                <div>
                  <Tab className='tab' tabFor='vertical-tab-three'>
                    <i className='fa fa-4x fa-code tab-icon' aria-hidden='true' />
                    <div className='icon-title'>Competencies</div>
                  </Tab>
                </div>
                <div>
                  <Tab className='tab' tabFor='vertical-tab-four'>
                    <i className='fa fa-4x fa-envelope-o tab-icon' aria-hidden='true' />
                    <div className='icon-title'>Looking For</div>
                  </Tab>
                </div>
              </TabList>
            </div>

            <div className='right-col'>
              <TabPanel tabId='vertical-tab-one'>
                <LocationSubTab />
              </TabPanel>
              <TabPanel tabId='vertical-tab-two'>
                <DisponibilitySubTab />
              </TabPanel>
              <TabPanel tabId='vertical-tab-three'>
                <TechnologiesSubTab />
              </TabPanel>
              <TabPanel tabId='vertical-tab-four'>
                <ContractSubTab />
              </TabPanel>
            </div>

          </div>

        </Tabs>
      </div>
    )
  }
}

export default MyTabs
