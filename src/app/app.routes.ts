import { Routes } from "@angular/router"
import { FooterComponent } from "./footer/footer.component"
import { ContatoComponent } from "./home/contato/contato.component"
import { HomeComponent } from "./home/home.component"
import { SobreComponent } from "./home/sobre/sobre.component"
import { ListaProdutosComponent } from "./produtos/lista-produtos/lista-produtos.component"
import { ProdutosComponent } from "./produtos/produtos.component"

export const routerConfig: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "produtos", component: ProdutosComponent },
    { path: "footer", component: FooterComponent },
    { path: "listaprodutos", component: ListaProdutosComponent },
    { path: "produtos", component: ProdutosComponent },
    { path: "sobre", component: SobreComponent },
    { path: "contato", component: ContatoComponent },

]