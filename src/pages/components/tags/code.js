import React from 'react'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'
import CodeToggleSCSS from '../../../components/codetoggle-scss'

const currentPageName = "Tags";
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
          <h2 class="example-header no-margin--top">Solid Tag <button class="button button--transparent button--copy-link" data-id="copyurl" id="Solid_Tag" /></h2>
          <div class="row example-container">
            <div class="column column--full">
              <a class="tag tag--blue tag--solid">Blue Tag</a>
            <a class="tag tag--gray tag--solid">Gray Tag</a>
            </div>
          </div>
          <CodeToggle>
{`<a class="tag tag--blue tag--solid">Blue Tag</a>
<a class="tag tag--gray tag--solid">Gray Tag</a>`}
          </CodeToggle>

          <h2 class="example-header">Large Tag <button class="button button--transparent button--copy-link" data-id="copyurl" id="Large_Tag" /></h2>
  			  <div class="row example-container">
      			<div class="column column--full ">
      				<a class="tag tag--blue tag--large">Large Blue Tag</a>
  					  <a class="tag tag--gray tag--large tag--solid">Large Gray Tag</a>
      			</div>
      		</div>
          <CodeToggle>
{`<a class="tag tag--blue tag--large">Large Blue Tag</a>
<a class="tag tag--gray tag--large tag--solid">Large Gray Tag</a>`}
          </CodeToggle>

          <h2 class="example-header">Tag Counters <button class="button button--transparent button--copy-link" data-id="copyurl" id="Tag_Counters" /></h2>
  				<div class="row example-container">
      			<div class="column column--full ">
      				<div class="tag--counter">
    						<a class="tag tag--blue">Blue Tag</a>{/*
    						*/}<a class="tag tag--blue">1</a>
    					</div>
    					<div class="tag--counter">{/*
    						*/}<a class="tag tag--gray">Gray Tag</a>{/*
    						*/}<a class="tag tag--gray">2</a>
    					</div>
    					<div class="tag--counter">{/*
    						*/}<a class="tag tag--blue tag--solid">Blue Tag (Solid)</a>{/*
    						*/}<a class="tag tag--blue tag--solid">300</a>
    					</div>
    			  </div>
    		  </div>
          <CodeToggle>
{`<div class="tag--counter">
	<a class="tag tag--blue">Blue Tag</a><!--
	--><a class="tag tag--blue">1</a>
</div>

<div class="tag--counter">
	<a class="tag tag--gray">Gray Tag</a><!--
	--><a class="tag tag--gray">2</a>
</div>

<div class="tag--counter">
	<a class="tag tag--blue tag--solid">Blue Tag (Solid)</a><!--
	--><a class="tag tag--blue tag--solid">2</a>
</div>`}
          </CodeToggle>

          <h2 class="example-header">Tag - No Link <button class="button button--transparent button--copy-link" data-id="copyurl" id="Tag_No_Link" /></h2>
    			<div class="row example-container">
        			<div class="column column--full ">
        				<div class="tag tag--blue tag--no-link tag--solid">Blue Tag</div>
    					<div class="tag tag--gray tag--no-link tag--solid">Gray Tag</div>
        			</div>
        		</div>
            <CodeToggle>
{`<a class="tag tag--blue tag--no-link tag--solid">Blue Tag</a>
<a class="tag tag--gray tag--no-link tag--solid">Gray Tag</a>`}
            </CodeToggle>

            <h2 class="example-header">Tag - Colors <button class="button button--transparent button--copy-link" data-id="copyurl" id="Tag_Colors"/></h2>
			      <div class="row example-container">
    			     <div class="column column--full">
        				<a class="tag">Default Tag</a>
      					<a class="tag tag--gray">Gray Tag</a>
      					<a class="tag tag--blue">Blue Tag</a>
      					<a class="tag tag--green">Green Tag</a>
      					<a class="tag tag--orange">Orange Tag</a>
      					<a class="tag tag--purple">Purple Tag</a>
      					<a class="tag tag--red">Red Tag</a>
      					<br/>
      					<a class="tag tag--white tag--solid">White Tag</a>
      					<a class="tag tag--gray tag--solid">Gray Tag</a>
      					<a class="tag tag--blue tag--solid">Blue Tag</a>
      					<a class="tag tag--green tag--solid">Green Tag</a>
      					<a class="tag tag--orange tag--solid">Orange Tag</a>
      					<a class="tag tag--purple tag--solid">Purple Tag</a>
      					<a class="tag tag--red tag--solid">Red Tag</a>
    			    </div>
    		   </div>
           <CodeToggle>
{`<a class="tag">Default Tag</a>
<a class="tag tag--gray">Gray Tag</a>
<a class="tag tag--blue">Blue Tag</a>
<a class="tag tag--green">Green Tag</a>
<a class="tag tag--orange">Orange Tag</a>
<a class="tag tag--purple">Purple Tag</a>
<a class="tag tag--red">Red Tag</a>

<a class="tag tag--white tag--solid">White Tag</a>
<a class="tag tag--gray tag--solid">Gray Tag</a>
<a class="tag tag--blue tag--solid">Blue Tag</a>
<a class="tag tag--green tag--solid">Green Tag</a>
<a class="tag tag--orange tag--solid">Orange Tag</a>
<a class="tag tag--purple tag--solid">Purple Tag</a>
<a class="tag tag--red tag--solid">Red Tag</a>`}
           </CodeToggle>

           <h2 class="example-header">Tag - Custom <button class="button button--transparent button--copy-link" data-id="copyurl" id="Tag_Custom" /></h2>
      			<div class="row example-container hide-HTML-code">
        			<div class="column column--full ">
        				<div class="tag plan-1 tag--large tag--no-link">Classic</div>
    					  <div class="tag plan-11 tag--no-link">Basic</div>
        			</div>
          	</div>
            <CodeToggle>
            </CodeToggle>
            <CodeToggleSCSS>
 {`//Example: Custom Tags
.tag {
	&.my-custom-tag {
		@include tag($background-color: #FAA443, $color: $black, $border-color: #FAA443, $hover-color: $black, $hover-border-color: #FAA443)
	}
}

.tag--counter {
	#{$tag-hover-rules} {
		&.my-custom-tag {
			border-color: red;
		}
	}
}`}
            </CodeToggleSCSS>

        </div>
      </div>
    </AppContent>
  </Layout>
)
