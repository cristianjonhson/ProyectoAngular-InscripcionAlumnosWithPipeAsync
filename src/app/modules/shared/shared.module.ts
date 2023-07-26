import { NgModule } from '@angular/core'; // Importa el decorador NgModule desde el paquete '@angular/core'
import { CommonModule } from '@angular/common'; // Importa el módulo CommonModule desde el paquete '@angular/common'
import { SidenavComponent } from './components/sidenav/sidenav.component'; // Importa el componente SidenavComponent desde la ruta relativa './components/sidenav/sidenav.component'
import { MaterialModule } from './material.module'; // Importa el módulo MaterialModule desde la ruta relativa './material.module'
import { FlexLayoutModule } from '@angular/flex-layout'; // Importa el módulo FlexLayoutModule desde el paquete '@angular/flex-layout'
import { RouterModule } from '@angular/router'; // Importa el módulo RouterModule desde el paquete '@angular/router'
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    SidenavComponent, // Declara el componente SidenavComponent dentro del módulo
    FooterComponent
  ],
  exports: [
    // Exporta el componente SidenavComponent para que esté disponible en otros módulos que importen este SharedModule
    SidenavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule, // Importa el módulo CommonModule
    RouterModule, // Importa el módulo RouterModule
    FlexLayoutModule, // Importa el módulo FlexLayoutModule
    MaterialModule // Importa el módulo MaterialModule
  ]
})
export class SharedModule { } // Exporta la clase SharedModule
