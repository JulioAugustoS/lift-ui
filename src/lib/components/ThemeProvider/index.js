import React, { useContext, Component } from 'react';
import forwardRef from '@restart/context/forwardRef';
import propTypes from 'prop-types';

const ThemeContext = React.createContext(new Map());
const { Consumer, Provider } = ThemeContext;

class ThemeProvider extends Component {
  static propTypes = {
    prefixes: propTypes.object.isRequired,
  };

  constructor(...args){
    super(...args);
    this.prefixes = new Map();
    Object.keys(this.props.prefixes).forEach(key => {
      this.prefixes.set(key, this.props.prefixes[key]);
    });
  }

  render(){
    return <Provider value={this.prefixes}>{ this.props.children }</Provider>;
  }
}

export const useLiftPrefix = (prefix, defaultPrefix) => {
  const prefixes = useContext(ThemeContext);
  return prefix || prefixes.get(defaultPrefix) || defaultPrefix;
}

const createLiftComponent = (Component, opts) => {
  if(typeof opts === 'string') opts = { prefix: opts };
  const isClassy = Component.proptype && Component.prototype.isReactComponent;
  
  const { prefix, forwardRefAs = isClassy ? 'ref' : 'innerRef' } = opts;

  return forwardRef(
    ({ ...props }, ref) => {
      props[forwardRefAs] = ref;
      const prefixes = useContext(ThemeContext);
      return (
        <Component
          {...props}
          lfPrefix={props.lfPrefix || prefixes.get(prefix) || prefix}
        />
      );
    },
    { displayName: `Lift(${(Component.displayName || Component.name)})` },
  );
}

export { createLiftComponent, Consumer as ThemeConsumer };
export default ThemeProvider;
