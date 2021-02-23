import { mount } from '@vue/test-utils';
import bButton from "../BaseButton";
import { TYPE } from "../BaseButton.types";

describe('Button', () => {
  test('Primary button is rendered', () => {
    const wrapper = mount(bButton, {
      propsData: {
          type: TYPE.PRIMARY
      }
    });
    expect(wrapper.classes('b-btn__primary')).toBe(true);
  });

  test('Button is rendered correctly', () => {
    const wrapper = mount(bButton);
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('Secondary button is rendered', () => {
    const wrapper = mount(bButton, {
      propsData: {
          type: TYPE.SECONDARY
      }
    });
    expect(wrapper.classes('b-btn__secondary')).toBe(true);
  });

  test('Button emit a click event', () => {
    const wrapper = mount(bButton);
    wrapper.trigger('click');
    const emmitedEvent = wrapper.emitted('click');
    expect(emmitedEvent).toHaveLength(1);
  });
});