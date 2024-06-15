import { CommonModule } from '@angular/common';
import { Component, Input, } from '@angular/core';
import type { OnDestroy, OnInit } from '@angular/core';

export interface FechaTime {
  bgPath: string,
  fecha: string,
  fechaEvento: string
}

@Component({
  selector: 'app-fecha-time',
  standalone: true,
  imports: [CommonModule, ],
  template: `
  <div class="fecha-timer bg-cover my-10 rounded-3xl w-11/12 mx-auto"
  [style]="'background-image: url('+configtime.bgPath+');'">


  <div class="flex flex-col items-center justify-center gap-10 p-5 py-10">
    <strong class="text-4xl font-bold sm:text-5xl text-center">{{configtime.fecha}}</strong>
    <p class="text-4xl font-normal">Faltan</p>

    <div class="flex flex-wrap justify-evenly gap-6">

        <div class="">
          <div class="flex flex-col items-center justify-center rounded-full bg-[#FFCBA7] text-white p-5">
            <p class="font-bold text-3xl"><!-- {{ item.numero }} --></p>
            <p class="text-center font-bold text-white"><!-- {{item.titulo}} --></p>
          </div>
        </div>

    </div>

  </div>


</div>
  ` ,
  styles: ``
})
export class FechaTimeComponent implements OnInit, OnDestroy {

  @Input()
  configtime: FechaTime = {
    bgPath: 'assets/disenos/diseno4/muffin.png',
    fecha: '20 de Noviembre de 2024',
    fechaEvento: '2024-11-20'
  }

  cuentaRegresiva = [
    { titulo: 'Meses', numero: 0 },
    { titulo: 'Días', numero: 0 },
    { titulo: 'Hrs', numero: 0 },
    { titulo: 'Min', numero: 0 },
    { titulo: 'Seg', numero: 0 }
  ];

  fechaFinal = new Date(this.configtime.fechaEvento);
  intervalId: any;

  ngOnInit() {
    this.iniciarCuentaRegresiva();
  }

  iniciarCuentaRegresiva() {
    this.intervalId = setInterval(() => {
      const ahora = new Date();
      const distancia = this.fechaFinal.getTime() - ahora.getTime();

      this.cuentaRegresiva[0].numero = Math.floor(distancia / (1000 * 60 * 60 * 24 * 30));
      this.cuentaRegresiva[1].numero = Math.floor((distancia % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      this.cuentaRegresiva[2].numero = Math.floor((distancia / (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.cuentaRegresiva[3].numero = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
      this.cuentaRegresiva[4].numero = Math.floor((distancia % (1000 * 60)) / 1000);
    }, 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
