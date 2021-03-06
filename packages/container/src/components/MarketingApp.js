import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';
import { useHistory, useLocation } from 'react-router-dom';

const MarketingApp = () => {
  const ref = useRef(null);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    if (onParentNavigate) {
      history.listen(onParentNavigate);
    }
  }, []);

  return <div ref={ref}></div>;
};

export default MarketingApp;
