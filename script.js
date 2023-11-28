class Calculator {
    constructor(){
        // Aqui é a propriedade que recebe os valores digitados pela 
        this.displayValue = "";
    }

    // Este método adiciona valores à propriedade displayValue
    // e, em seguida, chama o método updateDisplay para atualizar o visor(input)
    appendToDisplay(value) {
        this.displayValue += value;
        this.updateDisplay();
    }
    // Este método atualiza o visor (imput) com os valores o usuário digitou
    updateDisplay() {
        document.getElementById("displayContent").value = this.displayValue;
    }

    // Este método limpa os valores do displayValue(input) e chama o método updateDisplay para atualizar o visor(input)
    clearDisplay(){
        this.displayValue = "";
        this.updateDisplay();
    }

    calculate() {
        try {
            const result = eval(this.displayValue);
            this.displayValue = result;
            this.updateDisplay();
        } catch (error) {
            this.displayValue = "Error";
            this.updateDisplay();
        }
    }
}

// instanciando o objeto
const calc = new Calculator();