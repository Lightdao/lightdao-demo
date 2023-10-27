export const renderTrack = ({ style, ...props }: any) => {
  const trackStyle = {
    position: 'absolute',
    maxWidth: '100%',
    width: 6,
    transition: 'opacity 200ms ease 0s',
    opacity: 0,
    background: 'transparent',
    bottom: 2,
    top: 2,
    borderRadius: 3,
    right: 0,
  };
  return <div style={{ ...style, ...trackStyle }} {...props} />;
};
export const renderThumb = ({ style, ...props }: any) => {
  const thumbStyle = {
    borderRadius: 15,
    background: 'rgba(222, 222, 222, .1)',
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};
export const renderView = ({ style, ...props }: any) => {
  const viewStyle = {
    marginBottom: -22,
  };
  return (
    <div
      me={{ base: '0px !important', md: '-16px !important' }}
      style={{ ...style, ...viewStyle }}
      {...props}
    />
  );
};
export const renderViewMini = ({ style, ...props }: any) => {
  const viewStyle = {
    marginBottom: -22,
  };
  return (
    <div
      me={{ base: '0px !important', md: '-16px !important' }}
      style={{ ...style, ...viewStyle }}
      {...props}
    />
  );
};

export const renderTrackMessages = ({ style, ...props }: any) => {
  const trackStyle = {
    position: 'absolute',
    maxWidth: '100%',
    width: 6,
    transition: 'opacity 200ms ease 0s',
    opacity: 0,
    background: 'transparent',
    bottom: -10,
    borderRadius: 3,
    right: '-10px',
  };
  return <div style={{ ...style, ...trackStyle }} {...props} />;
};
export const renderThumbMessages = ({ style, ...props }: any) => {
  const thumbStyle = {
    borderRadius: 15,
    background: 'rgba(222, 222, 222, .1)',
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};
export const renderViewMessages = ({ style, ...props }: any) => {
  const viewStyle = {
    innerHeight: '100%',
    height: '100%',
    overflowX: 'visible',
  };
  return <div style={{ ...style, ...viewStyle }} {...props} />;
};

export const kanbanRenderTrack = ({ style, ...props }: any) => {
  const trackStyle = {
    width: 6,
    transition: 'opacity 200ms ease 0s',
    opacity: 0,
    bottom: 2,
    top: 2,
    borderRadius: 3,
    right: 0,
  };
  return <div style={{ ...style, ...trackStyle }} {...props} />;
};
export const kanbanRenderThumb = ({ style, ...props }: any) => {
  const thumbStyle = {
    borderRadius: 15,
    background: 'rgba(222, 222, 222, .1)',
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};
export const kanbanRenderView = ({ style, ...props }: any) => {
  const viewStyle = {
    position: 'relative',
    marginRight: -15,
  };
  return <div style={{ ...style, ...viewStyle }} {...props} />;
};

export const storiesRenderTrack = ({ style, ...props }: any) => {
  const trackStyle = {
    width: 6,
    transition: 'opacity 200ms ease 0s',
    opacity: 0,
    bottom: 2,
    top: 2,
    borderRadius: 3,
    right: 0,
  };
  return <div style={{ ...style, ...trackStyle }} {...props} />;
};
export const storiesRenderThumb = ({ style, ...props }: any) => {
  const thumbStyle = {
    borderRadius: 15,
    background: 'rgba(222, 222, 222, .1)',
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};
export const storiesRenderView = ({ style, ...props }: any) => {
  const viewStyle = {
    position: 'relative',
    marginRight: -15,
  };
  return <div style={{ ...style, ...viewStyle }} {...props} />;
};
