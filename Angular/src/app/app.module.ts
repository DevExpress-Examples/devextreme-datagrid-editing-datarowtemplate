import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxDataGridModule, DxButtonModule, DxTextBoxModule, DxDateBoxModule, DxTextAreaModule } from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { DataRowTemplateComponent } from './data-row-template/data-row-template.component';
import { EditRowTemplateComponent } from './edit-row-template/edit-row-template.component';

@NgModule({
  declarations: [AppComponent, DataRowTemplateComponent, EditRowTemplateComponent],
  imports: [BrowserModule, AppRoutingModule, DxDataGridModule, DxButtonModule, DxTextBoxModule, DxDateBoxModule, DxTextAreaModule],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
