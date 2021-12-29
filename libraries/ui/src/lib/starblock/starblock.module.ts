import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarblockComponent } from './starblock/starblock.component';



@NgModule({
    declarations: [
        StarblockComponent
    ],
    exports: [
        StarblockComponent
    ],
    imports: [
        CommonModule
    ]
})
export class StarblockModule { }
