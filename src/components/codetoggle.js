import React from "react";
import Prism from "prismjs";
import "prismjs/plugins/custom-class/prism-custom-class.min.js";
import "prismjs/components/prism-jsx.min.js";
import "prismjs/components/prism-scss.min.js";
import PropTypes from "prop-types";

class CodeToggle extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showCode: false };
    this.toggleCode = this.toggleCode.bind(this);
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  toggleCode() {
    this.setState((prevState) => ({
      showCode: !prevState.showCode
    }));
  }

  render() {
    const { children, language } = this.props;
    const { showCode } = this.state;
    Prism.plugins.customClass.map({ tag: "exampletag" });

    return (
      <div className={showCode ? "group-open" : ""}>
        <div onClick={this.toggleCode} className={showCode ? "code-toggle is-open" : "code-toggle"}>
          <i className="icon--code" />
        </div>
        <pre className={showCode ? `language-${language} show` : `language-${language}`}>
          <code className={showCode ? `language-${language} show` : `language-${language}`}>{children}</code>
        </pre>
      </div>
    );
  }

}

CodeToggle.propTypes = {
  children: PropTypes.string,
  language: PropTypes.string
};

CodeToggle.defaultProps = {
  children: "Default",
  language: "html"
};

export default CodeToggle;
