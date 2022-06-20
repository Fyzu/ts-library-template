import { test, assert } from 'vitest'
import { foo } from './'

test('foo', () => {
  assert.equal(foo, 'foo')
})
