/* eslint-disable no-undef */
/* eslint-disable no-console */
import './style.css';
import { sendSeconds } from './api/dataService';

const app = () => {
  const mainContainer = document.createElement('section');
  mainContainer.classList.add('container');

  const heading = document.createElement('p');
  heading.classList.add('heading');
  heading.innerHTML = 'Activity Analytics';
  mainContainer.appendChild(heading);

  const button = document.createElement('button');
  button.classList.add('button');
  button.innerHTML = 'Get Seconds';
  mainContainer.appendChild(button);

  const fetchedSeconds = [];
  const requestSeconds = [];
  let getAnalyticsIntervel = false;

  let isTabActive;
  window.addEventListener('focus', () => {
    isTabActive = true;
    console.log('page active');
    if (!getAnalyticsIntervel) {
      getAnalyticsIntervel = setInterval(async () => {
        if (isTabActive) {
          while (requestSeconds.length > 0) {
            const currSeconds = requestSeconds.shift();
            // eslint-disable-next-line no-await-in-loop
            await sendSeconds(currSeconds, (resp) => {
              console.log(`id: ${resp.id}, seconds: ${currSeconds}`);
            });
          }
        }
      }, 1000);
    }
  });

  window.addEventListener('blur', () => {
    isTabActive = false;
    console.log('page inactive');
    clearInterval(getAnalyticsIntervel);
    getAnalyticsIntervel = false;
  });

  button.addEventListener('click', () => {
    const date = new Date();
    const seconds = date.getSeconds();

    if (!fetchedSeconds.includes(seconds)) {
      fetchedSeconds.push(seconds);
      requestSeconds.push(seconds);
    } else {
      console.warn(`repeated seconds: ${seconds}`);
    }

    // initiate time intervel for in sequence of happining
    if (!getAnalyticsIntervel) {
      getAnalyticsIntervel = setInterval(async () => {
        if (isTabActive) {
          while (requestSeconds.length > 0) {
            const currSeconds = requestSeconds.shift();
            // eslint-disable-next-line no-await-in-loop
            await sendSeconds(currSeconds, (resp) => {
              console.log(`id: ${resp.id}, seconds: ${currSeconds}`);
            });
          }
        }
      }, 1000);
    }
  });

  return mainContainer;
};

document.body.appendChild(app());
