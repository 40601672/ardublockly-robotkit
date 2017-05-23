Blockly.Blocks['motora'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("direction")
        .appendField(new Blockly.FieldDropdown([["clockwise","cw_direction"], ["counter-clockwise","ccw_direction"], ["",""]]), "direction");
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