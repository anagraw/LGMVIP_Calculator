class Calculator{
    constructor(proptext,curoptext){
        this.proptext= proptext
        this.curoptext= curoptext
        this.clear()
    }
    clear(){
        this.curroperand=''
        this.prevoperand=''
        this.op= undefined

    }
    delete(){
        this.curroperand= this.curroperand.toString().slice(0, -1)

    }
    appendnum(num){
        if(num === '.' && this.curroperand.includes('.')) return
        this.curroperand= this.curroperand.toString()+ num.toString()

    }
    chooseop(op){
        if(this.curroperand === '')return
        if(this.prevoperand !== ''){
            this.compute()
        }
        this.op= op
        this.prevoperand= this.curroperand
        this.curroperand=''

    }
    compute(){
        let computn
        const prev= parseFloat(this.prevoperand)
        const current= parseFloat(this.curroperand)
        if(isNaN(prev) || isNaN(current)) return
        switch(this.op){
            case '+':
                computn= prev + current
                break
            case '-':
                computn= prev - current
                break
            case '*':
                computn= prev * current
                break
            case '÷':
                computn= prev / current
                break
            default:
                return

        }
        this.curroperand= computn
        this.op= undefined
        this.prevoperand= ''

    }
    updatedisp(){
        this.curoptext.innerText= this.curroperand
        if(this.op !== null){
            this.proptext.innerText= 
            `${this.prevoperand} ${this.op}`
        } 
        

    }


}


const numbutt= document.querySelectorAll('[data-num]')
const opbutt= document.querySelectorAll('[data-op]')
const delbutt= document.querySelector('[data-del]')
const acbutt= document.querySelector('[data-ac]')
const eqbutt= document.querySelector('[data-equals]')
const proptext= document.querySelector('[data-prev-op]')
const curoptext= document.querySelector('[data-curr-op]')

const calculator= new Calculator(proptext,curoptext)
numbutt.forEach(button => {
   button.addEventListener('click',() =>{
    calculator.appendnum(button.innerText)
    calculator.updatedisp()
   }) 
})
opbutt.forEach(button => {
    button.addEventListener('click',() =>{
     calculator.chooseop(button.innerText)
     calculator.updatedisp()
    }) 
 })

 eqbutt.addEventListener('click', button =>{
    calculator.compute()
    calculator.updatedisp()

 })
 acbutt.addEventListener('click', button =>{
    calculator.clear()
    calculator.updatedisp()

 })
 delbutt.addEventListener('click', button =>{
    calculator.delete()
    calculator.updatedisp()

 })

