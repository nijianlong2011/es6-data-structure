class Node {
    constructor(element){
        this.element = element
        this.next = null
    }
}

function LinkedList() {
    let length = 0,
        head = null
    
    this.append = element => {
        const node = new Node(element)
        if(head === null){
            head = node
        }else{
            let current = head
            while(current.next){
                current = current.next
            }
            current.next = node
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
            node.next = current
            head = node
        }else{
            let previous
            for(let index = 0; index < position; index++){
                previous = current
                current = current.next
            }
            node.next = current
            previous.next = node
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
        }else{
            let previous
            for(let index = 0; index < position; index++){
                previous = current
                current = current.next
            }

            previous.next = current.next
        }
        length--
        return current.element
    }

    this.remove = element => {
        
    }

    this.indexOf = element => {
        let current = head
        for(let index = 0; current; index++){
            if(element === current.element){
                return index
            }
            current = current.next
        }
        return -1
    }

    this.isEmpty = () => {
        return length === 0
    }


    this.size = () => {
        return length
    }

    this.getHead = () => {
        return head
    }

    this.toString = () => {
        let current = head,
            arr = []
        
        while(current){
            arr.push(current.element)
            current = current.next
        }
        return arr.join(',')
    }


    this.print = () => {
        console.info(this.toString())
    }


    
}





export default LinkedList