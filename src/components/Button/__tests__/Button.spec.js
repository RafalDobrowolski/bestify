import { mount } from '@vue/test-utils';
import Button from "../Button";
import { TYPE } from "../Button.types";

describe('Button', () => {
  test('Primary button is rendered', () => {
    const wrapper = mount(Button, {
      propsData: {
          type: TYPE.PRIMARY
      }
    });
    expect(wrapper.classes()).toContain("primary");
  });

  test('Button is rendered correctly', () => {
    const wrapper = mount(Button);
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('Secondary button is rendered', () => {
    const wrapper = mount(Button, {
      propsData: {
          type: TYPE.SECONDARY
      }
    });
    expect(wrapper.classes()).toContain("secondary");
  });

  test('Button emit a click event', () => {
    const wrapper = mount(Button);
    wrapper.trigger('click');
    const emmitedEvent = wrapper.emitted('click');
    expect(emmitedEvent).toHaveLength(1);
  });
});