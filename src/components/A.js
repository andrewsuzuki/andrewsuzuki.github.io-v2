import { styled, A, mixins, utils } from 'otep'


export default styled(A)((props, t) => ({
  display: 'inline-block',
  padding: '0 4px',
  margin: '0 -1px',

  background: t.grayLightest,
  color: t.baseTextColor,

  ...mixins.hover({
    background: utils.fade(t.brandSuccess, 90),
  }),
}))
