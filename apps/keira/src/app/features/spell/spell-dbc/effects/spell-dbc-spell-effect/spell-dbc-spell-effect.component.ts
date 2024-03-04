import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  SPELL_DBC_APPLY_AURA_NAME,
  SPELL_DBC_CLASS_MASK_FLAGS,
  SPELL_DBC_EFFECT,
  SPELL_MECHANIC,
  SpellDbc,
} from '@keira/acore-world-model';
import { ModelForm } from '@keira/core';
import { SpellDbcSpellEffectFieldPrefix } from './spell-dbc-spell-effect.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'keira-spell-dbc-spell-effect',
  templateUrl: './spell-dbc-spell-effect.component.html',
})
export class SpellDbcSpellEffectComponent {
  @Input() formGroup: FormGroup<ModelForm<SpellDbc>>;
  @Input() index: number;

  readonly SPELL_MECHANIC = SPELL_MECHANIC;
  readonly SPELL_DBC_EFFECT = SPELL_DBC_EFFECT;
  readonly SPELL_DBC_APPLY_AURA_NAME = SPELL_DBC_APPLY_AURA_NAME;
  readonly SPELL_DBC_CLASS_MASK_FLAGS = SPELL_DBC_CLASS_MASK_FLAGS;

  getFieldName(field: SpellDbcSpellEffectFieldPrefix): string {
    return `${field}_${this.index}`; // example: EffectSpellClassMaskA_3
  }
}
