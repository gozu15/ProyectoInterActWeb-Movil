import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { RegistroDocentePageComponent } from 'src/app/registro-docente-page/registro-docente-page.component';
import { RegistroAulasPageComponent } from 'src/app/registro-aulas-page/registro-aulas-page.component';
import { RegistroMateriasPageComponent } from 'src/app/registro-materias-page/registro-materias-page.component';
import { RegistroUsuariosPageComponent } from 'src/app/registro-toma-materias-page/registro-usuarios-page.component';
import { RegistroEstudiantePageComponent } from 'src/app/registro-estudiante-page/registro-estudiante-page.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'registro-docentes',        component: RegistroDocentePageComponent },
    { path: 'registro-aulas',        component: RegistroAulasPageComponent },
    { path: 'registro-materias',        component: RegistroMateriasPageComponent },
    { path: 'registro-toma',        component: RegistroUsuariosPageComponent },
    { path: 'registro-estudiantes',        component: RegistroEstudiantePageComponent },


    

];
