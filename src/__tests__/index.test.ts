import IOCContainer from '../index'
import { IOCContainerInterface } from '../types'

describe('IOCContainer', () => {

  let c:IOCContainerInterface

  class TestModule1 {
    constructor(mutable:{name: string}){
      mutable.name = 'bobby'
    }
  }

  class TestModule2 {
    constructor(c: TestModule1, d:typeof TestObject){}
  }

  const TestObject = (mutable:{name: string}) => {
    mutable.name = mutable.name + ' blue'
    return {id: 3}
  }

  beforeEach(() => {
    c = IOCContainer()
  })

  test('can add and retrieve a class', () => {
    c.add('TestModule1', (get:Function) => new TestModule1({name: 'none'}))
    expect(c.get('TestModule1') instanceof TestModule1).toEqual(true)
  })

  test('lazily instantiates the service', () => {
    const mutable = {name: 'none'}
    c.add('TestModule1', (get:Function) => new TestModule1(mutable))
    expect(mutable.name).toEqual('none')
    c.get('TestModule1')
    expect(mutable.name).toEqual('bobby')
  })

  test('can add and retreive an object', () => {
    c.add('TestObject', (get:Function) => TestObject({name: 'none'}))
    expect(c.get('TestObject').id).toEqual(3)
  })

  test('can instantiate services with dependencies', () => {
    const mutable = {name: 'none'}
    c.add('TestModule1', (get:Function) => new TestModule1(mutable))
    c.add('TestObject', (get:Function) => TestObject(mutable))
    c.add('TestModule2', (get:Function) => new TestModule2(get('TestModule1'), get('TestObject')))
    expect(mutable.name).toEqual('none')
    c.get('TestModule2')
    expect(mutable.name).toEqual('bobby blue')
  })

})