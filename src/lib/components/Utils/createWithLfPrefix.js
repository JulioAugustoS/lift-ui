import React from 'react';
import classNames from 'classnames';
import camelize from 'dom-helpers/util/camelize';
import { useLiftPrefix } from '../ThemeProvider';

const pascalCase = str => str[0].toUpperCase() + camelize(str).slice(1);

const createWithLsPrefix = (
  prefix,
  { displayName = pascalCase(prefix), Component = 'div', defaultProps } = {},
) => {
  const LsComponent = React.forwardRef(
    ({ className, lsPrefix, as: Tag = Component, ...props }, ref) => {
      const resolvedPrefix = useLiftPrefix(lsPrefix, prefix);
      return (
        <Tag
          ref={ref}
          className={classNames(className, resolvedPrefix)}
          {...props}
        />
      );
    },
  );
  LsComponent.defaultProps = defaultProps;
  LsComponent.displayName = displayName;
  return LsComponent;
} 

export default createWithLsPrefix;

