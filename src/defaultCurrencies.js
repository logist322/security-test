export default [
  {
    name: 'BTC',
    type: 'crypto',
    commission: {
      type: 'perc',
      value: 5
    },
    minsum: 0.001,
    count: 0
  }, {
    name: 'USD',
    type: 'fiat',
    commission: {
      type: 'perc',
      value: 5
    },
    minsum: 100,
    count: 0
  }, {
    name: 'DOGE',
    type: 'crypto',
    commission: {
      type: 'abs',
      value: 0.5
    },
    minsum: 5,
    count: 0
  }, {
    name: 'LTC',
    type: 'crypto',
    commission: {
      type: 'abs',
      value: 0.5
    },
    minsum: 1,
    count: 0
  }, {
    name: 'SHIB',
    type: 'crypto',
    commission: {
      type: 'abs',
      value: 10
    },
    minsum: 500,
    count: 0
  }, {
    name: 'RUR',
    type: 'fiat',
    commission: {
      type: 'perc',
      value: 0
    },
    minsum: 10000,
    count: 0
  }, {
    name: 'BNB',
    type: 'crypto',
    commission: {
      type: 'abs',
      value: 0.01
    },
    minsum: 0.15,
    count:  0
  }
];