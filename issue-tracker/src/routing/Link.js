import RoutingContext from './RoutingContext';
import React from 'react';

const { useCallback, useContext } = React;

/**
 * An alternative to react-router's Link component that works with
 * our custom RoutingContext.
 */
export default function Link(props) {
  const router = useContext(RoutingContext);
  const changeRoute = useCallback(
    event => {
      event.preventDefault();
      router.history.push(props.to);
    },
    [props.to, router],
  );
  const preloadRouteCode = useCallback(() => {
    router.preloadCode(props.to);
  }, [props.to, router]);
  const preloadRoute = useCallback(() => {
    router.preload(props.to);
  }, [props.to, router]);
  return (
    <a
      href={props.to}
      onClick={changeRoute}
      onMouseEnter={preloadRouteCode}
      onMouseDown={preloadRoute}
    >
      {props.children}
    </a>
  );
}
