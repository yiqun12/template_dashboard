import React from 'react';

const Marker = (props) => {
    const { name } = props;
    return (
      <div className="google-marker"
        style={{ cursor: 'pointer'}}
        title={name}
      />
    );
  };

  export default Marker;