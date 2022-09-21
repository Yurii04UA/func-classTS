interface IInvoices {
    name: string
    position: string
    id: number
}

class Invoices implements IInvoices {
    name: string
    position: string
    id: number

    constructor(props: IInvoices) {
        this.name = props.name
        this.position = props.position
        this.id = props.id
    }

    getInfo() {
        return `Hello ${this.name}, your position ${this.position}. Id : ${this.id}`
    }
    getName() {
        return `Hello ${this.name}`
    }
    static staticMethod() {
        return 'I do not have access to instance'
    }
}

interface IAccountantInvoice extends IInvoices {
    isReport: boolean
}

class AccountantInvoice extends Invoices {
    isReport: boolean
    constructor(props: IAccountantInvoice) {
        super({
            name: props.name,
            position: props.position,
            id: props.id,
        })
        this.isReport = props.isReport
    }

    getReport(): string {
        return this.isReport
            ? `Hello ${this.name} you can get a report`
            : `Hello ${this.name} you can't get a report`
    }
}

const Accountant = new AccountantInvoice({
    name: 'Sergeevna',
    position: 'accountant',
    id: 4,
    isReport: true,
})

console.log(Accountant)

interface ISEOInvoice extends IInvoices {
    isAdved: boolean
}

class SEOInvoice extends Invoices {
    isAdved: boolean

    constructor(props: ISEOInvoice) {
        super({
            name: props.name,
            position: props.position,
            id: props.id,
        })
        this.isAdved = props.isAdved
    }

    printAdved(): string {
        return this.isAdved
            ? `Hello ${this.name} you can advertise`
            : `Hello ${this.name} you can't advertise`
    }
}

const seo = new SEOInvoice({
    name: 'Ivan',
    position: 'seo specialist',
    id: 21,
    isAdved: true,
})
console.log(seo)
console.log(seo.printAdved())

interface ICustomerInvoice extends IInvoices {
    availableAmount: number
}

class CustomerInvoice extends Invoices {
    availableAmount: number
    constructor(props: ICustomerInvoice) {
        super({
            name: props.name,
            position: props.position,
            id: props.id,
        })
        this.availableAmount = props.availableAmount
    }

    printAccount(): string {
        return `Hello ${this.name} you have ${this.availableAmount}$`
    }
}

const customer = new CustomerInvoice({
    name: 'Vitaliy',
    position: 'Customer',
    id: 599,
    availableAmount: 12100,
})

console.log(customer)
console.log(customer.printAccount())
