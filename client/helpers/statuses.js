export default ($t = null) => {
  // Important order of relevance
  const keys = [
    'under-maintenance',
    'major-outage',
    'partial-outage',
    'degraded-performance',
    'operational'
  ]

  let i18nKeys
  if ($t) {
    i18nKeys = keys.reduce((acc, cur) => { acc[cur] = $t(`systems.statuses.${cur}`); return acc }, {})
  }

  const colors = {
    'under-maintenance': 'grey-darker',
    'degraded-performance': 'indigo',
    'partial-outage': 'orange',
    'major-outage': 'red',
    'operational': 'green'
  }
  const icons = {
    'under-maintenance': 'clock',
    'degraded-performance': 'exclamation-circle',
    'partial-outage': 'minus-circle',
    'major-outage': 'times-circle',
    'operational': 'check-circle'
  }

  return {
    keys,
    i18nKeys,
    colors,
    icons
  }
}
