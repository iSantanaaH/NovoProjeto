import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { routerConfig } from './app.routes';
import { RouterModule } from '@angular/router';
import { ListaProdutosComponent } from './produtos/lista-produtos/lista-produtos.component';
import { ProdutosService } from './produtos/produtos.service';
import { HttpClientModule } from '@angular/common/http';
import { SobreComponent } from './home/sobre/sobre.component';
import { ContatoComponent } from './home/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ProdutosComponent,
    ListaProdutosComponent,
    SobreComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    [RouterModule.forRoot(routerConfig, { useHash: false})]
  ],
  providers: [ProdutosService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
