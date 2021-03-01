export type IOCServiceType = {[key: string]: any}

export type IOCCallbackType = (get:((name: string) => IOCServiceType)) => IOCServiceType

export interface IOCContainerInterface {
  add: (name: string, cb: IOCCallbackType) => void
  get: (name: string) => IOCServiceType
}