import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponentComponent } from './article-component/article-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const routes: Routes = [ 
   
{path:'',redirectTo:'products',pathMatch:'full'},
{path:'products',component:ProductComponent},
{path:'products/:id',component:ProductdetailsComponent},
{path:'articles',component:ArticleComponentComponent},
{path:'offresemploi',component:OffresEmploiComponentComponent},
{path:'**',component:NotFoundComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
