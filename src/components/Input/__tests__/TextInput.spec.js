import { mount } from '@vue/test-utils';
import bTextInput from "../TextInput";

describe('TextInput', () => {
  test('TextInput is rendered correctly', () => {
    const wrapper = mount(bTextInput);
    expect(wrapper.html()).toMatchSnapshot()
  });

  test('TextInput should emit an input event',  () => {
    const wrapper = mount(bTextInput);
    wrapper.find('input').trigger('input');
    expect(wrapper.emitted().input).toBeTruthy()
    expect(wrapper.emitted().input).toHaveLength(1);
  });

  test('TextInput is disabled', () => {
    const wrapper = mount(bTextInput, {
      propsData: {
        disabled: true
      }
    });
    expect(wrapper.find('input').attributes().disabled).toBeTruthy();
  });
});