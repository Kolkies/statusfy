module.exports = {
  title: 'Statusfy Demo',
  description: 'A marvelous open source Status Page system',
  baseUrl: 'https://demo.statusfy.co',
  defaultLocale: 'en',
  locales: [
    { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
    { code: 'es', iso: 'es-ES', name: 'Español', file: 'es.json' }
  ],
  contentConfig: {
    frontMatterFormat: 'yaml',
    systems: [
      'cdn',
      'conversions',
      'site-delivery',
      'api'
    ]
  }
}
