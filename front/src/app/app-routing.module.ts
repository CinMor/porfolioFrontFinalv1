import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorfolioComponent } from "./components/porfolio/porfolio.component";
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from "./components/educacion/editeducacion.component";

const routes: Routes = [
    { path: '', component: PorfolioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'nueva-experiencia', component: NewExperienciaComponent },
    { path: 'editar-experiencia/:id', component: EditExperienciaComponent },
    { path: 'nueva-educacion', component: NeweducacionComponent },
    { path: 'editar-educacion/:id', component: EditeducacionComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }


