class BaseComponent {

    constructor() {
        if (this.constructor === BaseComponent) {
            throw new Error('cannot create check for abstract class BaseComponent ;( ')
        }
    }
    getProxyState(initialState) {
        return new Proxy(initialState, {
          get: (target, prop) => {
            return target[prop]
          },
          set: (target, prop, newValue) => {
            const oldValue = target[prop]
    
            target[prop] = newValue
    
            if (newValue !== oldValue) {
              this.updateUI()
            }
    
            return true
          },
        })
      }

      updateUI() {
        throw new Error('you need to make updateUI oh my God')
      }

    }

export default BaseComponent