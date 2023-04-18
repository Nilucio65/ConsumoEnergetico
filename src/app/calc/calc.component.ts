import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  pessoas: number = 0;
  comodos: number = 0;
  tv: number = 0;
  pc: number = 0;
  tarifa: number = 0;
  lvr: boolean = false; //Máquina de lavar
  scdr: boolean = false; //Máquina secadora
  gastoE: number = 0;
  preco: number = 0;

  Calcular(){

    this.gastoE = ((((5500/1000)*0.167)*this.pessoas)//Gasto energético no banho(média de 10 min)
    + (((200/1000)*5)*this.tv) //Gasto energético das tvs
    + (((350/1000)*5)*this.pc) //Gasto energético dos PCs
    + (((15/1000)*10)*this.comodos) //gasto energético dos cômodos
    );
    if(this.lvr){ this.gastoE += (1500/1000)*1}; //Gasto energético da Máquina de lavar (se houver)
    if(this.scdr){this.gastoE += (3500/1000)*1}; //Gasto energético da Máquina secadora (se houver)

    this.preco = (this.gastoE * this.tarifa) * 30 // Gasto em reais na conta de energia de um mês
  }
}
