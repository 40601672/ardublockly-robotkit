/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Ardublockly JavaScript for the Blockly resources and bindings.
 */
'use strict';

goog.provide('Blockly.Blocks.robotkit');

goog.require('Blockly.Blocks');

Blockly.Blocks.robotkit.HUE = 180;

Blockly.Blocks['motora'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("direction")
            .appendField(new Blockly.FieldDropdown([
                ["clockwise", "cw_direction"],
                ["counter-clockwise", "ccw_direction"],
                ["", ""]
            ]), "direction");
        this.appendDummyInput()
            .appendField("speed")
            .appendField(new Blockly.FieldNumber(500, 0, 1023), "speed");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(224);
        this.setTooltip('Block controls MotorA');
        this.setHelpUrl('');
    }
};