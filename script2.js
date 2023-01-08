  // Navigate to next step
  const nextStep = () => {
    currentStep++;
    updateForm();
  };

  // Navigate to previous step
  const prevStep = () => {
    currentStep--;
    updateForm();
  };

  // Go to a specific step
  const goToStep = n => {
    currentStep = n;
    updateForm();
  };

  // Update form display
  const updateForm = () => {
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => step.classList.add('hidden'));
    steps[currentStep - 1].classList.remove('hidden');

    const progress = document.querySelectorAll('.number-field');
    progress.forEach(field => field.classList.remove('current'));
    progress[currentStep - 1].classList.add('current');
  };

  // Handle click on the next button
  const handleNextButtonClick = () => {
    const nextButton = document.querySelector('#next-step-1');
    nextButton.addEventListener('click', () => {
      nextStep();
    });
  };

  // Handle click on the previous button
  const handlePrevButtonClick = () => {
    const prevButton = document.querySelector('#prev-step-2');
    prevButton.addEventListener('click', () => {
      prevStep();
    });
  };

  // Handle click on the go back button
  const handleGoBackButtonClick = () => {
    const goBackButton = document.querySelector('#go-back-3');
    goBackButton.addEventListener('click', () => {
      goToStep(2);
    });
  };
