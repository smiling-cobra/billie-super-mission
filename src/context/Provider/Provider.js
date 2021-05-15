import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context';

const Provider = ({ children }) => {
  const [state, setState] = useState(
    [{
      id: 1,
      name: 'Martian Firma',
      budget: 10000.0000,
      budget_spent: 4500.0000,
      date_of_first_purchase: '2119-07-07',
    }, {
      id: 2,
      name: 'Solar Firma',
      budget: 1123.2200,
      budget_spent: 451.3754,
      date_of_first_purchase: '2120-01-14',
    }, {
      id: 42,
      name: 'Yellow Corp.',
      budget: 1000000.0000,
      budget_spent: 1000.0000,
      date_of_first_purchase: '2121-12-24',
    }],
  );
  return (
    <Context.Provider value={{
      companies: state,
      updateState: () => setState(),
    }}
    >
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.element,
};

Provider.defaultProps = {
  children: null,
};

export default Provider;