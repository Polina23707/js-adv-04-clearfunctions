import lifeStatus from '../basic';

test.each([
  [{name: 'Маг', health: 10}, 'critical'],
  [{name: 'Фея', health: 15}, 'wounded'],
  [{name: 'Гном', health: 40}, 'wounded'],
  [{name: 'Гном', health: 50}, 'wounded'],
  [{name: 'Единорог', health: 55}, 'healthy']
])(('should check life status for %s'), 
(health, expected) => {
  const result = lifeStatus(health);
  expect(result).toBe(expected);
})
