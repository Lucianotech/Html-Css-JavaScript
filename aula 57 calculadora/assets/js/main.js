function criaCalculadora() {
    return {
        display: document.querySelector('.display'),   //atributos
       
        inicia() {                  // metodos
            this.cliqueBotoes();
            this.pressionaEnter();
            this.pressiona1();
           
        },

        pressionaEnter() {  // metodo para capurar o ENTER na realização da conta
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        

        realizaConta() {   // metodo
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                  alert('Conta Inválida');
                  return;  
                }

                this.display.value = String(conta);
            }catch(e) {
                alert('Conta Inválida');
                return;
            }
        },


        clearDisplay() {            // metodo
            this.display.value = '';
        },

        apagaUm() {                 // metodo
            this.display.value = this.display.value.slice(0, -1);
        },

      

     

        cliqueBotoes(){
            document.addEventListener('click', e => { // usando aerofunction captura o clique dos botoes
               const el = e.target; 

               if(el.classList.contains('btn-num')) {
                   this.btnParaDisplay(el.innerText);
               }

               if(el.classList.contains('btn-clear')){
                   this.clearDisplay();
               }

               if(el.classList.contains('btn-del')) {
                   this.apagaUm();
               }

               if(el.classList.contains('btn-eq')) {
                   this.realizaConta();
               }
            }); // (.bind) épara resolver o conflito entre o this do documento e da calculadora

            
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        }
        
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
