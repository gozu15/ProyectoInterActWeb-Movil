import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { RegistroDocentePageComponent } from 'src/app/registro-docente-page/registro-docente-page.component';
import { RegistroMateriasPageComponent } from 'src/app/registro-materias-page/registro-materias-page.component';
import { RegistroAulasPageComponent } from 'src/app/registro-aulas-page/registro-aulas-page.component';
import { AsignacionMateriasPageComponent } from 'src/app/asignacion-materias-page/asignacion-materias-page.component';
import { RegistroUsuariosPageComponent } from 'src/app/registro-toma-materias-page/registro-usuarios-page.component';
import { RegistroEstudiantePageComponent } from 'src/app/registro-estudiante-page/registro-estudiante-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    RegistroDocentePageComponent,
    RegistroMateriasPageComponent,
    RegistroAulasPageComponent,
    AsignacionMateriasPageComponent,
    RegistroUsuariosPageComponent,
    RegistroEstudiantePageComponent
  ]
})

export class AdminLayoutModule {}
