import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [CommonModule],
  template: `
  <header class="bg-slate-800 py-4 w-full h-[82.45px] z-10">
  <div class="container mx-auto">
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 px-6 md:px-0">

      <div class="logo justify-start">
        <a href="/">
          <img src="assets/LOGO ONE INVITACIONES.png" width="90" height="50" alt="One Invitaciones">
        </a>
      </div>

      <div class="hidden md:col-span-2 md:flex justify-end">
        <ul class="flex justify-center items-center space-x-1 md:space-x-8">
          <li>
            <a href="/catalogo" routerLinkActive="active"
              class="text-white hover:text-[#ffcba7] transition duration-300 flex flex-col items-center">
              <svg  class="mb-1 w-5 h-5 fill-white "
                xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                <path
                  d="m12.981,5.673l8.019-1.539v1.022l-8.019,1.539v-1.022Zm0,9.07l8.019-1.539v-1.022l-8.019,1.539v1.022Zm0-4l8.019-1.539v-1.022l-8.019,1.539v1.022ZM24,2.409v19.601l-13.604,1.998-4.895-2.925-4.819,2.917h-.683V3.865c0-.943.547-1.823,1.393-2.241L3.95.361c.971-.479,2.129-.479,3.1,0l3.201,1.581L21.161.039c.704-.13,1.424.062,1.974.521s.865,1.133.865,1.849ZM6.606,1.258c-.193-.096-.398-.163-.606-.206v19.165l4,2.389V2.934l-3.394-1.676ZM1,22.639l4-2.42V1.052c-.209.042-.413.11-.606.205l-2.558,1.263c-.508.251-.836.778-.836,1.345v18.773ZM23,2.409c0-.419-.185-.812-.506-1.081s-.744-.38-1.155-.305h-.004l-10.335,1.803v20.082l12-1.762V2.409Zm-10.019,16.334l6.019-1.156v-1.022l-6.019,1.156v1.022Z" />
              </svg>
              <span class="text-sm">CATÁLOGO</span>
            </a>
          </li>
          <li>
            <a href="/paquetes" routerLinkActive="active"
              class="text-white hover:text-[#ffcba7] transition duration-300 flex flex-col items-center">
              <svg class="mb-1 w-5 h-5 fill-white hover:fill-[#ffcba7]"
                xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                <path
                  d="m21,0H3C1.346,0,0,1.346,0,3v5h1v16h10.344c-.705-.57-1.322-1.245-1.828-2H3v-14h18v.936c.728.362,1.4.819,2,1.356v-2.292h1V3c0-1.654-1.346-3-3-3Zm1,6H2v-3c0-.551.449-1,1-1h18c.551,0,1,.449,1,1v3Zm-2.411,8.693l1.402,1.426-3.457,3.399c-.321.321-.745.482-1.17.482s-.854-.162-1.18-.487l-1.846-1.789,1.392-1.437,1.63,1.58,3.229-3.174Zm-2.589-4.693c-3.86,0-7,3.14-7,7s3.14,7,7,7,7-3.14,7-7-3.14-7-7-7Zm0,12c-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5-2.243,5-5,5Z" />
              </svg>
              <span class="text-sm">PAQUETES</span>
            </a>
          </li>
          <li>
            <a href="/inicio/contactanos" routerLinkActive="active"
              class="text-white hover:text-[#ffcba7] transition duration-300 flex flex-col items-center">
              <svg class="mb-1 w-5 h-5 fill-white hover:fill-[#ffcba7]"
                xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24">
                <path
                  d="M21,12.424V11A9,9,0,0,0,3,11v1.424A5,5,0,0,0,5,22a2,2,0,0,0,2-2V14a2,2,0,0,0-2-2V11a7,7,0,0,1,14,0v1a2,2,0,0,0-2,2v6H14a1,1,0,0,0,0,2h5a5,5,0,0,0,2-9.576ZM5,20H5a3,3,0,0,1,0-6Zm14,0V14a3,3,0,0,1,0,6Z" />
              </svg>
              <span class="text-sm">CONTACTANOS</span>
            </a>
          </li>
          <li>
            <a href="https://wa.me/3319040340?text=Hola,%20estoy%20interesad@%20en%20contratar%20sus%20servicios."
              target="_blank"
              class="text-slate-800 rounded-lg p-3 font-semibold bg-[#ffcba7] hover:bg-white transition duration-300">
              <span class="text-sm">CONTRATA AHORA</span>
            </a>

          </li>
        </ul>
      </div>

      <div class="md:hidden flex gap-2 text-end justify-end">
            <a href="https://wa.me/3319040340?text=Hola,%20estoy%20interesad@%20en%20contratar%20sus%20servicios."
              target="_blank"
              class="text-slate-800 rounded-lg p-3 font-semibold bg-[#ffcba7] hover:bg-white transition duration-300">
              <span class="text-xs hidden sm:block">CONTRATAR AHORA</span>
              <span class="text-xs block sm:hidden">CONTRATAR</span>
            </a>
        <button class="outline-none mobile-menu-button" (click)="toggleMenu()">
          <svg class="w-8 h-8 text-white" x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

    </div>

    <div class="mobile-menu md:hidden bg-slate-800 w-full p-5 absolute top-[70px] left-0 z-30" [ngClass]="{'hidden': visible }">
      <ul class="mt-4 space-y-4">
        <li><a href="/inicio/catalogo" (click)="toggleMenu()" class="flex flex-row-reverse px-4 py-2 text-white rounded">CÁTALOGO</a></li>
        <li><a href="/inicio/paquetes" (click)="toggleMenu()" class="flex flex-row-reverse px-4 py-2 text-white rounded">PAQUETES</a></li>
        <li><a href="https://wa.me/3319040340?text=Hola,%20estoy%20interesad@%20en%20contratar%20sus%20servicios." target="_blank" class="flex flex-row-reverse px-4 py-2 text-white rounded">CONTACTANOS</a></li>
      </ul>
    </div>


  </div>
</header>
  `
})

export class HeaderComponent {
  visible: boolean = true;

  toggleMenu() {
    this.visible = !this.visible;
    console.log(this.visible);
  }
}
