import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturesComponent } from './features/features.component';
import { StepsComponent } from './steps/steps.component';
import { HeroComponent } from './hero/hero.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServiceComponent } from './servicecomp/servicecomp.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'steps', component: StepsComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'links', component: FooterComponent },
  { path: 'test', component: PortfolioComponent },


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
