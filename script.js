// hide all steps except the first one
document.querySelectorAll('.step').forEach(step => {
  if (step.id !== 'step-1') {
    step.style.display = 'none';
  }
});

// handle "Next Step" button clicks
document.querySelectorAll('[id^=next-step]').forEach(button => {
  button.addEventListener('click', e => {
    // get the current step and the next step
    const currentStep = e.target.closest('.step');
    const nextStep = document.getElementById(`step-${Number(currentStep.id.split('-')[1]) + 1}`);

    // if there is a next step, go to it
    if (nextStep) {
      currentStep.classList.remove('current');
      nextStep.classList.add('current');
      nextStep.style.display = 'block';
    }
  });
});

// handle "Go Back" button clicks
document.querySelectorAll('[id^=go-back]').forEach(button => {
  button.addEventListener('click', e => {
    // get the current step and the previous step
    const currentStep = e.target.closest('.step');
    const previousStep = document.getElementById(`step-${Number(currentStep.id.split('-')[1]) - 1}`);

    // if there is a previous step, go to it
    if (previousStep) {
      currentStep.classList.remove('current');
      previousStep.classList.add('current');
      previousStep.style.display = 'block';
    }
  });
});
