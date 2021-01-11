export default class CalcFormFactory {
  constructor(employees, employeesWithProblems, reducedEfficiency, averageSalary) {
    this.employees = employees || 1000;
    this.employeesWithProblems = employeesWithProblems || 5;
    this.reducedEfficiency = reducedEfficiency || 20;
    this.averageSalary = averageSalary || 5227;
  }
}
