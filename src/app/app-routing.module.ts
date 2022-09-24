import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemeOneComponent } from './themes/theme-one/theme-one.component';
import { ThemeTwoComponent } from './themes/theme-two/theme-two.component';
import { ThemeThreeComponent } from './themes/theme-three/theme-three.component';
import { ThemeFourComponent } from './themes/theme-four/theme-four.component';
import { ThemeFiveComponent } from './themes/theme-five/theme-five.component';
import { ThemeSixComponent } from './themes/theme-six/theme-six.component';
import { ThemeSevenComponent } from './themes/theme-seven/theme-seven.component';
import { ThemeEightComponent } from './themes/theme-eight/theme-eight.component';
import { ThemeNineComponent } from './themes/theme-nine/theme-nine.component';
import { ThemeTenComponent } from './themes/theme-ten/theme-ten.component';
import { ThemeElevenComponent } from './themes/theme-eleven/theme-eleven.component';
import { ThemeTwelveComponent } from './themes/theme-twelve/theme-twelve.component';
// import { AboutComponent } from './components/inner-pages/about/about.component';
// import { ServicesComponent } from './components/inner-pages/services/services.component';
import { PortfolioGridComponent } from './components/inner-pages/portfolio/portfolio-grid/portfolio-grid.component';
import { PortfolioMinimalComponent } from './components/inner-pages/portfolio/portfolio-minimal/portfolio-minimal.component';
import { PortfolioNoGapComponent } from './components/inner-pages/portfolio/portfolio-no-gap/portfolio-no-gap.component';
import { PortfolioMasonryComponent } from './components/inner-pages/portfolio/portfolio-masonry/portfolio-masonry.component';
import { TeamComponent } from './components/inner-pages/team/team.component';
import { PricingComponent } from './components/inner-pages/pricing/pricing.component';
// import { ContactComponent } from './components/inner-pages/contact/contact.component';
import { ErrorComponent } from './components/inner-pages/error/error.component';
import { BlogTwoColumnComponent } from './components/blogs/blog-two-column/blog-two-column.component';
import { BlogThreeColumnComponent } from './components/blogs/blog-three-column/blog-three-column.component';
import { BlogLeftSidebarComponent } from './components/blogs/blog-left-sidebar/blog-left-sidebar.component';
import { BlogRightSidebarComponent } from './components/blogs/blog-right-sidebar/blog-right-sidebar.component';
import { BlogDetailsLeftSidebarComponent } from './components/blogs/blog-details-left-sidebar/blog-details-left-sidebar.component';
import { BlogDetailsRightSidebarComponent } from './components/blogs/blog-details-right-sidebar/blog-details-right-sidebar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact-us', component: ContactComponent},
  {path: 'services', component: ServicesComponent},
  // {path: 'theme-two', component: ThemeTwoComponent},
  // {path: 'theme-three', component: ThemeThreeComponent},
  // {path: 'theme-four', component: ThemeFourComponent},
  // {path: 'theme-five', component: ThemeFiveComponent},
  // {path: 'theme-six', component: ThemeSixComponent},
  // {path: 'theme-seven', component: ThemeSevenComponent},
  // {path: 'theme-eight', component: ThemeEightComponent},
  // {path: 'theme-nine', component: ThemeNineComponent},
  // {path: 'theme-ten', component: ThemeTenComponent},
  // {path: 'theme-eleven', component: ThemeElevenComponent},
  // {path: 'theme-twelve', component: ThemeTwelveComponent},
  // {path: 'about', component: AboutComponent},
  // {path: 'services', component: ServicesComponent},
  // {path: 'portfolio-grid', component: PortfolioGridComponent},
  // {path: 'portfolio-minimal', component: PortfolioMinimalComponent},
  // {path: 'portfolio-no-gap', component: PortfolioNoGapComponent},
  // {path: 'portfolio-masonry', component: PortfolioMasonryComponent},
  // {path: 'team', component: TeamComponent},
  // {path: 'pricing', component: PricingComponent},
  // {path: 'contact', component: ContactComponent},
  // {path: 'error', component: ErrorComponent},
  // {path: 'blog-two-column', component: BlogTwoColumnComponent},
  // {path: 'blog-three-column', component: BlogThreeColumnComponent},
  // {path: 'blog-left-sidebar', component: BlogLeftSidebarComponent},
  // {path: 'blog-right-sidebar', component: BlogRightSidebarComponent},
  // {path: 'blog-details-left-sidebar', component: BlogDetailsLeftSidebarComponent},
  // {path: 'blog-details-right-sidebar', component: BlogDetailsRightSidebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
