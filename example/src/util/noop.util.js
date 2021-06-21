const noop = () => {}
export default noop

export const noopThunk = () => noop

export const noopAction = () => ({type: 'NOOP'})
