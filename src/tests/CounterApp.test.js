import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe mostrar el valor por defecto de 100', () => {
    const wrapper = shallow(<CounterApp value={100} />);
    const counterText = wrapper.find('h2').text();
    expect(counterText).toBe('100');
  });

  test('debe incrementar con el botón +1', () => {
    wrapper.find('button').at(0).simulate('click');
    const counterText = wrapper.find('h2').text();
    expect(counterText).toBe('11');
  });

  test('debe decrementar con el botón -1', () => {
    wrapper.find('button').at(2).simulate('click');
    const counterText = wrapper.find('h2').text();
    expect(counterText).toBe('9');
  });

  test('debe reiniciar al valor por defecto con el botón reset', () => {
    const wrapper = shallow(<CounterApp value={105} />);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    const counterText = wrapper.find('h2').text();
    expect(counterText).toBe('105');
  });
});
