module.exports = {
  node: {
    description: {
      displayName: 'Peak AI',
      name: 'peakAi',
      icon: 'fa:search',
      group: ['transform'],
      version: 1,
      description: 'Look up LinkedIn contacts via Peak AI',
      defaults: {
        name: 'Peak AI',
      },
      inputs: ['main'],
      outputs: ['main'],
      properties: [
        {
          displayName: 'Operation',
          name: 'operation',
          type: 'options',
          options: [
            {
              name: 'Lookup Contact',
              value: 'lookupContact',
            },
          ],
          default: 'lookupContact',
        },
        {
          displayName: 'LinkedIn URL',
          name: 'linkedInUrl',
          type: 'string',
          required: true,
          default: '',
          displayOptions: {
            show: {
              operation: ['lookupContact'],
            },
          },
        },
      ],
    },
  },
};