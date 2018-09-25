import React from 'react'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'

const currentPageName = "Icons";
const currentPageNameLower = currentPageName.toLowerCase();

export default () => (
  <Layout>
    <header className="subnav">
      <h1>{currentPageName}</h1>
      <SubNav pageName={currentPageNameLower}/>
    </header>
    <AppContent>
      <div className="row">
        <div className="column column--full">
          <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--arrow-down"></i>
              <span className="example--caption">arrow-down</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--arrow-up"></i>
              <span className="example--caption">arrow-up</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--arrow-right"></i>
              <span className="example--caption">arrow-right</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--arrow-left"></i>
              <span className="example--caption">arrow-left</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--arrow-long-down"></i>
              <span className="example--caption">arrow-long-down</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--arrow-long-up"></i>
              <span className="example--caption">arrow-long-up</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--arrow-long-right"></i>
              <span className="example--caption">arrow-long-right</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--arrow-long-left"></i>
              <span className="example--caption">arrow-long-left</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--alert-filled"></i>
              <span className="example--caption">alert-filled</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--alert-stroke"></i>
              <span className="example--caption">alert-stroke</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--checkmark-filled"></i>
              <span className="example--caption">checkmark-filled</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--checkmark-stroke"></i>
              <span className="example--caption">checkmark-stroke</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--info-filled"></i>
              <span className="example--caption">info-filled</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--info-stroke"></i>
              <span className="example--caption">info-stroke</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--question-filled"></i>
              <span className="example--caption">question-filled</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--question-stroke"></i>
              <span className="example--caption">question-stroke</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--calendar"></i>
              <span className="example--caption">calendar</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--time"></i>
              <span className="example--caption">time</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--search"></i>
              <span className="example--caption">search</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--checkmark"></i>
              <span className="example--caption">checkmark</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--close"></i>
              <span className="example--caption">close</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--add"></i>
              <span className="example--caption">add</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--minus"></i>
              <span className="example--caption">minus</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--fit-page"></i>
              <span className="example--caption">fit-page</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--fit-width"></i>
              <span className="example--caption">fit-width</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--flip"></i>
              <span className="example--caption">flip</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--rotate"></i>
              <span className="example--caption">rotate</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--phone"></i>
              <span className="example--caption">phone</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--comment"></i>
              <span className="example--caption">comment</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--comment-add"></i>
              <span className="example--caption">comment-add</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--show"></i>
              <span className="example--caption">show</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--hidden"></i>
              <span className="example--caption">hidden</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--info"></i>
              <span className="example--caption">info</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--location"></i>
              <span className="example--caption">location</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--locked"></i>
              <span className="example--caption">locked</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--unlocked"></i>
              <span className="example--caption">unlocked</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--new-tab"></i>
              <span className="example--caption">new-tab</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--notification"></i>
              <span className="example--caption">notification</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--page"></i>
              <span className="example--caption">page</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--pencil"></i>
              <span className="example--caption">pencil</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--play"></i>
              <span className="example--caption">play</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--grid"></i>
              <span className="example--caption">grid</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--reply"></i>
              <span className="example--caption">reply</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--settings"></i>
              <span className="example--caption">settings</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--trash"></i>
              <span className="example--caption">trash</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--view-single"></i>
              <span className="example--caption">view-single</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--view-double"></i>
              <span className="example--caption">view-double</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--heart"></i>
              <span className="example--caption">heart</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--add-person"></i>
              <span className="example--caption">add-person</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--paper-check"></i>
              <span className="example--caption">paper-check</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--inbox"></i>
              <span className="example--caption">inbox</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--face-amazing"></i>
              <span className="example--caption">face-amazing</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--face-awful"></i>
              <span className="example--caption">face-awful</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--face-ok"></i>
              <span className="example--caption">face-ok</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--face-good"></i>
              <span className="example--caption">face-good</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--face-bad"></i>
              <span className="example--caption">face-bad</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--mobile-phone"></i>
              <span className="example--caption">mobile-phone</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--notification-off"></i>
              <span className="example--caption">notification-off</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--star-stroke"></i>
              <span className="example--caption">star-stroke</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--star-filled"></i>
              <span className="example--caption">star-filled</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--menu"></i>
              <span className="example--caption">menu</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--categories"></i>
              <span className="example--caption">categories</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--mail"></i>
              <span className="example--caption">mail</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--chat-filled"></i>
              <span className="example--caption">chat-filled</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--popular"></i>
              <span className="example--caption">popular</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--paper-check-2"></i>
              <span className="example--caption">paper-check-2</span>
            </div>

            <div className="example--icon-container">
              <i className="dashing-icon dashing-icon--pause"></i>
              <span className="example--caption">pause</span>
            </div>
        </div>
      </div>
    </AppContent>
  </Layout>
)
