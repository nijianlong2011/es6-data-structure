class Node {
    constructor(element){
        this.element = element
        this.next = null
        this.prev = null
    }
}


export default function(){
    let length = 0,
        head = null,
        tail = null

    this.append = element => {
        const node = new Node(element)
        if(head === null){
            head = tail = node
        }else{
            tail.next = node
            node.prev = tail
            tail = node
        }
        length++
    }

    this.insert = (position, element) => {
        if(position < 0 || position > length){
            return false
        }

        const node = new Node(element)

        let current = head

        if(position === 0){
            if(head){
                node.next = current
                current.prev = node
                head = node
            }else{
                head = tail = node
            }
        }else if(position === length){
            current = tail
            current.next = node
            node.prev = current
            tail = node
        }else{
            let previous
            for(let index = 0; index < position; index++){
                previous = current
                current = current.next
            }

            node.next = current
            previous.next = node
            node.prev = previous
            current.prev = node
        }

        length++
        return true
    }

    this.removeAt = position => {
        if(position < 0 || position > length - 1){
            return null
        }

        let current = head

        if(position === 0){
            head = current.next

            if(length === 1){
                tail = null
            }else{
                head.prev = null
            }
        }else if(position === length - 1){
            current = tail
            tail = current.prev
            tail.next = null
        }else {
            let previous
            for(let index = 0; index < position; index++){
                previous = current
                current = current.next
            }
            previous.next = current.next
            current.next.prev = previous
        }

        length--

        return current.element
    }

    this.remove = element => {
        const index = this.indexOf(element)
        return this.removeAt(index)
    }

    this.indexOf = element => {
        let current = head

        for(let index = 0; current; index++ ){
            if(element === current.element){
                return index
            }
            current = current.next
        }

        return -1
    }

    this.isEmpty = () => length === 0

    this.size = () => length

    this.toString = () => {
        let current = head
        const arr = []

        while(current){
            arr.push(current.element)
            current = current.next
        }

        return arr.join(',')
    }

    this.inverseToString = () => {
        let current = tail
        const arr = []
        while(current){
            arr.push(current.element)
            current = current.prev
        }
        return arr.join(',')
    }

    this.print = () => console.info(this.toString())

    this.printInverse = () => console.info(this.inverseToString())

    this.getHead = () => head

    this.getTail = () => tail
}