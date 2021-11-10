// Update the relevant fields with the new data.
const setDOMInfo = info => {
    document.getElementsByClassName('description-content').innerHTML = info.description;
    
 };

 // Once the DOM is ready...
window.addEventListener('DOMContentLoaded', () => {
    // ...query for the active tab...
    chrome.tabs.query({
       active: true,
       currentWindow: true
    }, tabs => {
       // ...and send a request for the DOM info...
       chrome.tabs.sendMessage(
          tabs[0].id, {
             from: 'popup',
             subject: 'DOMInfo'
          },
          // ...also specifying a callback to be called 
          //    from the receiving end (content script).
          setDOMInfo);
    });
 });