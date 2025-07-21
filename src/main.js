import { initializeApp } from './js/app.js';
import { initializeMatrix } from './js/matrix.js';
import { initializeNavigation } from './js/navigation.js';
import { initializeAnimations } from './js/animations.js';

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
  initializeMatrix();
  initializeNavigation();
  initializeAnimations();
});