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
          <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--arrow-down"></i>
              <span class="example--caption">arrow-down</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--arrow-up"></i>
              <span class="example--caption">arrow-up</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--arrow-right"></i>
              <span class="example--caption">arrow-right</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--arrow-left"></i>
              <span class="example--caption">arrow-left</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--arrow-long-down"></i>
              <span class="example--caption">arrow-long-down</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--arrow-long-up"></i>
              <span class="example--caption">arrow-long-up</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--arrow-long-right"></i>
              <span class="example--caption">arrow-long-right</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--arrow-long-left"></i>
              <span class="example--caption">arrow-long-left</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--alert-filled"></i>
              <span class="example--caption">alert-filled</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--alert-stroke"></i>
              <span class="example--caption">alert-stroke</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--checkmark-filled"></i>
              <span class="example--caption">checkmark-filled</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--checkmark-stroke"></i>
              <span class="example--caption">checkmark-stroke</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--info-filled"></i>
              <span class="example--caption">info-filled</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--info-stroke"></i>
              <span class="example--caption">info-stroke</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--question-filled"></i>
              <span class="example--caption">question-filled</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--question-stroke"></i>
              <span class="example--caption">question-stroke</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--calendar"></i>
              <span class="example--caption">calendar</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--time"></i>
              <span class="example--caption">time</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--search"></i>
              <span class="example--caption">search</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--checkmark"></i>
              <span class="example--caption">checkmark</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--close"></i>
              <span class="example--caption">close</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--add"></i>
              <span class="example--caption">add</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--minus"></i>
              <span class="example--caption">minus</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--fit-page"></i>
              <span class="example--caption">fit-page</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--fit-width"></i>
              <span class="example--caption">fit-width</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--flip"></i>
              <span class="example--caption">flip</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--rotate"></i>
              <span class="example--caption">rotate</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--phone"></i>
              <span class="example--caption">phone</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--comment"></i>
              <span class="example--caption">comment</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--comment-add"></i>
              <span class="example--caption">comment-add</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--show"></i>
              <span class="example--caption">show</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--hidden"></i>
              <span class="example--caption">hidden</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--info"></i>
              <span class="example--caption">info</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--location"></i>
              <span class="example--caption">location</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--locked"></i>
              <span class="example--caption">locked</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--unlocked"></i>
              <span class="example--caption">unlocked</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--new-tab"></i>
              <span class="example--caption">new-tab</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--notification"></i>
              <span class="example--caption">notification</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--page"></i>
              <span class="example--caption">page</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--pencil"></i>
              <span class="example--caption">pencil</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--play"></i>
              <span class="example--caption">play</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--grid"></i>
              <span class="example--caption">grid</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--reply"></i>
              <span class="example--caption">reply</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--settings"></i>
              <span class="example--caption">settings</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--trash"></i>
              <span class="example--caption">trash</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--view-single"></i>
              <span class="example--caption">view-single</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--view-double"></i>
              <span class="example--caption">view-double</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--heart"></i>
              <span class="example--caption">heart</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--add-person"></i>
              <span class="example--caption">add-person</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--paper-check"></i>
              <span class="example--caption">paper-check</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--inbox"></i>
              <span class="example--caption">inbox</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--face-amazing"></i>
              <span class="example--caption">face-amazing</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--face-awful"></i>
              <span class="example--caption">face-awful</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--face-ok"></i>
              <span class="example--caption">face-ok</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--face-good"></i>
              <span class="example--caption">face-good</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--face-bad"></i>
              <span class="example--caption">face-bad</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--mobile-phone"></i>
              <span class="example--caption">mobile-phone</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--notification-off"></i>
              <span class="example--caption">notification-off</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--star-stroke"></i>
              <span class="example--caption">star-stroke</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--star-filled"></i>
              <span class="example--caption">star-filled</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--menu"></i>
              <span class="example--caption">menu</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--categories"></i>
              <span class="example--caption">categories</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--mail"></i>
              <span class="example--caption">mail</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--chat-filled"></i>
              <span class="example--caption">chat-filled</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--popular"></i>
              <span class="example--caption">popular</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--paper-check-2"></i>
              <span class="example--caption">paper-check-2</span>
            </div>

            <div class="example--icon-container">
              <i class="dashing-icon dashing-icon--pause"></i>
              <span class="example--caption">pause</span>
            </div>
        </div>
      </div>
    </AppContent>
  </Layout>
)
