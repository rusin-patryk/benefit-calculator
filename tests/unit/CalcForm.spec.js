import Vue from 'vue';
import Vuetify from 'vuetify';
import {mount} from '@vue/test-utils';
import CalcForm from '@/components/CalcForm';

Vue.use(Vuetify);
Vue.config.silent = true;

describe('CalcForm.vue', () => {
  const wrapper = mount(CalcForm);

  it('renders component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('is form object correct', () => {
    const formData = {
      employees: 1000,
      employeesWithProblems: 5,
      reducedEfficiency: 20,
      averageSalary: 5227,
    };

    expect(wrapper.vm.$data.formData.employees).toBe(formData.employees);
    expect(wrapper.vm.$data.formData.employeesWithProblems).toBe(formData.employeesWithProblems);
    expect(wrapper.vm.$data.formData.reducedEfficiency).toBe(formData.reducedEfficiency);
    expect(wrapper.vm.$data.formData.averageSalary).toBe(formData.averageSalary);
  });

  it('is monthlySalariesBudget() valid', () => {
    expect(wrapper.vm.monthlySalariesBudget()).toBe(313600);
  });

  it('is monthlyEmployerCosts() valid', () => {
    expect(wrapper.vm.monthlyEmployerCosts()).toBe(62720);
  });

  it('is employerCosts() valid', () => {
    expect(wrapper.vm.employerCosts()).toBe(6272);
  });

  it('is yearlySalariesBudget() valid', () => {
    expect(wrapper.vm.yearlySalariesBudget()).toBe(3763200);
  });

  it('is yearlyEmployerCosts() valid', () => {
    expect(wrapper.vm.yearlyEmployerCosts()).toBe(752640);
  });
});
