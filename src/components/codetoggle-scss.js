import React from 'react'
import Prism from 'prismjs';

class CodeToggleSCSS extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showCode: false };
    this.toggleCode = this.toggleCode.bind(this);
  }

   toggleCode() {
    this.setState(prevState => ({
      showCode: !prevState.showCode
    }));
  }

  componentDidMount() {
    var script = document.createElement('script');
    script.src = "/prism.js";
    document.getElementsByTagName('head')[0].appendChild(script);

    Prism.highlightAll();
  }

  render() {

    return (
      <pre className="language-scss">
        <code className="language-scss">{this.props.children}</code>
      </pre>
    )
  }
}
export default CodeToggleSCSS;
