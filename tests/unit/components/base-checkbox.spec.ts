import {
    shallowMount,
    mount
} from '@vue/test-utils'

import BaseCheckbox from '@/components//BaseCheckbox.vue'

const defaultProps = {
  isRequired: false,
  checked: false,
};

const testLabel = 'test label';
const testLabelWithEndLine = 'test label line 1 \n test label line 2';
const iconSlot = { default: '<v-icon>$warn</v-icon>' };
const textSlot = { default: '<span>test label</span>' };
const iconChecked = '$nowChecked';
const iconUnchecked = '$nowUnchecked';

describe('Snapshot tests', () => {
  test('Should match snapshot with default props', () => {

    const wrapper = mount(BaseCheckbox);

    expect(wrapper.text()).toMatch('mdi-minus')
  });
});
