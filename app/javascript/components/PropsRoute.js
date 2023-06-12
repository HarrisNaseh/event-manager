import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return React.createElement(component, finalProps);
};

function PropsRoute({ component, ...rest }) {
  // eslint-disable-next-line max-len, react/jsx-props-no-spreading
  return <Route {...rest} render={(routeProps) => renderMergedProps(component, routeProps, rest)} />;
}

PropsRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PropsRoute;
