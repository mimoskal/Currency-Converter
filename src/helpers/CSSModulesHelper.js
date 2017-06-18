import rcm from 'react-css-modules';

// CSSModules :: {StyleMap, Options} -> ReactComponent -> ReactComponent
const CSSModules = (styles, opts) => component => rcm(component, styles, opts);
export default CSSModules;
