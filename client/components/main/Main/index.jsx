'use strict';

import React from 'react';
import ConnectionSelector from './ConnectionSelector';
import Database from './Database';

class Main extends React.Component {
  render() {
    const { instances, activeInstanceKey, favorites, patternStore } = this.props;
    const contents = instances.map(instance => {
      return <div
        key={instance.get('key')}
        style={ { display: instance.get('key') === activeInstanceKey ? 'block' : 'none' } }>
        {
          instance.get('redis') ?
            <Database
              redis={instance.get('redis')}
              patternStore={patternStore}
              connectionKey={instance.get('connectionKey')}
            /> :
            <ConnectionSelector
              key={instance.get('key')}
              title={instance.get('host')}
              connectStatus={instance.get('connectStatus')}
              favorites={favorites}
            />
        }
      </div>;
    }).toJS();

    return <div className="main">{ contents }</div>;
  }
}

export default Main;
