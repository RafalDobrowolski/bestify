import { mount } from '@vue/test-utils';
import bCheckbox from "../BaseCheckbox";

describe('Checkbox', () => {
  test('Checkbox is rendered correctly', () => {
    const wrapper = mount(bCheckbox);
    expect(wrapper.html()).toMatchSnapshot()
  });

  test('Checkbox is disabled', () => {
    const wrapper = mount(bCheckbox, {
      propsData: {
        disabled: true
      }
    });
    expect(wrapper.find('input').attributes().disabled).toBeTruthy();
  });

  test('Checkbox when value is changed', () => {
    const wrapper = mount(bCheckbox, {
      propsData: {
        value: true
      }
    });

    expect(wrapper.find('input').attributes().value).toBeTruthy()
  });

  test('Should emit an input event',  () => {
    const wrapper = mount(bCheckbox);
    wrapper.find('input').trigger('change');
    expect(wrapper.emitted().input).toBeTruthy()
    expect(wrapper.emitted().input).toHaveLength(1);
  });

});