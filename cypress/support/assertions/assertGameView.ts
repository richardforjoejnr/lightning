/* eslint-disable no-undef */
export function assertInputFieldsValue(game, inputValues) {
  const pinComponentData = [];
  return cy
    .get(game)
    .should('be.visible')
    .each(($element, index) => {
      const inputFiled = $element.attr('texture-text');
      // pinComponentData.push({ columnIndex: index, pinValue: `'${inputFiled}'` })
      const tmpMatchedInputValues = inputValues.filter(item => {
        if (item.columnIndex === index && item.contents === inputFiled) {
          // [{ columnIndex: 0, pinValue: `'${inputFiled}'` }]
          return true;
        }
        return false;
      });
      pinComponentData.push({ ...tmpMatchedInputValues[0] });
      return pinComponentData;
    })
    .wrap(pinComponentData)
    .should('deep.equal', inputValues);
}
