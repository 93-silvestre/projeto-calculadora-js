class CalcController {

    constructor() {

        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();


    }

    initialize() {

        this.setDisplayDateTime();

        //função para atualizar data e hora a cada 1segundo
        setInterval(() => {
            this.setDisplayDateTime();

        }, 1000);

    }

    addEventListenerAll(element, events, fn) {

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false);
        });

    }

    clearAll() {
        this._operation = [];

    }

    clearEntry() {
        this._operation.pop();

    }

    addOperation(value) {
        this._operation.push(value);

         console.log(this._operation);
    }

    setError() {
        this.displayCalc = "Error";
    }

    execBtn(value) {

        switch (value) {

            case 'ac':
                this.clearAll();
                break;
            case 'ce':
                this.clearEntry();
                break;
            case 'soma':

                break;
            case 'subtracao':

                break;
            case 'divisao':

                break;
            case 'multiplicacao':

                break;
            case 'porcento':

                break;
            case 'igual':

                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;

            default:
                this.setError();
                break;
        }

    }

    // Configurações dos botões
    initButtonsEvents() {

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        //forEach para pecorrer em cada botão
        buttons.forEach((btn, index) => {

            this.addEventListenerAll(btn, "click drag", e => {

                let textBtn = btn.className.baseVal.replace("btn-", "");

                this.execBtn();

            });

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {

                btn.style.cursor = "pointer";

            });

        });

    }

    //método para que o display apareça assim que inicializado
    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }


    // Configurações do Display
    get displayTime() {
        return this._timeEl.innerHTML;

    }

    set displayTime(value) {
        return this._timeEl.innerHTML = value;

    }

    get displayDate() {
        return this._dateEl.innerHTML;
    }

    set displayDate(value) {
        return this._dateEl.innerHTML = value;
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    //retorna data e horário atual
    get currentDate() {
        return new Date();
    }

    set currentDate(value) {
        this._currentDate = value;
    }
}