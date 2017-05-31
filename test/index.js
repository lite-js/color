/* global describe, it */
const assert = require('assert')
const Color = require('../index')

describe('Color', () => {
  it('Color initProps', () => {
    const color = new Color()
    assert.equal(color.r, 255)
    assert.equal(color.g, 255)
    assert.equal(color.b, 255)
    assert.equal(color.a, 1)
  })
  it('white is #fff', () => {
    assert.deepEqual(
      Color.fromString('white').toRgba(),
      new Color('#fff').toRgba()
    )
  })
  it('white is also #ffffff', () => {
    assert.deepEqual(
      Color.fromString('white').toRgba(),
      new Color('#ffffff').toRgba()
    )
  })
  it('white is new Color()', () => {
    assert.deepEqual(
      Color.fromString('white').toRgba(),
      new Color().toRgba()
    )
  })
  it('maroon is #800000', () => {
    assert.deepEqual(
      Color.fromString('maroon').toRgba(),
      new Color('#800000').toRgba()
    )
  })
  it('toGrey returns instance of Color', () => {
    assert.equal(
      Color.fromString('maroon').toGrey() instanceof Color,
      true
    )
  })
})
