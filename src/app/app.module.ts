import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { StepsComponent } from './steps/steps.component';
import { FeaturesComponent } from './features/features.component';
import { ServiceComponent } from './servicecomp/servicecomp.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceFeatureComponent } from './service-feature/service-feature.component';
import { AboutFeatureComponent } from './about-feature/about-feature.component';
import { StepsFeatureComponent } from './steps-feature/steps-feature.component';
import { FeaturessFeatureComponent } from './featuress-feature/featuress-feature.component';
import { FeaturesimgComponent } from './featuresimg/featuresimg.component';
import { PortfolioFeatureComponent } from './portfolio-feature/portfolio-feature.component';
import { TeamFeatureComponent } from './team-feature/team-feature.component';
import { FaqFeatureComponent } from './faq-feature/faq-feature.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ContactMapComponent } from './contact-map/contact-map.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    MainComponent,
    FooterComponent,
    AboutComponent,
    StepsComponent,
    FeaturesComponent,
    ServiceComponent,
    TestimonialsComponent,
    PortfolioComponent,
    TeamComponent,
    FaqComponent,
    ContactComponent,
    ServiceFeatureComponent,
    AboutFeatureComponent,
    StepsFeatureComponent,
    FeaturessFeatureComponent,
    FeaturesimgComponent,
    PortfolioFeatureComponent,
    TeamFeatureComponent,
    FaqFeatureComponent,
    ContactInfoComponent,
    ContactMapComponent,
    ContactFormComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
