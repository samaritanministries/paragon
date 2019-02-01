import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'
import CodeToggleSCSS from '../../../components/codetoggle-scss'

const currentPageName = "Tags";
const currentPageNameLower = currentPageName.toLowerCase();

class TagsCode extends React.Component {
  static propTypes = { location: PropTypes.object.isRequired }

  render() {
    const { location } = this.props;

    return (
      <Layout>
        <header className="subnav">
          <h1>{currentPageName}</h1>
          <SubNav pageName={currentPageNameLower}/>
        </header>
        <AppContent>
          <div className="row">
            <div className="column column--full">
              <h2 className="example-header no-margin--top" id="solidTag">Solid Tag
                <Link to={location.pathname + "/#solidTag"} className="button button--transparent button--copy-link"></Link>
              </h2>
              <div className="row example-container">
                <div className="column column--full">
                  <a className="tag tag--blue tag--solid" href=" ">Blue Tag</a>
                <a className="tag tag--gray tag--solid" href=" ">Gray Tag</a>
                </div>
              </div>
              <CodeToggle>
{`<a class="tag tag--blue tag--solid">Blue Tag</a>
<a class="tag tag--gray tag--solid">Gray Tag</a>`}
              </CodeToggle>

              <h2 className="example-header" id="largeTag">Large Tag
                <Link to={location.pathname + "/#largeTag"} className="button button--transparent button--copy-link"></Link>
              </h2>
      			  <div className="row example-container">
          			<div className="column column--full ">
          				<a className="tag tag--blue tag--large" href=" ">Large Blue Tag</a>
      					  <a className="tag tag--gray tag--large tag--solid" href=" ">Large Gray Tag</a>
          			</div>
          		</div>
              <CodeToggle>
{`<a class="tag tag--blue tag--large">Large Blue Tag</a>
<a class="tag tag--gray tag--large tag--solid">Large Gray Tag</a>`}
              </CodeToggle>

              <h2 className="example-header" id="tagCounters">Tag Counters
                <Link to={location.pathname + "/#tagCounters"} className="button button--transparent button--copy-link"></Link>
              </h2>
      				<div className="row example-container">
          			<div className="column column--full ">
          				<div className="tag--counter">
        						<a className="tag tag--blue" href=" ">Blue Tag</a>{/*
        						*/}<a className="tag tag--blue" href=" ">1</a>
        					</div>
        					<div className="tag--counter">{/*
        						*/}<a className="tag tag--gray" href=" ">Gray Tag</a>{/*
        						*/}<a className="tag tag--gray" href=" ">2</a>
        					</div>
        					<div className="tag--counter">{/*
        						*/}<a className="tag tag--blue tag--solid" href=" ">Blue Tag (Solid)</a>{/*
        						*/}<a className="tag tag--blue tag--solid" href=" ">300</a>
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

              <h2 className="example-header" id="tagNoLink">Tag No Link
                <Link to={location.pathname + "/#tagNoLink"} className="button button--transparent button--copy-link"></Link>
              </h2>
        			<div className="row example-container">
            			<div className="column column--full ">
            				<div className="tag tag--blue tag--no-link tag--solid" href=" ">Blue Tag</div>
        					<div className="tag tag--gray tag--no-link tag--solid" href=" ">Gray Tag</div>
            			</div>
            		</div>
                <CodeToggle>
{`<a class="tag tag--blue tag--no-link tag--solid">Blue Tag</a>
<a class="tag tag--gray tag--no-link tag--solid">Gray Tag</a>`}
                </CodeToggle>

                <h2 className="example-header" id="tagColors">Tag Colors
                  <Link to={location.pathname + "/#tagColors"} className="button button--transparent button--copy-link"></Link>
                </h2>
    			      <div className="row example-container">
        			     <div className="column column--full">
            				<a className="tag" href=" ">Default Tag</a>
          					<a className="tag tag--gray" href=" ">Gray Tag</a>
          					<a className="tag tag--blue" href=" ">Blue Tag</a>
          					<a className="tag tag--green" href=" ">Green Tag</a>
          					<a className="tag tag--orange" href=" ">Orange Tag</a>
          					<a className="tag tag--purple" href=" ">Purple Tag</a>
          					<a className="tag tag--red" href=" ">Red Tag</a>
          					<br/>
          					<a className="tag tag--white tag--solid" href=" ">White Tag</a>
          					<a className="tag tag--gray tag--solid" href=" ">Gray Tag</a>
          					<a className="tag tag--blue tag--solid" href=" ">Blue Tag</a>
          					<a className="tag tag--green tag--solid" href=" ">Green Tag</a>
          					<a className="tag tag--orange tag--solid" href=" ">Orange Tag</a>
          					<a className="tag tag--purple tag--solid" href=" ">Purple Tag</a>
          					<a className="tag tag--red tag--solid" href=" ">Red Tag</a>
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

               <h2 className="example-header" id="tagCustom">Tag Custom
                <Link to={location.pathname + "/#tagCustom"} className="button button--transparent button--copy-link"></Link>
               </h2>
          			<div className="row example-container hide-HTML-code">
            			<div className="column column--full ">
            				<div className="tag plan-1 tag--large tag--no-link" href=" ">classNameic</div>
        					  <div className="tag plan-11 tag--no-link" href=" ">Basic</div>
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
  }
}

export default TagsCode;
