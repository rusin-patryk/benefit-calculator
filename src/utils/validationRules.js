export default {
  isValidNumber: [
    v => !!v.toString() || 'To pole jest wymagane.',
    v => v <= 1000000 || 'Wprowadzona liczba jest za duża.',
    v => v > 0 || 'Wprowadzona liczba jest za mała.',
  ],
  isValidPercentage: [
    v => !!v.toString() || 'To pole jest wymagane.',
    v => v <= 100 || 'Wprowadzona liczba jest za duża.',
    v => v > 0 || 'Wprowadzona liczba jest za mała.',
  ],
};
