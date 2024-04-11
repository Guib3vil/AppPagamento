import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
selector: 'app-home',
templateUrl: 'home.page.html',
styleUrls: ['home.page.scss'],
})
export class HomePage {
constructor(private alertController: AlertController) {}
formaPgto='';
valor='';
final=0;

calcularVenda(){
if (this.formaPgto==='pix'){
this.final=parseFloat(this.valor)-(parseFloat(this.valor)*0.1)
;
}
else if (this.formaPgto==='deb'){
this.final=parseFloat(this.valor);
}
else{
this.final=parseFloat(this.valor)*1.1
}
this.exibirPeso();
}
async exibirPeso() {
const alert = await this.alertController.create({
header: 'App Vendas',
message: `Valor final da venda:
R$${this.final.toFixed(1)}`,
buttons: ['OK'],
});
await alert.present();
}
}
