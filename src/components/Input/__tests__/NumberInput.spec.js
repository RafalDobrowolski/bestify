import { mount } from '@vue/test-utils';
import bNumberInput from "../NumberInput";

describe('NumberInput', () => {
  test('NumberInput is rendered correctly', () => {
    const wrapper = mount(bNumberInput);
    expect(wrapper.html()).toMatchSnapshot()
  });

  test('NumberInput is rendered Button component', () => {
    const wrapper = mount(bNumberInput);
    expect(wrapper.contains('button')).toBeTruthy();
  });

  test('NumberInput is increment or decrement', () => {
    const wrapper = mount(bNumberInput);
    wrapper.vm.currentValue = 10;

    wrapper.setProps({ min: 5, max: 10 });
    wrapper.vm.removeNumber();
    expect(wrapper.vm.currentValue).toBe(9);
    wrapper.vm.addNumber();
    expect(wrapper.vm.currentValue).toBe(10);
  });

  test('NumberInput is increment or decrement with step', () => {
    const wrapper = mount(bNumberInput);
    wrapper.setProps({ step: 2, min:5 });
    wrapper.vm.currentValue = 10;
    wrapper.vm.removeNumber();
    expect(wrapper.vm.currentValue).toBe(8);
    wrapper.vm.removeNumber();
    expect(wrapper.vm.currentValue).toBe(6);
    wrapper.vm.addNumber()
    expect(wrapper.vm.currentValue).toBe(8)
  });


  test('NumberInput is increments or decrements on click', async () => {
    const wrapper = mount(bNumberInput);
    wrapper.setProps({value: 5, step: 1, max: 10});
    wrapper.vm.currentValue = 5;
    wrapper.find('.number-input__button--add').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.currentValue).toBe(6);
    wrapper.find('.number-input__button--remove').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.currentValue).toBe(5)
  });

  test('NumberInput is disabled', () => {
    const wrapper = mount(bNumberInput, {
      propsData: {
        disabled: true
      }
    });
    expect(wrapper.find('input').attributes().disabled).toBeTruthy();
  });
});