import { mount } from '@vue/test-utils';
import TextInput from "../TextInput";

describe('TextInput', () => {
  test('TextInput is rendered correctly', () => {
    const wrapper = mount(TextInput);
    expect(wrapper.html()).toMatchSnapshot()
  });

  test('TextInput should emit an input event',  () => {
    const wrapper = mount(TextInput);
    wrapper.find('input').trigger('input');
    expect(wrapper.emitted().input).toBeTruthy()
    expect(wrapper.emitted().input).toHaveLength(1);
  });

  test('TextInput is disabled', () => {
    const wrapper = mount(TextInput, {
      propsData: {
        disabled: true
      }
    });
    expect(wrapper.find('input').attributes().disabled).toBeTruthy();
  });
});