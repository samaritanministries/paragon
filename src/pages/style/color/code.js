import React from 'react'
import $ from 'jquery';

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'

class ColorCode extends React.Component {

  componentDidMount() {
    var colorSwatchText;

    $('.example-flex .column-flex').hover( function() { showColor(this); }, function() { $(this).text(colorSwatchText); });

    function showColor(colorSwatch) {
      var colorSwatchHex = getHexColorOf($(colorSwatch).css('backgroundColor'));
      colorSwatchText = $(colorSwatch).text();
      $(colorSwatch).html("<input type='text' value='" + colorSwatchHex + "' readonly />");
      $(colorSwatch).children("input").select();
    }

    function getHexColorOf(colorval) {
      var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      delete(parts[0]);
      for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length === 1) parts[i] = '0' + parts[i];
      }
      return '#' + parts.join('');
    }
  }

  render() {

    const currentPageName = "Color";
    const currentPageNameLower = currentPageName.toLowerCase();

    return (

  <Layout>
    <header className="subnav">
      <h1>{currentPageName}</h1>
      <SubNav pageName={currentPageNameLower} sectionName="style"/>
    </header>
    <AppContent>
      <div className="row">
        <div className="column column--full">
          <h2>Color Theme</h2>
        </div>
      </div>

      <div className="row">
        <div className="column column--full no-padding--top">
          <section className="example-flex card">
          <div className="row-flex row-column row-flex--example ">
            <div className="column-flex default blue">$blue</div>
            <div className="column-flex blue-50">$blue-50</div>
            <div className="column-flex blue-100">$blue-100</div>
            <div className="column-flex blue-200">$blue-200</div>
            <div className="column-flex blue-300">$blue-300</div>
            <div className="column-flex blue-400">$blue-400</div>
            <div className="column-flex blue-500">$blue-500</div>
            <div className="column-flex blue-600">$blue-600</div>
            <div className="column-flex blue-700">$blue-700</div>
            <div className="column-flex blue-800">$blue-800</div>
            <div className="column-flex blue-900">$blue-900</div>
          </div>

          <div className="row-flex row-column">
            <div className="column-flex default yellow">$yellow</div>
            <div className="column-flex yellow-50"> $yellow-50</div>
            <div className="column-flex yellow-100">$yellow-100</div>
            <div className="column-flex yellow-200">$yellow-200</div>
            <div className="column-flex yellow-300">$yellow-300</div>
            <div className="column-flex yellow-400">$yellow-400</div>
            <div className="column-flex yellow-500">$yellow-500</div>
            <div className="column-flex yellow-600">$yellow-600</div>
            <div className="column-flex yellow-700">$yellow-700</div>
            <div className="column-flex yellow-800">$yellow-800</div>
            <div className="column-flex yellow-900">$yellow-900</div>
          </div>


          <div className="row-flex row-column">
            <div className="column-flex default green">$green</div>
            <div className="column-flex green-50"> $green-50</div>
            <div className="column-flex green-100">$green-100</div>
            <div className="column-flex green-200">$green-200</div>
            <div className="column-flex green-300">$green-300</div>
            <div className="column-flex green-400">$green-400</div>
            <div className="column-flex green-500">$green-500</div>
            <div className="column-flex green-600">$green-600</div>
            <div className="column-flex green-700">$green-700</div>
            <div className="column-flex green-800">$green-800</div>
            <div className="column-flex green-900">$green-900</div>
          </div>

          <div className="row-flex row-column">
            <div className="column-flex default orange">$orange</div>
            <div className="column-flex orange-50"> $orange-50</div>
            <div className="column-flex orange-100">$orange-100</div>
            <div className="column-flex orange-200">$orange-200</div>
            <div className="column-flex orange-300">$orange-300</div>
            <div className="column-flex orange-400">$orange-400</div>
            <div className="column-flex orange-500">$orange-500</div>
            <div className="column-flex orange-600">$orange-600</div>
            <div className="column-flex orange-700">$orange-700</div>
            <div className="column-flex orange-800">$orange-800</div>
            <div className="column-flex orange-900">$orange-900</div>
          </div>

          <div className="row-flex row-column">
            <div className="column-flex default purple">$purple</div>
            <div className="column-flex purple-50"> $purple-50</div>
            <div className="column-flex purple-100">$purple-100</div>
            <div className="column-flex purple-200">$purple-200</div>
            <div className="column-flex purple-300">$purple-300</div>
            <div className="column-flex purple-400">$purple-400</div>
            <div className="column-flex purple-500">$purple-500</div>
            <div className="column-flex purple-600">$purple-600</div>
            <div className="column-flex purple-700">$purple-700</div>
            <div className="column-flex purple-800">$purple-800</div>
            <div className="column-flex purple-900">$purple-900</div>
          </div>


          <div className="row-flex row-column">
            <div className="column-flex default red">$red</div>
            <div className="column-flex red-50">$red-50</div>
            <div className="column-flex red-100">$red-100</div>
            <div className="column-flex red-200">$red-200</div>
            <div className="column-flex red-300">$red-300</div>
            <div className="column-flex red-400">$red-400</div>
            <div className="column-flex red-500">$red-500</div>
            <div className="column-flex red-600">$red-600</div>
            <div className="column-flex red-700">$red-700</div>
            <div className="column-flex red-800">$red-800</div>
            <div className="column-flex red-900">$red-900</div>
          </div>

          <div className="row-flex row-column">
            <div className="column-flex default gray">$gray</div>
            <div className="column-flex gray-50 half-height">$gray-50</div>
            <div className="column-flex gray-100 half-height">$gray-100</div>
            <div className="column-flex gray-150 half-height">$gray-150</div>
            <div className="column-flex gray-200 half-height">$gray-200</div>
            <div className="column-flex gray-250">$gray-250</div>
            <div className="column-flex gray-300">$gray-300</div>
            <div className="column-flex gray-400">$gray-400</div>
            <div className="column-flex gray-500">$gray-500</div>
            <div className="column-flex gray-600">$gray-600</div>
            <div className="column-flex gray-700">$gray-700</div>
            <div className="column-flex gray-800">$gray-800</div>
            <div className="column-flex gray-900">$gray-900</div>
          </div>

          <div className="row-flex row-column">
            <div className="column-flex default gray-cool">$gray-cool</div>
            <div className="column-flex gray-50 half-height">$gray-50c</div>
            <div className="column-flex gray-100c half-height">$gray-100c</div>
            <div className="column-flex gray-150c half-height">$gray-150c</div>
            <div className="column-flex gray-200c half-height">$gray-200c</div>
            <div className="column-flex gray-250c">$gray-250c</div>
            <div className="column-flex gray-300c">$gray-300c</div>
            <div className="column-flex gray-400c">$gray-400c</div>
            <div className="column-flex gray-500c">$gray-500c</div>
            <div className="column-flex gray-600c">$gray-600c</div>
            <div className="column-flex gray-700c">$gray-700c</div>
            <div className="column-flex gray-800c">$gray-800c</div>
            <div className="column-flex gray-900c">$gray-900c</div>
          </div>
        </section>
        </div>
      </div>

    </AppContent>
  </Layout>
)
}
}
export default ColorCode;
