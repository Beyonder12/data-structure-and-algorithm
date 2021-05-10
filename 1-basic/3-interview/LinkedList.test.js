const LinkedList = require('./LinkedList')

describe('#insertAtHead', () => {
  test('It adds the element in the beginning of the list', () => {
    const ll = new LinkedList()
    ll.insertAtHead(10)
    const oldHead = ll.head
    ll.insertAtHead(20)

    expect(ll.head.value).toBe(20)
    expect(ll.head.next).toBe(oldHead)
    expect(ll.length).toBe(2)
  })
})

describe('#getByIndex', () => {
  describe('with index less than 0', () => {
    test('it returns null', () => {
      const ll = LinkedList.fromValues(10, 20)

      expect(ll.getByIndex(-1)).toBeNull()
    })
  })

  describe('with index greater than list length', () => {
    test('it returns null', () => {
      const ll = LinkedList.fromValues(10, 20)

      expect(ll.getByIndex(5)).toBeNull()
    })
  })

  describe('with index 0', () => {
    test('it returns head', () => {
      const ll = LinkedList.fromValues(10, 20)

      expect(ll.getByIndex(0).value).toBe(10)
    })
  })

  describe('with index in the middle', () => {
    test('it returns element at that index', () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40)

      expect(ll.getByIndex(2).value).toBe(30)
    })
  })
})
