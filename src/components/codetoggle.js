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

  toggleCode() {
    this.setState((prevState) => ({
      showCode: !prevState.showCode
    }));
  }

  componentDidMount() {
    Prism.highlightAll();
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
        {language === "html" &&
        <pre className={showCode ? "language-html show" : "language-html"}>
          <code className={showCode ? "language-html show" : "language-html"}>{children}</code>
        </pre>
        }
        {language === "scss" &&
        <pre className={showCode ? "language-scss show" : "language-scss"}>
          <code className={showCode ? "language-scss show" : "language-scss"}>{children}</code>
        </pre>
        }
        {language === "jsx" &&
        <pre className={showCode ? "language-jsx show" : "language-jsx"}>
          <code className={showCode ? "language-jsx show" : "language-jsx"}>{children}</code>
        </pre>
        }
      </div>
    );
  }

}

CodeToggle.propTypes = {
  language: PropTypes.string
};

CodeToggle.defaultProps = {
  language: "html"
};

export default CodeToggle;
