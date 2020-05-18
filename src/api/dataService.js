import XmlHttpRequest from './xmlHttpRequest';

export const sendSeconds = (data, onSuccess) => new Promise(() => {
  const xmlHttpRequest = new XmlHttpRequest();
  xmlHttpRequest.post('https://jsonplaceholder.typicode.com/posts', data, onSuccess);
});

export default {
  sendSeconds,
};
