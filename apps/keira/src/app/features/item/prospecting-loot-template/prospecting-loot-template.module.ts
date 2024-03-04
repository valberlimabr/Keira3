import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LootEditorModule, TopBarModule } from '@keira/core';
import { ProspectingLootTemplateComponent } from './prospecting-loot-template.component';
import { ProspectingLootTemplateService } from './prospecting-loot-template.service';

@NgModule({
  declarations: [ProspectingLootTemplateComponent],
  imports: [CommonModule, TopBarModule, LootEditorModule],
  exports: [ProspectingLootTemplateComponent],
  providers: [ProspectingLootTemplateService],
})
export class ProspectingLootTemplateModule {}
