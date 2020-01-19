import metadata from 'metadata'

const { env, showAllBorders } = metadata

const FORCE_OUTLINE_ALL_BORDERS = `
*, *:before, *:after {
  border: 0.1px solid pink;
}
`

const COMMON_BORDER_OUTLINE = '' // no adjustments to make

const allBorderOutlines =
  showAllBorders && env !== 'production'
    ? FORCE_OUTLINE_ALL_BORDERS
    : COMMON_BORDER_OUTLINE

export default allBorderOutlines
