import { IOCServiceType, IOCCallbackType, IOCContainerInterface } from './types'

const IOCContainer: () => IOCContainerInterface = () => {
  
  const services: {[key: string]: IOCServiceType } = {}
  const callbacks: {[key: string]: IOCCallbackType} = {}

  const add = (name: string, cb: IOCCallbackType) => {
    callbacks[name] = cb
  }

  const get = (name: string) => {
    if (!services[name]) {
      services[name] = callbacks[name](get);
    }
    return services[name]
  }

  return {
    add,
    get
  }

}

export default IOCContainer